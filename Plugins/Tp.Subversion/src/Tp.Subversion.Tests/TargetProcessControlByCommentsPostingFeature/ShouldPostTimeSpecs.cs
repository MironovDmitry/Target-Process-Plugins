// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using NBehave.Narrator.Framework;
using NUnit.Framework;
using StructureMap;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Testing.Common;
using Tp.SourceControl.Comments;
using Tp.Subversion.Context;
using Tp.Subversion.EditProfileFeature;
using Tp.Subversion.StructureMap;
using Tp.Subversion.UserMappingFeature;
using Tp.Testing.Common.NBehave;
using Tp.Testing.Common.NUnit;

namespace Tp.Subversion.TargetProcessControlByCommentsPostingFeature
{
	[TestFixture, ActionSteps]
	public class ShouldPostTimeSpecs
	{
		[SetUp]
		public void Init()
		{
			ObjectFactory.Initialize(x => x.AddRegistry<VcsMockEnvironmentRegistry>());
			ObjectFactory.Configure(x => x.For<TransportMock>().Use(TransportMock.CreateWithoutStructureMapClear(typeof(SubversionPluginProfile).Assembly, new List<Assembly> { typeof(Command).Assembly })));
		}

		[Test]
		public void ShouldPostTime()
		{
			@"Given tp user 'tpuser' with id 5
					And vcs user 'svnuser' mapped as 'tpuser'
					And vcs commit is: {Id:1, Comment:""#123 time:1"", Author:""svnuser""}
				When plugin started up
				Then time 1 should be posted on entity 123 by the 'tpuser'"
				.Execute(In.Context<VcsPluginActionSteps>().And<WhenCommitMadeByTpUserSpecs>().And<ShouldPostTimeSpecs>().And<UserMappingFeatureActionSteps>());
		}

		[Test]
		public void ShouldPostTimeToMultipleEntities()
		{
			@"Given tp user 'tpuser' with id 5
					And vcs user 'svnuser' mapped as 'tpuser'
					And vcs commit is: {Id:1, Comment:""#123 time:1 #66 time:2:3.4"", Author:""svnuser""}
				When plugin started up
				Then time 1 should be posted on entity 123 by the 'tpuser'
					And time spent 2 and time left 3.4 should be posted on entity 66 by the 'tpuser'"
				.Execute(In.Context<VcsPluginActionSteps>().And<WhenCommitMadeByTpUserSpecs>().And<ShouldPostTimeSpecs>().And<UserMappingFeatureActionSteps>());
		}

		[Test]
		public void ShouldNotPostTimeWhenParametersMissed()
		{
			@"Given vcs commit is: {Id:1, Comment:""#123 comment:bla-bla my comment time:3"", Author:""svnuser""}
				When plugin started up
				Then time should not be posted"
				.Execute(In.Context<VcsPluginActionSteps>().And<WhenCommitMadeByTpUserSpecs>().And<ShouldPostTimeSpecs>().And<UserMappingFeatureActionSteps>());
		}

		[Test]
		public void ShouldPostSpentAndLeftTime()
		{
			@"Given tp user 'tpuser' with id 5
					And vcs user 'svnuser' mapped as 'tpuser'
					And vcs commit is: {Id:1, Comment:""#123 time:1:6"", Author:""svnuser""}
				When plugin started up
				Then time spent 1 and time left 6 should be posted on entity 123 by the 'tpuser'"
				.Execute(In.Context<VcsPluginActionSteps>().And<WhenCommitMadeByTpUserSpecs>().And<ShouldPostTimeSpecs>().And<UserMappingFeatureActionSteps>());
		}

		[Test]
		public void ShouldPostDecimalTime()
		{
			@"Given tp user 'tpuser' with id 5
					And vcs user 'svnuser' mapped as 'tpuser'
					And vcs commit is: {Id:1, Comment:""#123 time:1.5:6.0"", Author:""svnuser""}
				When plugin started up
				Then time spent 1.5 and time left 6.0 should be posted on entity 123 by the 'tpuser'"
				.Execute(In.Context<VcsPluginActionSteps>().And<WhenCommitMadeByTpUserSpecs>().And<ShouldPostTimeSpecs>().And<UserMappingFeatureActionSteps>());
		}

		[Test]
		public void ShouldNotPostTimeIfCommentHasTypo()
		{
			@"Given tp user 'tpuser' with id 5
					And vcs user 'svnuser' mapped as 'tpuser'
					And vcs commit is: {Id:1, Comment:""#123 timee:1"", Author:""svnuser""}
				When plugin started up
				Then time should not be posted"
				.Execute(In.Context<VcsPluginActionSteps>().And<WhenCommitMadeByTpUserSpecs>().And<ShouldPostTimeSpecs>().And<UserMappingFeatureActionSteps>());
		}

		[Then(@"time (?<time>[\d+]) should be posted on entity $entityId by the '$tpUserName'")]
		public void TimeShouldBePosted(int time, int entityId, string userName)
		{
			var postTimeCmd =
				ObjectFactory.GetInstance<TransportMock>().TpQueue.GetMessages<PostTimeCommand>().Where(x => x.EntityId == entityId)
					.Single();
			postTimeCmd.Spent.Should(Be.EqualTo(time));
			postTimeCmd.Left.Should(Be.Null);

			var context = Context;
			var user = context.GetTpUserByName(userName);

			postTimeCmd.Description.Should(Be.EqualTo(Context.Revisions.Single().Comment));
			postTimeCmd.UserID.Should(Be.EqualTo(user.Id));
			postTimeCmd.EntityId.Should(Be.EqualTo(entityId));
		}

		[Then("time should not be posted")]
		public void TimeShouldNotBePosted()
		{
			Context.Transport.TpQueue.GetMessages<PostTimeCommand>().ToArray().Should(Be.Empty);
		}

		[Then("time spent $timeSpent and time left $timeLeft should be posted on entity $entityId by the '$tpUserName'")]
		public void TimeShouldBePosted1(double timeSpent, double timeLeft, int entityId, string userName)
		{
			var postTimeCmd =
				ObjectFactory.GetInstance<TransportMock>().TpQueue.GetMessages<PostTimeCommand>().Where(x => x.EntityId == entityId)
					.Single();
			postTimeCmd.Spent.Should(Be.EqualTo(timeSpent));
			postTimeCmd.Left.Should(Be.EqualTo(timeLeft));

			var context = Context;
			var user = context.GetTpUserByName(userName);

			postTimeCmd.Description.Should(Be.EqualTo(Context.Revisions.Single().Comment));
			postTimeCmd.UserID.Should(Be.EqualTo(user.Id));
			postTimeCmd.EntityId.Should(Be.EqualTo(entityId));
		}

		private static VcsPluginContext Context
		{
			get { return ObjectFactory.GetInstance<VcsPluginContext>(); }
		}
	}
}
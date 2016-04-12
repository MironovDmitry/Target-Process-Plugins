﻿// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System.Linq;
using Tp.Integration.Plugin.Common.Domain;
using Tp.SourceControl.RevisionStorage;
using Tp.SourceControl.VersionControlSystem;

namespace Tp.Git.RevisionStorage
{
	public class GitRevisionStorageRepository : RevisionStorageRepository
	{
		public GitRevisionStorageRepository(IStorageRepository repository, IProfileCollectionReadonly profiles)
			: base(repository, profiles)
		{
		}

		public static string GetKey(RevisionInfo revision)
		{
			var result = revision.Id.Value;
			if (revision.TimeCreated.HasValue)
			{
				result = string.Format("{0}#{1}", revision.TimeCreated.Value.Ticks, revision.Comment);
				if (result.Length > 255)
				{
					result = result.Substring(0, 255);
				}
			}

			return result;
		}

		public override bool SaveRevisionInfo(RevisionInfo revision, out string key)
		{
			var revisionKey = GetKey(revision);
			var info = Repository.Get<bool>(revisionKey);
			var revisionIsNew = !info.FirstOrDefault();

			if (revisionIsNew)
			{
				info.ReplaceWith(true);
			}

			key = revisionKey;

			return revisionIsNew;
		}

		public override void RemoveRevisionInfo(string revisionKey)
		{
			if (!string.IsNullOrEmpty(revisionKey))
			{
				Repository.Get<bool>(revisionKey).Remove(_ => true);
			}
		}
	}
}
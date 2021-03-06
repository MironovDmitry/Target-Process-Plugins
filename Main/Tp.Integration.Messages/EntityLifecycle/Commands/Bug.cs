﻿// 
// Copyright (c) 2005-2010 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 
using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateBugCommand : CreateEntityCommand<BugDTO>
	{
		public CreateBugCommand(BugDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateBugCommand : UpdateEntityCommand<BugDTO>
	{
		public UpdateBugCommand(BugDTO dto) : base(dto)
		{
		}

		public UpdateBugCommand(BugDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteBugCommand : DeleteEntityCommand<BugDTO>
	{
		public DeleteBugCommand(int id) : base(id)
		{
		}
	}
}
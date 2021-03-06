﻿// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using Tp.BugTracking.Commands.Dtos;
using Tp.Integration.Plugin.Common.Mapping;

namespace Tp.BugTracking.Mappers
{
	public interface IThirdPartyFieldsMapper
	{
		Mappings Map(MappingSource source);
	}
}
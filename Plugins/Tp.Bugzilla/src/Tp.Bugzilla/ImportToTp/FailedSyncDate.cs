// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System;

namespace Tp.Bugzilla.ImportToTp
{
	[Serializable]
	public class FailedSyncDate
	{
		public FailedSyncDate()
		{
		}

		public FailedSyncDate(DateTime failedSyncDate)
		{
			if(failedSyncDate == DateTime.MinValue)
			{
				_value = null;
			}
			else
			{
				_value = failedSyncDate;
			}
		}

		private DateTime? _value;

		public DateTime GetValue()
		{
			return _value.HasValue ? _value.Value : DateTime.MinValue;
		}
	}
}
//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using System.Xml.Serialization;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
    /// <summary>
    /// Data Transfer object of Role Effort. 
    /// </summary>
	[Serializable]
	public partial class RoleEffortDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return RoleEffortID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				RoleEffortID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Role Effort ID.
        /// </summary>
        /// <value>The Role Effort ID.</value>
		[PrimaryKey]
		[XmlElement(Order = 3)]public int? RoleEffortID { get; set; }
		

		/// <summary>
        /// Gets or sets the Initial Estimate. 
        /// </summary>
        /// <value>The Initial Estimate.</value>
		[XmlElement(Order = 4)]public Decimal? InitialEstimate { get; set; }

		/// <summary>
        /// Gets or sets the Effort. Estimated effort required for Role to complete assignment
        /// </summary>
        /// <value>The Effort.</value>
		[XmlElement(Order = 5)]public Decimal? Effort { get; set; }

		/// <summary>
        /// Gets or sets the Effort Completed. Effort spent on assignment. Read-only calculated field
        /// </summary>
        /// <value>The Effort Completed.</value>
		[XmlElement(Order = 6)]public Decimal? EffortCompleted { get; set; }

		/// <summary>
        /// Gets or sets the Effort To Do. Effort required to complete assignment for Role. Read-only calculated field
        /// </summary>
        /// <value>The Effort To Do.</value>
		[XmlElement(Order = 7)]public Decimal? EffortToDo { get; set; }

		/// <summary>
        /// Gets or sets the Time Spent. Total time spent on assignment for Role. Read-only calculated field
        /// </summary>
        /// <value>The Time Spent.</value>
		[XmlElement(Order = 8)]public Decimal? TimeSpent { get; set; }

		/// <summary>
        /// Gets or sets the Time Remain. Total time remaining to complete assignment for Role. Read-only calculated field
        /// </summary>
        /// <value>The Time Remain.</value>
		[XmlElement(Order = 9)]public Decimal? TimeRemain { get; set; }

		/// <summary>
        /// Gets or sets the Substraction From Parent Effort. 
        /// </summary>
        /// <value>The Substraction From Parent Effort.</value>
		[XmlElement(Order = 10)]public Boolean? SubstractionFromParentEffort { get; set; }
		
		/// <summary>
        /// Gets or sets the Assignable ID. Assignable relation (User Story, Bug, Task)
        /// </summary>
        /// <value>The Assignable ID.</value>
		[ForeignKey]
		[XmlElement(Order = 11)]public Int32? AssignableID { get; set; }
		
		/// <summary>
        /// Gets or sets the Role ID. Role relation. RoleEffort should have Role
        /// </summary>
        /// <value>The Role ID.</value>
		[ForeignKey]
		[XmlElement(Order = 12)]public Int32? RoleID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Assignable Name. Assignable relation (User Story, Bug, Task)
        /// </summary>
        /// <value>The Assignable Name.</value>
		[RelationName]
		[XmlElement(Order = 13)]public virtual string AssignableName { get; set; }
		
		/// <summary>
        /// Gets or sets the Role Name. Role relation. RoleEffort should have Role
        /// </summary>
        /// <value>The Role Name.</value>
		[RelationName]
		[XmlElement(Order = 14)]public virtual string RoleName { get; set; }
		
	}
	
	
	/// <summary>
    /// Role Effort fields
    /// </summary>
	public enum RoleEffortField
	{
        /// <summary>
        /// Initial Estimate
        /// </summary>		
		InitialEstimate,
        /// <summary>
        /// Effort
        /// </summary>		
		Effort,
        /// <summary>
        /// Effort Completed
        /// </summary>		
		EffortCompleted,
        /// <summary>
        /// Effort To Do
        /// </summary>		
		EffortToDo,
        /// <summary>
        /// Time Spent
        /// </summary>		
		TimeSpent,
        /// <summary>
        /// Time Remain
        /// </summary>		
		TimeRemain,
        /// <summary>
        /// Substraction From Parent Effort
        /// </summary>		
		SubstractionFromParentEffort,
        /// <summary>
        /// Assignable ID
        /// </summary>		
		AssignableID,
        /// <summary>
        /// Role ID
        /// </summary>		
		RoleID,
        /// <summary>
        /// Assignable Name
        /// </summary>		
		AssignableName,
        /// <summary>
        /// Role Name
        /// </summary>		
		RoleName,
	}
}

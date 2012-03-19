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
    /// Data Transfer object of Release. Represents release. Each project may have several releases and each release may contain several iterations. Typical release duration is 1-4 months..
    /// </summary>
	[Serializable]
	public partial class ReleaseDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return ReleaseID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				ReleaseID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Release ID.
        /// </summary>
        /// <value>The Release ID.</value>
		[PrimaryKey]
		[XmlElement(Order = 3)]public int? ReleaseID { get; set; }
		

		/// <summary>
        /// Gets or sets the Name. Entity name or title
        /// </summary>
        /// <value>The Name.</value>
		[XmlElement(Order = 4)]public String Name { get; set; }

		/// <summary>
        /// Gets or sets the Description. Entity description
        /// </summary>
        /// <value>The Description.</value>
		[XmlElement(Order = 5)]public String Description { get; set; }

		/// <summary>
        /// Gets or sets the Start Date. For example, start date of the iteration. Relevant for Iteration, Project, Release.
        /// </summary>
        /// <value>The Start Date.</value>
		[XmlElement(Order = 6)]public DateTime? StartDate { get; set; }

		/// <summary>
        /// Gets or sets the End Date. For example, end date of the iteration. Relevant for Iteration, Project, Release.
        /// </summary>
        /// <value>The End Date.</value>
		[XmlElement(Order = 7)]public DateTime? EndDate { get; set; }

		/// <summary>
        /// Gets or sets the Create Date. Date when entity has been created
        /// </summary>
        /// <value>The Create Date.</value>
		[XmlElement(Order = 8)]public DateTime? CreateDate { get; set; }

		/// <summary>
        /// Gets or sets the Modify Date. Date when entity has been modified
        /// </summary>
        /// <value>The Modify Date.</value>
		[XmlElement(Order = 9)]public DateTime? ModifyDate { get; set; }

		/// <summary>
        /// Gets or sets the Last Comment Date. Last comment date
        /// </summary>
        /// <value>The Last Comment Date.</value>
		[XmlElement(Order = 10)]public DateTime? LastCommentDate { get; set; }

		/// <summary>
        /// Gets or sets the Numeric Priority. Calculated priority of entity. Valid for UserStory and Bug for now
        /// </summary>
        /// <value>The Numeric Priority.</value>
		[XmlElement(Order = 11)]public Double? NumericPriority { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field1. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field1.</value>
		[XmlElement(Order = 12)]public String CustomField1 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field2. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field2.</value>
		[XmlElement(Order = 13)]public String CustomField2 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field3. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field3.</value>
		[XmlElement(Order = 14)]public String CustomField3 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field4. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field4.</value>
		[XmlElement(Order = 15)]public String CustomField4 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field5. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field5.</value>
		[XmlElement(Order = 16)]public String CustomField5 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field6. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field6.</value>
		[XmlElement(Order = 17)]public String CustomField6 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field7. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field7.</value>
		[XmlElement(Order = 18)]public String CustomField7 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field8. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field8.</value>
		[XmlElement(Order = 19)]public String CustomField8 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field9. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field9.</value>
		[XmlElement(Order = 20)]public String CustomField9 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field10. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field10.</value>
		[XmlElement(Order = 21)]public String CustomField10 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field11. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field11.</value>
		[XmlElement(Order = 22)]public String CustomField11 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field12. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field12.</value>
		[XmlElement(Order = 23)]public String CustomField12 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field13. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field13.</value>
		[XmlElement(Order = 24)]public String CustomField13 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field14. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field14.</value>
		[XmlElement(Order = 25)]public String CustomField14 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field15. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field15.</value>
		[XmlElement(Order = 26)]public String CustomField15 { get; set; }
		
		/// <summary>
        /// Gets or sets the Last Comment User ID. User who added last comment
        /// </summary>
        /// <value>The Last Comment User ID.</value>
		[ForeignKey]
		[XmlElement(Order = 27)]public Int32? LastCommentUserID { get; set; }
		
		/// <summary>
        /// Gets or sets the Owner ID. Person who added the entity
        /// </summary>
        /// <value>The Owner ID.</value>
		[ForeignKey]
		[XmlElement(Order = 28)]public Int32? OwnerID { get; set; }
		
		/// <summary>
        /// Gets or sets the Last Editor ID. Person who edited entity last time
        /// </summary>
        /// <value>The Last Editor ID.</value>
		[ForeignKey]
		[XmlElement(Order = 29)]public Int32? LastEditorID { get; set; }
		
		/// <summary>
        /// Gets or sets the Project ID. Project to which release belongs.
        /// </summary>
        /// <value>The Project ID.</value>
		[ForeignKey]
		[XmlElement(Order = 30)]public Int32? ProjectID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Entity Type Name. Type of the entity. For example, Bug, TestCase, Task
        /// </summary>
        /// <value>The Entity Type Name.</value>
		[RelationName]
		[XmlElement(Order = 31)]public virtual string EntityTypeName { get; set; }
		
		/// <summary>
        /// Gets or sets the Project Name. Project to which release belongs.
        /// </summary>
        /// <value>The Project Name.</value>
		[RelationName]
		[XmlElement(Order = 32)]public virtual string ProjectName { get; set; }
		
	}
	
	
	/// <summary>
    /// Release fields
    /// </summary>
	public enum ReleaseField
	{
        /// <summary>
        /// Name
        /// </summary>		
		Name,
        /// <summary>
        /// Description
        /// </summary>		
		Description,
        /// <summary>
        /// Start Date
        /// </summary>		
		StartDate,
        /// <summary>
        /// End Date
        /// </summary>		
		EndDate,
        /// <summary>
        /// Create Date
        /// </summary>		
		CreateDate,
        /// <summary>
        /// Modify Date
        /// </summary>		
		ModifyDate,
        /// <summary>
        /// Last Comment Date
        /// </summary>		
		LastCommentDate,
        /// <summary>
        /// Numeric Priority
        /// </summary>		
		NumericPriority,
        /// <summary>
        /// Custom Field1
        /// </summary>		
		CustomField1,
        /// <summary>
        /// Custom Field2
        /// </summary>		
		CustomField2,
        /// <summary>
        /// Custom Field3
        /// </summary>		
		CustomField3,
        /// <summary>
        /// Custom Field4
        /// </summary>		
		CustomField4,
        /// <summary>
        /// Custom Field5
        /// </summary>		
		CustomField5,
        /// <summary>
        /// Custom Field6
        /// </summary>		
		CustomField6,
        /// <summary>
        /// Custom Field7
        /// </summary>		
		CustomField7,
        /// <summary>
        /// Custom Field8
        /// </summary>		
		CustomField8,
        /// <summary>
        /// Custom Field9
        /// </summary>		
		CustomField9,
        /// <summary>
        /// Custom Field10
        /// </summary>		
		CustomField10,
        /// <summary>
        /// Custom Field11
        /// </summary>		
		CustomField11,
        /// <summary>
        /// Custom Field12
        /// </summary>		
		CustomField12,
        /// <summary>
        /// Custom Field13
        /// </summary>		
		CustomField13,
        /// <summary>
        /// Custom Field14
        /// </summary>		
		CustomField14,
        /// <summary>
        /// Custom Field15
        /// </summary>		
		CustomField15,
        /// <summary>
        /// Last Comment User ID
        /// </summary>		
		LastCommentUserID,
        /// <summary>
        /// Owner ID
        /// </summary>		
		OwnerID,
        /// <summary>
        /// Last Editor ID
        /// </summary>		
		LastEditorID,
        /// <summary>
        /// Project ID
        /// </summary>		
		ProjectID,
        /// <summary>
        /// Entity Type Name
        /// </summary>		
		EntityTypeName,
        /// <summary>
        /// Project Name
        /// </summary>		
		ProjectName,
	}
}

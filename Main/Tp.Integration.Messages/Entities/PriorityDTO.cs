//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using System.Xml.Serialization;using System.Runtime.Serialization;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
    /// <summary>
    /// Data Transfer object of Priority. Represents priority of User Story, Bug or Feature.
    /// </summary>
	[Serializable][DataContract]
	public partial class PriorityDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return PriorityID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				PriorityID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Priority ID.
        /// </summary>
        /// <value>The Priority ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? PriorityID { get; set; }
		

		/// <summary>
        /// Gets or sets the Name. Priority name. For example: Must Have
        /// </summary>
        /// <value>The Name.</value>
		[DataMember][XmlElement(Order = 4)]public String Name { get; set; }

		/// <summary>
        /// Gets or sets the Importance. Defines priority importance. Minimal value is highest importance.
        /// </summary>
        /// <value>The Importance.</value>
		[DataMember][XmlElement(Order = 5)]public Int32? Importance { get; set; }

		/// <summary>
        /// Gets or sets the Is Default. Defined default priority for entity
        /// </summary>
        /// <value>The Is Default.</value>
		[DataMember][XmlElement(Order = 6)]public Boolean? IsDefault { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Entity Type Name. Type of the entity to which priority belongs
        /// </summary>
        /// <value>The Entity Type Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 7)]public virtual string EntityTypeName { get; set; }
		
	}
	
	
	/// <summary>
    /// Priority fields
    /// </summary>
	public enum PriorityField
	{
        /// <summary>
        /// Name
        /// </summary>		
		Name,
        /// <summary>
        /// Importance
        /// </summary>		
		Importance,
        /// <summary>
        /// Is Default
        /// </summary>		
		IsDefault,
        /// <summary>
        /// Entity Type Name
        /// </summary>		
		EntityTypeName,
	}
}

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
    /// Data Transfer object of Tp Event. Represents event defined for some entity type.
	/// TargetProcess system usage only
    /// </summary>
	[Serializable][DataContract]
	public partial class TpEventDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return TpEventID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				TpEventID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Tp Event ID.
        /// </summary>
        /// <value>The Tp Event ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? TpEventID { get; set; }
		

		/// <summary>
        /// Gets or sets the Action Type. The type of action
        /// </summary>
        /// <value>The Action Type.</value>
		[DataMember][XmlElement(Order = 4)]public ActionTypeEnum? ActionType { get; set; }

		/// <summary>
        /// Gets or sets the Entity Type. Reference to issued entity type. For example Bug
        /// </summary>
        /// <value>The Entity Type.</value>
		[DataMember][XmlElement(Order = 5)]public String EntityTypeName { get; set; }
		
		/// <summary>
        /// Gets or sets the State ID. Reference to issued state
        /// </summary>
        /// <value>The State ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 6)]public Int32? EntityStateID { get; set; }

		/// <summary>
        /// Gets or sets the State Name. Reference to issued state
        /// </summary>
        /// <value>The State Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 7)]public virtual string StateName { get; set; }
		
	}

	/// <summary>
    /// Tp Event fields
    /// </summary>
	public enum TpEventField
	{
        /// <summary>
        /// Action Type
        /// </summary>
		ActionType,
        /// <summary>
        /// Entity Type
        /// </summary>
		EntityType,
        /// <summary>
        /// Entity State ID
        /// </summary>
		EntityStateID,
        /// <summary>
        /// Process ID
        /// </summary>
		ProcessID,
        /// <summary>
        /// State Name
        /// </summary>
		StateName,
	}
}

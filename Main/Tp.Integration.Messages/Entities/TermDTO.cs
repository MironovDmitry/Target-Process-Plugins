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
    /// Data Transfer object of Term. Represents term in specific process..
	/// TargetProcess system usage only
    /// </summary>
	[Serializable]
	public partial class TermDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return TermID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				TermID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Term ID.
        /// </summary>
        /// <value>The Term ID.</value>
		[PrimaryKey]
		[XmlElement(Order = 3)]public int? TermID { get; set; }
		

		/// <summary>
        /// Gets or sets the Word Key. Term Key. For example 'User Story'
        /// </summary>
        /// <value>The Word Key.</value>
		[XmlElement(Order = 4)]public String WordKey { get; set; }

		/// <summary>
        /// Gets or sets the Value. Value to replace the term key
        /// </summary>
        /// <value>The Value.</value>
		[XmlElement(Order = 5)]public String Value { get; set; }

		/// <summary>
        /// Gets or sets the Entity Type ID. The reference to entity type
        /// </summary>
        /// <value>The Entity Type ID.</value>
		[XmlElement(Order = 6)]public Int32? EntityTypeID { get; set; }
		
		/// <summary>
        /// Gets or sets the Process ID. Term must belong to Process
        /// </summary>
        /// <value>The Process ID.</value>
		[ForeignKey]
		[XmlElement(Order = 7)]public Int32? ProcessID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Process Name. Term must belong to Process
        /// </summary>
        /// <value>The Process Name.</value>
		[RelationName]
		[XmlElement(Order = 8)]public virtual string ProcessName { get; set; }
		
	}
	
	
	/// <summary>
    /// Term fields
    /// </summary>
	public enum TermField
	{
        /// <summary>
        /// Word Key
        /// </summary>		
		WordKey,
        /// <summary>
        /// Value
        /// </summary>		
		Value,
        /// <summary>
        /// Entity Type ID
        /// </summary>		
		EntityTypeID,
        /// <summary>
        /// Process ID
        /// </summary>		
		ProcessID,
        /// <summary>
        /// Process Name
        /// </summary>		
		ProcessName,
	}
}

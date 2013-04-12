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
    /// Data Transfer object of Tag Bundle Tag. 
    /// </summary>
	[Serializable][DataContract]
	public partial class TagBundleTagDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return TagBundleTagID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				TagBundleTagID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Tag Bundle Tag ID.
        /// </summary>
        /// <value>The Tag Bundle Tag ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? TagBundleTagID { get; set; }
		
		
		/// <summary>
        /// Gets or sets the Tag Bundle ID. 
        /// </summary>
        /// <value>The Tag Bundle ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 4)]public Int32? TagBundleID { get; set; }
		
		/// <summary>
        /// Gets or sets the Tag ID. 
        /// </summary>
        /// <value>The Tag ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 5)]public Int32? TagID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Tag Bundle Name. 
        /// </summary>
        /// <value>The Tag Bundle Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 6)]public virtual string TagBundleName { get; set; }
		
		/// <summary>
        /// Gets or sets the Tag Name. 
        /// </summary>
        /// <value>The Tag Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 7)]public virtual string TagName { get; set; }
		
	}
	
	
	/// <summary>
    /// Tag Bundle Tag fields
    /// </summary>
	public enum TagBundleTagField
	{
        /// <summary>
        /// Tag Bundle ID
        /// </summary>		
		TagBundleID,
        /// <summary>
        /// Tag ID
        /// </summary>		
		TagID,
        /// <summary>
        /// Tag Bundle Name
        /// </summary>		
		TagBundleName,
        /// <summary>
        /// Tag Name
        /// </summary>		
		TagName,
	}
}

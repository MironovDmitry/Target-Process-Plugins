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
    /// Data Transfer object of Time. Represents Time.
    /// </summary>
	[Serializable][DataContract]
	public partial class TimeDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return TimeID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				TimeID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Time ID.
        /// </summary>
        /// <value>The Time ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? TimeID { get; set; }
		

		/// <summary>
        /// Gets or sets the Description. Description
        /// </summary>
        /// <value>The Description.</value>
		[DataMember][XmlElement(Order = 4)]public String Description { get; set; }

		/// <summary>
        /// Gets or sets the Spent. Spent
        /// </summary>
        /// <value>The Spent.</value>
		[DataMember][XmlElement(Order = 5)]public Decimal? Spent { get; set; }

		/// <summary>
        /// Gets or sets the Remain. Remain
        /// </summary>
        /// <value>The Remain.</value>
		[DataMember][XmlElement(Order = 6)]public Decimal? Remain { get; set; }

		/// <summary>
        /// Gets or sets the Create Date. 
        /// </summary>
        /// <value>The Create Date.</value>
		[DataMember][XmlElement(Order = 7)]public DateTime? CreateDate { get; set; }

		/// <summary>
        /// Gets or sets the Spent Date. Spent Date
        /// </summary>
        /// <value>The Spent Date.</value>
		[DataMember][XmlElement(Order = 8)]public DateTime? SpentDate { get; set; }

		/// <summary>
        /// Gets or sets the Estimation. Estimation
        /// </summary>
        /// <value>The Estimation.</value>
		[DataMember][XmlElement(Order = 9)]public Boolean? Estimation { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field1. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field1.</value>
		[DataMember][XmlElement(Order = 10)]public String CustomField1 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field2. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field2.</value>
		[DataMember][XmlElement(Order = 11)]public String CustomField2 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field3. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field3.</value>
		[DataMember][XmlElement(Order = 12)]public String CustomField3 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field4. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field4.</value>
		[DataMember][XmlElement(Order = 13)]public String CustomField4 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field5. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field5.</value>
		[DataMember][XmlElement(Order = 14)]public String CustomField5 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field6. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field6.</value>
		[DataMember][XmlElement(Order = 15)]public String CustomField6 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field7. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field7.</value>
		[DataMember][XmlElement(Order = 16)]public String CustomField7 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field8. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field8.</value>
		[DataMember][XmlElement(Order = 17)]public String CustomField8 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field9. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field9.</value>
		[DataMember][XmlElement(Order = 18)]public String CustomField9 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field10. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field10.</value>
		[DataMember][XmlElement(Order = 19)]public String CustomField10 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field11. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field11.</value>
		[DataMember][XmlElement(Order = 20)]public String CustomField11 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field12. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field12.</value>
		[DataMember][XmlElement(Order = 21)]public String CustomField12 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field13. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field13.</value>
		[DataMember][XmlElement(Order = 22)]public String CustomField13 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field14. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field14.</value>
		[DataMember][XmlElement(Order = 23)]public String CustomField14 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field15. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field15.</value>
		[DataMember][XmlElement(Order = 24)]public String CustomField15 { get; set; }

		/// <summary>
		/// Gets or sets the Custom Field16. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field16.</value>
		[DataMember][XmlElement(Order = 25)]
		public String CustomField16 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field17. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field17.</value>
		[DataMember][XmlElement(Order = 26)]
		public String CustomField17 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field18. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field18.</value>
		[DataMember][XmlElement(Order = 27)]
		public String CustomField18 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field19. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field19.</value>
		[DataMember][XmlElement(Order = 28)]
		public String CustomField19 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field20. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field20.</value>
		[DataMember][XmlElement(Order = 29)]
		public String CustomField20 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field21. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field21.</value>
		[DataMember][XmlElement(Order = 30)]
		public String CustomField21 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field22. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field22.</value>
		[DataMember][XmlElement(Order = 31)]
		public String CustomField22 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field23. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field23.</value>
		[DataMember][XmlElement(Order = 32)]
		public String CustomField23 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field24. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field24.</value>
		[DataMember][XmlElement(Order = 33)]
		public String CustomField24 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field25. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field25.</value>
		[DataMember][XmlElement(Order = 34)]
		public String CustomField25 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field26. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field26.</value>
		[DataMember][XmlElement(Order = 35)]
		public String CustomField26 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field27. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field27.</value>
		[DataMember][XmlElement(Order = 36)]
		public String CustomField27 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field28. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field28.</value>
		[DataMember][XmlElement(Order = 37)]
		public String CustomField28 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field29. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field29.</value>
		[DataMember][XmlElement(Order = 38)]
		public String CustomField29 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field30. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field30.</value>
		[DataMember][XmlElement(Order = 39)]
		public String CustomField30 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field31. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field31.</value>
		[DataMember][XmlElement(Order = 40)]
		public String CustomField31 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field32. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field32.</value>
		[DataMember][XmlElement(Order = 41)]
		public String CustomField32 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field33. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field33.</value>
		[DataMember][XmlElement(Order = 42)]
		public String CustomField33 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field34. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field34.</value>
		[DataMember][XmlElement(Order = 43)]
		public String CustomField34 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field35. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field35.</value>
		[DataMember][XmlElement(Order = 44)]
		public String CustomField35 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field36. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field36.</value>
		[DataMember][XmlElement(Order = 45)]
		public String CustomField36 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field37. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field37.</value>
		[DataMember][XmlElement(Order = 46)]
		public String CustomField37 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field38. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field38.</value>
		[DataMember][XmlElement(Order = 47)]
		public String CustomField38 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field39. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field39.</value>
		[DataMember][XmlElement(Order = 48)]
		public String CustomField39 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field40. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field40.</value>
		[DataMember][XmlElement(Order = 49)]
		public String CustomField40 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field41. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field41.</value>
		[DataMember][XmlElement(Order = 50)]
		public String CustomField41 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field42. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field42.</value>
		[DataMember][XmlElement(Order = 51)]
		public String CustomField42 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field43. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field43.</value>
		[DataMember][XmlElement(Order = 52)]
		public String CustomField43 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field44. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field44.</value>
		[DataMember][XmlElement(Order = 53)]
		public String CustomField44 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field45. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field45.</value>
		[DataMember][XmlElement(Order = 54)]
		public String CustomField45 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field46. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field46.</value>
		[DataMember][XmlElement(Order = 55)]
		public String CustomField46 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field47. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field47.</value>
		[DataMember][XmlElement(Order = 56)]
		public String CustomField47 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field48. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field48.</value>
		[DataMember][XmlElement(Order = 57)]
		public String CustomField48 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field49. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field49.</value>
		[DataMember][XmlElement(Order = 58)]
		public String CustomField49 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field50. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field50.</value>
		[DataMember][XmlElement(Order = 59)]
		public String CustomField50 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field51. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field51.</value>
		[DataMember][XmlElement(Order = 60)]
		public String CustomField51 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field52. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field52.</value>
		[DataMember][XmlElement(Order = 61)]
		public String CustomField52 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field53. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field53.</value>
		[DataMember][XmlElement(Order = 62)]
		public String CustomField53 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field54. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field54.</value>
		[DataMember][XmlElement(Order = 63)]
		public String CustomField54 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field55. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field55.</value>
		[DataMember][XmlElement(Order = 64)]
		public String CustomField55 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field56. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field56.</value>
		[DataMember][XmlElement(Order = 65)]
		public String CustomField56 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field57. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field57.</value>
		[DataMember][XmlElement(Order = 66)]
		public String CustomField57 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field58. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field58.</value>
		[DataMember][XmlElement(Order = 67)]
		public String CustomField58 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field59. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field59.</value>
		[DataMember][XmlElement(Order = 68)]
		public String CustomField59 { get; set; }
		/// <summary>
		/// Gets or sets the Custom Field60. Reserved property for custom field
		/// </summary>
		/// <value>The Custom Field60.</value>
		[DataMember][XmlElement(Order = 69)]
		public String CustomField60 { get; set; }

		/// <summary>
        /// Gets or sets the Project ID. Reference to Project
        /// </summary>
        /// <value>The Project ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 70)]public Int32? ProjectID { get; set; }
		
		/// <summary>
        /// Gets or sets the User ID. Reference to owner
        /// </summary>
        /// <value>The User ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 71)]public Int32? UserID { get; set; }
		
		/// <summary>
        /// Gets or sets the Assignable ID. Reference to assignable
        /// </summary>
        /// <value>The Assignable ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 72)]public Int32? AssignableID { get; set; }
		
		/// <summary>
        /// Gets or sets the Custom Activity ID. Reference to custom activity
        /// </summary>
        /// <value>The Custom Activity ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 73)]public Int32? CustomActivityID { get; set; }
		
		/// <summary>
        /// Gets or sets the Role ID. Rerefence to role
        /// </summary>
        /// <value>The Role ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 74)]public Int32? RoleID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Project Name. Reference to Project
        /// </summary>
        /// <value>The Project Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 75)]public virtual string ProjectName { get; set; }
		
		/// <summary>
        /// Gets or sets the Assignable Name. Reference to assignable
        /// </summary>
        /// <value>The Assignable Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 76)]public virtual string AssignableName { get; set; }
		
		/// <summary>
        /// Gets or sets the Custom Activity Name. Reference to custom activity
        /// </summary>
        /// <value>The Custom Activity Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 77)]public virtual string CustomActivityName { get; set; }
		
		/// <summary>
        /// Gets or sets the Role Name. Rerefence to role
        /// </summary>
        /// <value>The Role Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 78)]public virtual string RoleName { get; set; }
		
	}
	
	
	/// <summary>
    /// Time fields
    /// </summary>
	public enum TimeField
	{
        /// <summary>
        /// Description
        /// </summary>		
		Description,
        /// <summary>
        /// Spent
        /// </summary>		
		Spent,
        /// <summary>
        /// Remain
        /// </summary>		
		Remain,
        /// <summary>
        /// Create Date
        /// </summary>		
		CreateDate,
        /// <summary>
        /// Spent Date
        /// </summary>		
		SpentDate,
        /// <summary>
        /// Estimation
        /// </summary>		
		Estimation,
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
		/// Custom Field16
		/// </summary>		
		CustomField16,
		/// <summary>
		/// Custom Field17
		/// </summary>		
		CustomField17,
		/// <summary>
		/// Custom Field18
		/// </summary>		
		CustomField18,
		/// <summary>
		/// Custom Field19
		/// </summary>		
		CustomField19,
		/// <summary>
		/// Custom Field20
		/// </summary>		
		CustomField20,
		/// <summary>
		/// Custom Field21
		/// </summary>		
		CustomField21,
		/// <summary>
		/// Custom Field22
		/// </summary>		
		CustomField22,
		/// <summary>
		/// Custom Field23
		/// </summary>		
		CustomField23,
		/// <summary>
		/// Custom Field24
		/// </summary>		
		CustomField24,
		/// <summary>
		/// Custom Field25
		/// </summary>		
		CustomField25,
		/// <summary>
		/// Custom Field26
		/// </summary>		
		CustomField26,
		/// <summary>
		/// Custom Field27
		/// </summary>		
		CustomField27,
		/// <summary>
		/// Custom Field28
		/// </summary>		
		CustomField28,
		/// <summary>
		/// Custom Field29
		/// </summary>		
		CustomField29,
		/// <summary>
		/// Custom Field30
		/// </summary>		
		CustomField30,
		/// <summary>
		/// Custom Field31
		/// </summary>		
		CustomField31,
		/// <summary>
		/// Custom Field32
		/// </summary>		
		CustomField32,
		/// <summary>
		/// Custom Field33
		/// </summary>		
		CustomField33,
		/// <summary>
		/// Custom Field34
		/// </summary>		
		CustomField34,
		/// <summary>
		/// Custom Field35
		/// </summary>		
		CustomField35,
		/// <summary>
		/// Custom Field36
		/// </summary>		
		CustomField36,
		/// <summary>
		/// Custom Field37
		/// </summary>		
		CustomField37,
		/// <summary>
		/// Custom Field38
		/// </summary>		
		CustomField38,
		/// <summary>
		/// Custom Field39
		/// </summary>		
		CustomField39,
		/// <summary>
		/// Custom Field40
		/// </summary>		
		CustomField40,
		/// <summary>
		/// Custom Field41
		/// </summary>		
		CustomField41,
		/// <summary>
		/// Custom Field42
		/// </summary>		
		CustomField42,
		/// <summary>
		/// Custom Field43
		/// </summary>		
		CustomField43,
		/// <summary>
		/// Custom Field44
		/// </summary>		
		CustomField44,
		/// <summary>
		/// Custom Field45
		/// </summary>		
		CustomField45,
		/// <summary>
		/// Custom Field46
		/// </summary>		
		CustomField46,
		/// <summary>
		/// Custom Field47
		/// </summary>		
		CustomField47,
		/// <summary>
		/// Custom Field48
		/// </summary>		
		CustomField48,
		/// <summary>
		/// Custom Field49
		/// </summary>		
		CustomField49,
		/// <summary>
		/// Custom Field50
		/// </summary>		
		CustomField50,
		/// <summary>
		/// Custom Field51
		/// </summary>		
		CustomField51,
		/// <summary>
		/// Custom Field52
		/// </summary>		
		CustomField52,
		/// <summary>
		/// Custom Field53
		/// </summary>		
		CustomField53,
		/// <summary>
		/// Custom Field54
		/// </summary>		
		CustomField54,
		/// <summary>
		/// Custom Field55
		/// </summary>		
		CustomField55,
		/// <summary>
		/// Custom Field56
		/// </summary>		
		CustomField56,
		/// <summary>
		/// Custom Field57
		/// </summary>		
		CustomField57,
		/// <summary>
		/// Custom Field58
		/// </summary>		
		CustomField58,
		/// <summary>
		/// Custom Field59
		/// </summary>		
		CustomField59,
		/// <summary>
		/// Custom Field60
		/// </summary>		
		CustomField60,


        /// <summary>
        /// Project ID
        /// </summary>		
		ProjectID,
        /// <summary>
        /// User ID
        /// </summary>		
		UserID,
        /// <summary>
        /// Assignable ID
        /// </summary>		
		AssignableID,
        /// <summary>
        /// Custom Activity ID
        /// </summary>		
		CustomActivityID,
        /// <summary>
        /// Role ID
        /// </summary>		
		RoleID,
        /// <summary>
        /// Project Name
        /// </summary>		
		ProjectName,
        /// <summary>
        /// Assignable Name
        /// </summary>		
		AssignableName,
        /// <summary>
        /// Custom Activity Name
        /// </summary>		
		CustomActivityName,
        /// <summary>
        /// Role Name
        /// </summary>		
		RoleName,
	}
}

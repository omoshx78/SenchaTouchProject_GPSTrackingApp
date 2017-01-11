using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class RegisteredAccountModel
    {
        public int AccID
        {
            get;
            set;
        }

        public string AccountNo
        {
            get;
            set;
        }

        public string AccountName
        {
            get;
            set;
        }



        public string AAddress
        {
            get;
            set;
        }

        public string AMobilePhone
        {
            get;
            set;
        }

        public string AHousePhone
        {
            get;
            set;
        }

        public string AOfficePhone
        {
            get;
            set;
        }
        public string AAlertPhone
        {
            get;
            set;
        }

        public string AEmail
        {
            get;
            set;
        }
        public string AAlertEmail
        {
            get;
            set;
        }

        public string AVersion
        {
            get;
            set;
        }
        public string ARegisteredDate
        {
            get;
            set;
        }

        public string AExpiredDate
        {
            get;
            set;
        }
        public string ACreatedDate
        {
            get;
            set;
        }

        public string AModifiedDate
        {
            get;
            set;
        }
        public string ACreatedBy
        {
            get;
            set;
        }

        public string AModifiedBy
        {
            get;
            set;
        }
        public string AStatus
        {
            get;
            set;
        }

        public string Alastlogin
        {
            get;
            set;
        }
        public string AItemRegisterCount
        {
            get;
            set;
        }

        public string SMSAlertMsg
        {
            get;
            set;
        }
        

        public RegisteredAccountModel() { }




        public static List<RegisteredAccountModel> Get_AccLatestID()
        {
            List<RegisteredAccountModel> _Value = new List<RegisteredAccountModel>();
            //SqlConnection _SQLConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DentalAppConn"].ConnectionString);
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            using (SqlConnection _DBConnection = _SQLConnection)
            {
                SqlCommand _SQLCommand = new SqlCommand();
                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;
                _SQLCommand.CommandTimeout = 0;
                using (_SQLCommand)
                {
                    try
                    {
                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "Get_AccLatestID";
                     //   _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        RegisteredAccountModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new RegisteredAccountModel();
                            _result.AccID = Convert.ToInt32(_SQLDataReader["AccID"].ToString());
                         
                            _Value.Add(_result);

                        }

                    }

                    catch (Exception ex)
                    {

                        throw new Exception(ex.Message);

                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _Value;

        }


        public static List<RegisteredAccountModel> Get_Account(string AccountNo)
        {
            List<RegisteredAccountModel> _Value = new List<RegisteredAccountModel>();
            //SqlConnection _SQLConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DentalAppConn"].ConnectionString);
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            using (SqlConnection _DBConnection = _SQLConnection)
            {
                SqlCommand _SQLCommand = new SqlCommand();
                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;
                _SQLCommand.CommandTimeout = 0;
                using (_SQLCommand)
                {
                    try
                    {
                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "Get_Account";                       
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        RegisteredAccountModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new RegisteredAccountModel();
                            _result.AccID = Convert.ToInt32(_SQLDataReader["AccID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.AccountName = _SQLDataReader["AccountName"].ToString();
                            _result.AAddress = _SQLDataReader["AAddress"].ToString();
                            _result.AMobilePhone = _SQLDataReader["AMobilePhone"].ToString();
                            _result.AHousePhone = _SQLDataReader["AHousePhone"].ToString();
                            _result.AOfficePhone = _SQLDataReader["AOfficePhone"].ToString();
                            _result.AAlertPhone = _SQLDataReader["AAlertPhone"].ToString();
                            _result.AEmail = _SQLDataReader["AEmail"].ToString();
                            _result.AAlertEmail = _SQLDataReader["AAlertEmail"].ToString();
                            _result.AVersion = _SQLDataReader["AVersion"].ToString();
                            _result.ARegisteredDate = _SQLDataReader["ARegisteredDate"].ToString();
                            _result.AExpiredDate = _SQLDataReader["AExpiredDate"].ToString();
                            _result.ACreatedDate = _SQLDataReader["ACreatedDate"].ToString();
                            _result.AModifiedDate = _SQLDataReader["AModifiedDate"].ToString();
                            _result.ACreatedBy = _SQLDataReader["ACreatedBy"].ToString();
                            _result.AModifiedBy = _SQLDataReader["AModifiedBy"].ToString();
                            _result.AStatus = _SQLDataReader["AStatus"].ToString();
                            _result.Alastlogin = _SQLDataReader["Alastlogin"].ToString();
                            _result.AItemRegisterCount = _SQLDataReader["AItemRegisterCount"].ToString();
                            _result.SMSAlertMsg = _SQLDataReader["SMSAlertMsg"].ToString();
                            
                            _Value.Add(_result);

                        }

                    }

                    catch (Exception ex)
                    {

                        throw new Exception(ex.Message);

                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _Value;

        }

        public static List<RegisteredAccountModel> RegisteredAccountLoadByAccNo(string AccountNo)
        {
            List<RegisteredAccountModel> _Value = new List<RegisteredAccountModel>();
            //SqlConnection _SQLConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DentalAppConn"].ConnectionString);
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            using (SqlConnection _DBConnection = _SQLConnection)
            {
                SqlCommand _SQLCommand = new SqlCommand();
                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;
                _SQLCommand.CommandTimeout = 0;
                using (_SQLCommand)
                {
                    try
                    {
                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "RegisteredAccount_LoadByAccNo";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        RegisteredAccountModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new RegisteredAccountModel();
                            _result.AccID = Convert.ToInt32(_SQLDataReader["AccID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.AccountName = _SQLDataReader["AccountName"].ToString();
                            _result.AAddress = _SQLDataReader["AAddress"].ToString();
                            _result.AMobilePhone = _SQLDataReader["AMobilePhone"].ToString();
                            _result.AHousePhone = _SQLDataReader["AHousePhone"].ToString();
                            _result.AOfficePhone = _SQLDataReader["AOfficePhone"].ToString();
                            _result.AAlertPhone = _SQLDataReader["AAlertPhone"].ToString();
                            _result.AEmail = _SQLDataReader["AEmail"].ToString();
                            _result.AAlertEmail = _SQLDataReader["AAlertEmail"].ToString();
                            _result.AVersion = _SQLDataReader["AVersion"].ToString();
                            _result.ARegisteredDate = _SQLDataReader["ARegisteredDate"].ToString();
                            _result.AExpiredDate = _SQLDataReader["AExpiredDate"].ToString();
                            _result.ACreatedDate = _SQLDataReader["ACreatedDate"].ToString();
                            _result.AModifiedDate = _SQLDataReader["AModifiedDate"].ToString();
                            _result.ACreatedBy = _SQLDataReader["ACreatedBy"].ToString();
                            _result.AModifiedBy = _SQLDataReader["AModifiedBy"].ToString();
                            _result.AStatus = _SQLDataReader["AStatus"].ToString();
                            _result.Alastlogin = _SQLDataReader["Alastlogin"].ToString();
                            _result.AItemRegisterCount = _SQLDataReader["AItemRegisterCount"].ToString();
                            _result.SMSAlertMsg = _SQLDataReader["SMSAlertMsg"].ToString();

                            _Value.Add(_result);

                        }

                    }

                    catch (Exception ex)
                    {

                        throw new Exception(ex.Message);

                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _Value;

        }

        public static bool Account_InsertUpdate(string AccountNo, string AccountName, string AAddress, string AMobilePhone, string AHousePhone, string AOfficePhone, string AAlertPhone,
    string AEmail, string AAlertEmail, string AVersion, string ACreatedBy, string status, int AItemRegisterCount)
        {
            List<RegisteredAccountModel> _Value = new List<RegisteredAccountModel>();
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            bool _value = true;
            using (SqlConnection _DBConnection = _SQLConnection)
            {
                SqlCommand _SQLCommand = new SqlCommand();
                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;
                _SQLCommand.CommandTimeout = 0;
                using (_SQLCommand)
                {
                    try
                    {
                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "Account_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@AccountName", AccountName);
                        _SQLCommand.Parameters.AddWithValue("@AAddress", AAddress);
                        _SQLCommand.Parameters.AddWithValue("@AMobilePhone", AMobilePhone);
                        _SQLCommand.Parameters.AddWithValue("@AHousePhone", AHousePhone);
                        _SQLCommand.Parameters.AddWithValue("@AOfficePhone", AOfficePhone);
                        _SQLCommand.Parameters.AddWithValue("@AAlertPhone", AAlertPhone);
                        _SQLCommand.Parameters.AddWithValue("@AEmail", AEmail);
                        _SQLCommand.Parameters.AddWithValue("@AAlertEmail", AAlertEmail);
                        _SQLCommand.Parameters.AddWithValue("@AVersion", AVersion);
                        _SQLCommand.Parameters.AddWithValue("@ACreatedBy", ACreatedBy);
                        _SQLCommand.Parameters.AddWithValue("@Status", status);
                        _SQLCommand.Parameters.AddWithValue("@AItemRegisterCount", AItemRegisterCount);
                        _DBConnection.Open();
                        _SQLCommand.ExecuteNonQuery();
                    }

                    catch (Exception ex)
                    {
                        _value = false;
                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _value;
        }






        public static bool Account_Update(int AccID,string AccountNo, string AccountName, string AAddress, string AMobilePhone, string AHousePhone, string AOfficePhone, string AAlertPhone,
string AEmail, string AAlertEmail, string AVersion, string ACreatedBy)
        {
            List<RegisteredAccountModel> _Value = new List<RegisteredAccountModel>();
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            bool _value = true;
            using (SqlConnection _DBConnection = _SQLConnection)
            {
                SqlCommand _SQLCommand = new SqlCommand();
                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;
                _SQLCommand.CommandTimeout = 0;
                using (_SQLCommand)
                {
                    try
                    {
                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "Account_Update";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@AccountName", AccountName);
                        _SQLCommand.Parameters.AddWithValue("@AAddress", AAddress);
                        _SQLCommand.Parameters.AddWithValue("@AMobilePhone", AMobilePhone);
                        _SQLCommand.Parameters.AddWithValue("@AHousePhone", AHousePhone);
                        _SQLCommand.Parameters.AddWithValue("@AOfficePhone", AOfficePhone);
                        _SQLCommand.Parameters.AddWithValue("@AAlertPhone", AAlertPhone);
                        _SQLCommand.Parameters.AddWithValue("@AEmail", AEmail);
                        _SQLCommand.Parameters.AddWithValue("@AAlertEmail", AAlertEmail);
                        _SQLCommand.Parameters.AddWithValue("@AVersion", AVersion);
                        _SQLCommand.Parameters.AddWithValue("@ACreatedBy", ACreatedBy);
                        _SQLCommand.Parameters.AddWithValue("@AccID", AccID);
                        _DBConnection.Open();
                        _SQLCommand.ExecuteNonQuery();
                    }

                    catch (Exception ex)
                    {
                        _value = false;
                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _value;
        }

    
	


        public static bool Account_Disabled(int AccID,string AccountNo,string AStatus,string AModifiedBy)
        {
            List<RegisteredAccountModel> _Value = new List<RegisteredAccountModel>();
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            bool _value = true;
            using (SqlConnection _DBConnection = _SQLConnection)
            {
                SqlCommand _SQLCommand = new SqlCommand();
                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;
                _SQLCommand.CommandTimeout = 0;
                using (_SQLCommand)
                {
                    try
                    {
                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "Account_Disabled";
                        _SQLCommand.Parameters.AddWithValue("@AccID", AccID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);

                        _SQLCommand.Parameters.AddWithValue("@AStatus", AStatus);
                        _SQLCommand.Parameters.AddWithValue("@AModifiedBy", AModifiedBy);
                        _DBConnection.Open();
                        _SQLCommand.ExecuteNonQuery();
                    }

                    catch (Exception ex)
                    {
                        _value = false;
                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _value;
        }






        
       
    }
}
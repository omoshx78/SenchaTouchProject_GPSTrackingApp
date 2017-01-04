using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;


namespace TrackingInfo.Models
{
    public class GPSuserModel : RegisteredAccountModel
    {

        public int ID
        {
            get;
            set;
        }
        public string UserName
        {
            get;
            set;
        }

        public string Password
        {
            get;
            set;
        }



        public string Version
        {
            get;
            set;
        }

        public string Status
        {
            get;
            set;
        }

        public string AccountNo
        {
            get;
            set;
        }

        public string RegisterBy
        {
            get;
            set;
        }
        public string UpdateBy
        {
            get;
            set;
        }

        public string CreatedDate
        {
            get;
            set;
        }
        public string ModifiedDate
        {
            get;
            set;
        }

        public string ExpiredDate
        {
            get;
            set;
        }


        public string LoginIP
        {
            get;
            set;
        }
        public string LoginType
        {
            get;
            set;
        }

        public string LastLoginDate
        {
            get;
            set;
        }
        public string LoginCount
        {
            get;
            set;
        }
        public string LastLogOutDate
        {
            get;
            set;
        }

        public string Browser
        {
            get;
            set;
        }
        public string OS
        {
            get;
            set;
        }
        public string EmailReg
        {
            get;
            set;
        }
        

        public GPSuserModel() { }




        public static List<GPSuserModel> GPSUser_Log_in(string US, string PW, string PLYR, string SISOP, string IPADD)
        {
            List<GPSuserModel> _Value = new List<GPSuserModel>();
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
                        _SQLCommand.CommandText = "GPSUser_Log_in";
                        _SQLCommand.Parameters.AddWithValue("@UserName", US);
                        _SQLCommand.Parameters.AddWithValue("@Password", PW);
                        _SQLCommand.Parameters.AddWithValue("@Browser", PLYR);
                        _SQLCommand.Parameters.AddWithValue("@OS", SISOP);
                        _SQLCommand.Parameters.AddWithValue("@IP", IPADD);
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        GPSuserModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new GPSuserModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.UserName = _SQLDataReader["UserName"].ToString();
                            _result.Password = _SQLDataReader["Password"].ToString();
                            _result.Version = _SQLDataReader["Version"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.RegisterBy = _SQLDataReader["RegisterBy"].ToString();
                            _result.UpdateBy = _SQLDataReader["UpdateBy"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();
                            _result.ExpiredDate = _SQLDataReader["ExpiredDate"].ToString();
                            _result.LoginIP = _SQLDataReader["LoginIP"].ToString();
                            _result.LoginType = _SQLDataReader["LoginType"].ToString();
                            _result.LastLoginDate = _SQLDataReader["LastLoginDate"].ToString();
                            _result.LoginCount = _SQLDataReader["LoginCount"].ToString();
                            _result.LastLogOutDate = _SQLDataReader["LastLogOutDate"].ToString();
                            _result.Browser = _SQLDataReader["Browser"].ToString();
                            _result.OS = _SQLDataReader["OS"].ToString();
                            _result.EmailReg = _SQLDataReader["EmailReg"].ToString();


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



        public static List<GPSuserModel> Get_UserbyAccNo(string AccountNo)
        {
            List<GPSuserModel> _Value = new List<GPSuserModel>();
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
                        _SQLCommand.CommandText = "Get_UserByAccNo";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                       
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        GPSuserModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new GPSuserModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.UserName = _SQLDataReader["UserName"].ToString();
                            _result.Password = _SQLDataReader["Password"].ToString();
                            _result.Version = _SQLDataReader["Version"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.RegisterBy = _SQLDataReader["RegisterBy"].ToString();
                            _result.UpdateBy = _SQLDataReader["UpdateBy"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();
                            _result.ExpiredDate = _SQLDataReader["ExpiredDate"].ToString();
                            _result.LoginIP = _SQLDataReader["LoginIP"].ToString();
                            _result.LoginType = _SQLDataReader["LoginType"].ToString();
                            _result.LastLoginDate = _SQLDataReader["LastLoginDate"].ToString();
                            _result.LoginCount = _SQLDataReader["LoginCount"].ToString();
                            _result.LastLogOutDate = _SQLDataReader["LastLogOutDate"].ToString();
                            _result.Browser = _SQLDataReader["Browser"].ToString();
                            _result.OS = _SQLDataReader["OS"].ToString();
                            _result.EmailReg = _SQLDataReader["EmailReg"].ToString();
                          
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


        public static List<GPSuserModel> GPSUser_Login(string US, string PWD, string pelayar, string sistemope, string ipAdd)
        {
            List<GPSuserModel> _Value = new List<GPSuserModel>();
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
                        _SQLCommand.CommandText = "GPSUser_Login";
                        _SQLCommand.Parameters.AddWithValue("@UserName", US);
                        _SQLCommand.Parameters.AddWithValue("@Password", PWD);
                        _SQLCommand.Parameters.AddWithValue("@Browser", pelayar);
                        _SQLCommand.Parameters.AddWithValue("@OS", sistemope);
                        _SQLCommand.Parameters.AddWithValue("@IP", ipAdd);
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        GPSuserModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new GPSuserModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.UserName = _SQLDataReader["UserName"].ToString();                     
                            _result.LastLoginDate = _SQLDataReader["LastLoginDate"].ToString();                       
                            _result.EmailReg = _SQLDataReader["EmailReg"].ToString();
                           
                            //SMSAlertMsg


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


        public static List<GPSuserModel> Get_User(string US,string PWD,string pelayar,string sistemope,string ipAdd)
        {
            List<GPSuserModel> _Value = new List<GPSuserModel>();
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
                        _SQLCommand.CommandText = "Get_Login";
                        _SQLCommand.Parameters.AddWithValue("@UserName", US);
                        _SQLCommand.Parameters.AddWithValue("@Password", PWD);
                        _SQLCommand.Parameters.AddWithValue("@Browser", pelayar);
                        _SQLCommand.Parameters.AddWithValue("@OS", sistemope);
                        _SQLCommand.Parameters.AddWithValue("@IP", ipAdd);
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        GPSuserModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new GPSuserModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.UserName = _SQLDataReader["UserName"].ToString();
                            _result.Password = _SQLDataReader["Password"].ToString();
                            _result.Version = _SQLDataReader["Version"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.RegisterBy = _SQLDataReader["RegisterBy"].ToString();
                            _result.UpdateBy = _SQLDataReader["UpdateBy"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();
                            _result.ExpiredDate = _SQLDataReader["ExpiredDate"].ToString();
                            _result.LoginIP = _SQLDataReader["LoginIP"].ToString();
                            _result.LoginType = _SQLDataReader["LoginType"].ToString();
                            _result.LastLoginDate = _SQLDataReader["LastLoginDate"].ToString();
                            _result.LoginCount = _SQLDataReader["LoginCount"].ToString();
                            _result.LastLogOutDate = _SQLDataReader["LastLogOutDate"].ToString();
                            _result.Browser = _SQLDataReader["Browser"].ToString();
                            _result.OS = _SQLDataReader["OS"].ToString();
                            _result.EmailReg = _SQLDataReader["EmailReg"].ToString();
                            ((RegisteredAccountModel)_result).AccID = Convert.ToInt32(_SQLDataReader["AccID"].ToString());
                            ((RegisteredAccountModel)_result).AccountName = _SQLDataReader["AccountName"].ToString();
                            ((RegisteredAccountModel)_result).AAddress = _SQLDataReader["AAddress"].ToString();
                            ((RegisteredAccountModel)_result).AMobilePhone = _SQLDataReader["AMobilePhone"].ToString();
                            ((RegisteredAccountModel)_result).AHousePhone = _SQLDataReader["AHousePhone"].ToString();
                            ((RegisteredAccountModel)_result).AOfficePhone = _SQLDataReader["AOfficePhone"].ToString();
                            ((RegisteredAccountModel)_result).AAlertPhone = _SQLDataReader["AAlertPhone"].ToString();
                            ((RegisteredAccountModel)_result).AEmail = _SQLDataReader["AEmail"].ToString();
                            ((RegisteredAccountModel)_result).AAlertEmail = _SQLDataReader["AAlertEmail"].ToString();
                            ((RegisteredAccountModel)_result).AVersion = _SQLDataReader["AVersion"].ToString();
                            ((RegisteredAccountModel)_result).ARegisteredDate = _SQLDataReader["ARegisteredDate"].ToString();
                            ((RegisteredAccountModel)_result).AExpiredDate = _SQLDataReader["AExpiredDate"].ToString();
                            ((RegisteredAccountModel)_result).ACreatedDate = _SQLDataReader["ACreatedDate"].ToString();
                            ((RegisteredAccountModel)_result).AModifiedDate = _SQLDataReader["AModifiedDate"].ToString();
                            ((RegisteredAccountModel)_result).ACreatedBy = _SQLDataReader["ACreatedBy"].ToString();
                            ((RegisteredAccountModel)_result).AModifiedBy = _SQLDataReader["AModifiedBy"].ToString();
                            ((RegisteredAccountModel)_result).AStatus = _SQLDataReader["AStatus"].ToString();
                            ((RegisteredAccountModel)_result).AItemRegisterCount = _SQLDataReader["AItemRegisterCount"].ToString();
                            ((RegisteredAccountModel)_result).SMSAlertMsg = _SQLDataReader["SMSAlertMsg"].ToString();  
                    //SMSAlertMsg


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

   
	

        public static bool User_loginInsert(string UserName, string Password, string Version, string Status, string AccountNo, string RegisterBy, string UpdateBy,
            string LoginIP, string LoginType, string Browser, string OS, string EmailReg)
        {
            List<GPSuserModel> _Value = new List<GPSuserModel>();
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
                        _SQLCommand.CommandText = "Userlogin_Insert";
                        _SQLCommand.Parameters.AddWithValue("@UserName", UserName);
                        _SQLCommand.Parameters.AddWithValue("@Password", Password);
                        _SQLCommand.Parameters.AddWithValue("@Version", Version);
                        _SQLCommand.Parameters.AddWithValue("@Status", Status);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@RegisterBy", RegisterBy);
                        _SQLCommand.Parameters.AddWithValue("@UpdateBy", UpdateBy);
                        _SQLCommand.Parameters.AddWithValue("@LoginIP", LoginIP);
                        _SQLCommand.Parameters.AddWithValue("@LoginType", LoginType);
                        _SQLCommand.Parameters.AddWithValue("@Browser", Browser);
                        _SQLCommand.Parameters.AddWithValue("@OS", OS);
                        _SQLCommand.Parameters.AddWithValue("@EmailReg", EmailReg);
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









        public static bool User_loginUpdate(string UserName, string Password, string AccountNo, string UpdateBy,
         string LoginIP, string Browser, string OS, int ID)
        {
            List<GPSuserModel> _Value = new List<GPSuserModel>();
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
                        _SQLCommand.CommandText = "Userlogin_Update";
                        _SQLCommand.Parameters.AddWithValue("@UserName", UserName);
                        _SQLCommand.Parameters.AddWithValue("@Password", Password);
                        //_SQLCommand.Parameters.AddWithValue("@Version", Version);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                     
                        _SQLCommand.Parameters.AddWithValue("@UpdateBy", UpdateBy);
                        _SQLCommand.Parameters.AddWithValue("@LoginIP", LoginIP);
                        //_SQLCommand.Parameters.AddWithValue("@LoginType", LoginType);
                        _SQLCommand.Parameters.AddWithValue("@Browser", Browser);
                        _SQLCommand.Parameters.AddWithValue("@OS", OS);
                        //_SQLCommand.Parameters.AddWithValue("@EmailReg", EmailReg);
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
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





        public static bool User_loginDisabled(int ID)
        {
            List<GPSuserModel> _Value = new List<GPSuserModel>();
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
                        _SQLCommand.CommandText = "Userlogin_Disabled";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
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
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class ResponderAlertModel
    {
        public string ID
        {
            get;
            set;
        }
        public string AccountNo
        {
            get;
            set;
        }

        public string ResponderName
        {
            get;
            set;
        }
        public string ResponderRelationShip
        {
            get;
            set;
        }

        public string ResponderPhoneNo
        {
            get;
            set;
        }
        public string ResponderEmail
        {
            get;
            set;
        }

        public string Status
        {
            get;
            set;
        }
        public string GeofenceStatus
        {
            get;
            set;
        }




        public string CreatedDate
        {
            get;
            set;
        }
        public string CreatedBy
        {
            get;
            set;
        }

        public string ModifiedDate
        {
            get;
            set;
        }
        public string ModifiedBy
        {
            get;
            set;
        }

        public string RespondModule
        {
            get;
            set;
        }
        public string Notes
        {
            get;
            set;
        }

        public static List<ResponderAlertModel> Get_ResponderAlertByAccNo(string AccNo)
        {

            List<ResponderAlertModel> _Value = new List<ResponderAlertModel>();

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
                        _SQLCommand.CommandText = "Get_ResponderAlertbyAccNo";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccNo);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        ResponderAlertModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new ResponderAlertModel();

                            _result.ID = _SQLDataReader["ID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.ResponderName = _SQLDataReader["ResponderName"].ToString();
                            _result.ResponderRelationShip = _SQLDataReader["ResponderRelationShip"].ToString();
                            _result.ResponderPhoneNo = _SQLDataReader["ResponderPhoneNo"].ToString();
                            _result.ResponderEmail = _SQLDataReader["ResponderEmail"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.GeofenceStatus = _SQLDataReader["GeofenceStatus"].ToString();
                        
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



        public static List<ResponderAlertModel> Get_ResponderAlertByID(int ID)
        {

            List<ResponderAlertModel> _Value = new List<ResponderAlertModel>();

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
                        _SQLCommand.CommandText = "Get_ResponderAlertbyID";

                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        ResponderAlertModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new ResponderAlertModel();

                            _result.ID = _SQLDataReader["ID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.ResponderName = _SQLDataReader["ResponderName"].ToString();
                            _result.ResponderRelationShip = _SQLDataReader["ResponderRelationShip"].ToString();
                            _result.ResponderPhoneNo = _SQLDataReader["ResponderPhoneNo"].ToString();
                            _result.ResponderEmail = _SQLDataReader["ResponderEmail"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.GeofenceStatus = _SQLDataReader["GeofenceStatus"].ToString();




                        
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


        public static List<ResponderAlertModel> ResponderAlert_LoadbyAccountNoModule(string AccountNo,string Module)
        {

            List<ResponderAlertModel> _Value = new List<ResponderAlertModel>();

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
                        _SQLCommand.CommandText = "ResponderAlert_LoadbyAccountNoModule";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@Module", Module);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        ResponderAlertModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new ResponderAlertModel();

                            _result.ID = _SQLDataReader["ID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.ResponderName = _SQLDataReader["ResponderName"].ToString();
                            _result.ResponderRelationShip = _SQLDataReader["ResponderRelationShip"].ToString();
                            _result.ResponderPhoneNo = _SQLDataReader["ResponderPhoneNo"].ToString();
                            _result.ResponderEmail = _SQLDataReader["ResponderEmail"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.GeofenceStatus = _SQLDataReader["GeofenceStatus"].ToString();

                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.CreatedBy = _SQLDataReader["CreatedBy"].ToString();
                            _result.ModifiedBy = _SQLDataReader["ModifiedBy"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();

                            _result.RespondModule = _SQLDataReader["RespondModule"].ToString();
                            _result.Notes = _SQLDataReader["Notes"].ToString();
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
        public static bool ResponderAlert_InsertUpdate(int ID, string AccountNo, string ResponderName, string ResponderRelationShip, string ResponderPhoneNo, string ResponderEmail, string Status, string GeofenceStatus, string User)
        {
            List<ResponderAlertModel> _Value = new List<ResponderAlertModel>();
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
                        _SQLCommand.CommandText = "ResponderAlert_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@ResponderName", ResponderName);
                        _SQLCommand.Parameters.AddWithValue("@ResponderRelationShip", ResponderRelationShip);
                        _SQLCommand.Parameters.AddWithValue("@ResponderPhoneNo", ResponderPhoneNo);
                        _SQLCommand.Parameters.AddWithValue("@ResponderEmail", ResponderEmail);
                        _SQLCommand.Parameters.AddWithValue("@Status", Status);
                        _SQLCommand.Parameters.AddWithValue("@GeofenceStatus", GeofenceStatus);
                        _SQLCommand.Parameters.AddWithValue("@User", User);

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










        public static bool ResponderAlert_Update(int ID, string AccountNo, string ResponderName, string ResponderRelationShip, string ResponderPhoneNo, string ResponderEmail, string Status, string User)
        {
            List<ResponderAlertModel> _Value = new List<ResponderAlertModel>();
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
                        _SQLCommand.CommandText = "ResponderAlert_Update";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@ResponderName", ResponderName);
                        _SQLCommand.Parameters.AddWithValue("@ResponderRelationShip", ResponderRelationShip);
                        _SQLCommand.Parameters.AddWithValue("@ResponderPhoneNo", ResponderPhoneNo);
                        _SQLCommand.Parameters.AddWithValue("@ResponderEmail", ResponderEmail);
                        _SQLCommand.Parameters.AddWithValue("@Status", Status);                   
                        _SQLCommand.Parameters.AddWithValue("@User", User);

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
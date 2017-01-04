using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class AutoFenceTimerModel
    {

        public string ID
        {
            get;
            set;
        }
        public string CreatedDate
        {
            get;
            set;
        }

        public string TrackItem
        {
            get;
            set;
        }
        public string TrackID
        {
            get;
            set;
        }

        public string AccountNo
        {
            get;
            set;
        }
        public string FencePath
        {
            get;
            set;
        }

        public string ShapeType
        {
            get;
            set;
        }
        public string FenceAreaName
        {
            get;
            set;
        }
        
        public string TimeFrom
        {
            get;
            set;
        }
        public string TimeTo
        {
            get;
            set;
        }

        public string DaySetting
        {
            get;
            set;
        }
        public string Status
        {
            get;
            set;
        }
        public string FenceLength
        {
            get;
            set;
        }


        public static List<AutoFenceTimerModel> Get_AutoFenceTimerByAccNo(string AccNo)
        {

            List<AutoFenceTimerModel> _Value = new List<AutoFenceTimerModel>();

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
                        _SQLCommand.CommandText = "AutoFenceTimer_GetByAccNo";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccNo);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        AutoFenceTimerModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new AutoFenceTimerModel();

                            _result.ID = _SQLDataReader["ID"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            _result.FenceAreaName = _SQLDataReader["FenceAreaName"].ToString();
                            _result.TimeFrom = _SQLDataReader["TimeFrom"].ToString();
                            _result.TimeTo = _SQLDataReader["TimeTo"].ToString();
                            _result.DaySetting = _SQLDataReader["DaySetting"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.FenceLength = _SQLDataReader["FenceLength"].ToString();
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

        public static List<AutoFenceTimerModel> Get_AutoFenceTimerGetByTrackID(string TrackID,string AccNo)
        {

            List<AutoFenceTimerModel> _Value = new List<AutoFenceTimerModel>();

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
                        _SQLCommand.CommandText = "AutoFenceTimer_GetByTrackID";
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccNo);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        AutoFenceTimerModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new AutoFenceTimerModel();

                            _result.ID = _SQLDataReader["ID"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            _result.FenceAreaName = _SQLDataReader["FenceAreaName"].ToString();
                            _result.TimeFrom = _SQLDataReader["TimeFrom"].ToString();
                            _result.TimeTo = _SQLDataReader["TimeTo"].ToString();
                            _result.DaySetting = _SQLDataReader["DaySetting"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.FenceLength = _SQLDataReader["FenceLength"].ToString();
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


        

        public static List<AutoFenceTimerModel> Get_AutoFenceTimerByID(int ID)
        {

            List<AutoFenceTimerModel> _Value = new List<AutoFenceTimerModel>();

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
                        _SQLCommand.CommandText = "AutoFenceTimer_GetByAccID";

                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        AutoFenceTimerModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new AutoFenceTimerModel();

                            _result.ID = _SQLDataReader["ID"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            _result.FenceAreaName = _SQLDataReader["FenceAreaName"].ToString();
                            _result.TimeFrom = _SQLDataReader["TimeFrom"].ToString();
                            _result.TimeTo = _SQLDataReader["TimeTo"].ToString();
                            _result.DaySetting = _SQLDataReader["DaySetting"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.FenceLength = _SQLDataReader["FenceLength"].ToString();
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



        public static bool AutoFenceTimer_InsertUpdate(int ID, string TrackItem, string TrackID, string AccountNo, string FencePath, string ShapeType,
            string FenceAreaName, string TimeFrom, string TimeTo, string DaySetting, string Status, string FenceLength)
        {
            List<AutoFenceTimerModel> _Value = new List<AutoFenceTimerModel>();
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
                        _SQLCommand.CommandText = "AutoFenceTimer_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@TrackItem", TrackItem);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@FencePath", FencePath);
                        _SQLCommand.Parameters.AddWithValue("@ShapeType", ShapeType);
                        _SQLCommand.Parameters.AddWithValue("@FenceAreaName", FenceAreaName);
                        _SQLCommand.Parameters.AddWithValue("@TimeFrom", TimeFrom);
                        _SQLCommand.Parameters.AddWithValue("@TimeTo", TimeTo);
                        _SQLCommand.Parameters.AddWithValue("@DaySetting", DaySetting);
                        _SQLCommand.Parameters.AddWithValue("@Status", Status);
                        _SQLCommand.Parameters.AddWithValue("@FenceLength", FenceLength);
                        
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




        public static bool AutoFenceTimer_Delete(int ID, string AccountNo)
        {
            List<AutoFenceTimerModel> _Value = new List<AutoFenceTimerModel>();
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
                        _SQLCommand.CommandText = "AutoFenceTimer_DeleteByID";

                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
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
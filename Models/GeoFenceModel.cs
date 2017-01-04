using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class GeoFenceModel
    {
        public int ID
        {
            get;
            set;
        }

        public string AccountNo
        {
            get;
            set;
        }

        public string TrackID
        {
            get;
            set;
        }


        public string TrackItem
        {
            get;
            set;
        }

        public string Fencelenght
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
        public string FenceAlertemail
        {
            get;
            set;
        }

        public string FenceAlertemail2
        {
            get;
            set;
        }
        public string FenceAlertemail3
        {
            get;
            set;
        }

        public string FenceAlertPhone
        {
            get;
            set;
        }
        public string FenceAlertPhone2
        {
            get;
            set;
        }

        public string FenceAlertPhone3
        {
            get;
            set;
        }
        public string Createdby
        {
            get;
            set;
        }

        public string Createddate
        {
            get;
            set;
        }
        public string CreatedOS
        {
            get;
            set;
        }

        public string FenceStatus
        {
            get;
            set;
        }
        public string SendAlertStatus
        {
            get;
            set;
        }

        public string SenderEmail
        {
            get;
            set;
        }
        public string Senderphone
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

        public string IsOutOfFence
        {
            get;
            set;
        }
        public string OutOfFenceRespond
        {
            get;
            set;
        }

        public string FenceName
        {
            get;
            set;
        }
        public GeoFenceModel() { }


        public static bool Geofence_Insert(string AccountNo, string TrackID, string TrackItem, string Fencelenght, string FencePath, string ShapeType, string FenceAlertemail, string FenceAlertemail2, string FenceAlertemail3, string FenceAlertPhone, string FenceAlertPhone2, string FenceAlertPhone3, string FenceAlertPhone4, string Createdby, string CreatedOS, string FenceStatus, string SendAlertStatus, string SenderEmail, string Senderphone, string FenceAlertName, string FenceAlertName2, string FenceAlertName3, string FenceAlertName4, string SMSAlertMsg, string FenceName, string FenceAlertResponderRelations, string FenceAlertResponderRelations2, string FenceAlertResponderRelations3, string FenceAlertResponderRelations4)
        {
            List<GeoFenceModel> _Value = new List<GeoFenceModel>();
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
                        _SQLCommand.CommandText = "Geofence_Insert";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@TrackItem", TrackItem);
                        _SQLCommand.Parameters.AddWithValue("@Fencelenght", Fencelenght);
                        _SQLCommand.Parameters.AddWithValue("@FencePath", FencePath);
                        _SQLCommand.Parameters.AddWithValue("@ShapeType", ShapeType);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertemail", FenceAlertemail);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertemail2", FenceAlertemail2);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertemail3", FenceAlertemail3);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertPhone", FenceAlertPhone);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertPhone2", FenceAlertPhone2);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertPhone3", FenceAlertPhone3);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertPhone4", FenceAlertPhone4);
                        _SQLCommand.Parameters.AddWithValue("@Createdby", Createdby);
                        _SQLCommand.Parameters.AddWithValue("@CreatedOS", CreatedOS);
                        _SQLCommand.Parameters.AddWithValue("@FenceStatus", FenceStatus);
                        _SQLCommand.Parameters.AddWithValue("@SendAlertStatus", SendAlertStatus);
                        _SQLCommand.Parameters.AddWithValue("@SenderEmail", SenderEmail);
                        _SQLCommand.Parameters.AddWithValue("@Senderphone", Senderphone);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertName", FenceAlertName);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertName2", FenceAlertName2);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertName3", FenceAlertName3);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertName4", FenceAlertName4);
                        _SQLCommand.Parameters.AddWithValue("@SMSAlertMsg", SMSAlertMsg);
                        _SQLCommand.Parameters.AddWithValue("@FenceName", FenceName);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertResponderRelations", FenceAlertResponderRelations);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertResponderRelations2", FenceAlertResponderRelations2);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertResponderRelations3", FenceAlertResponderRelations3);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertResponderRelations4", FenceAlertResponderRelations4);
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



        public static bool Geofence_Delete(string AccountNo, string TrackID)
        {
            List<GeoFenceModel> _Value = new List<GeoFenceModel>();
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
                        _SQLCommand.CommandText = "Geofence_Delete";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
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

        public static bool Geofence_Update(string AccountNo, string TrackID, string TrackItem, string Fencelenght, string FencePath, string ShapeType, string FenceAlertemail, string FenceAlertemail2, string FenceAlertemail3, string FenceAlertPhone, string FenceAlertPhone2, string FenceAlertPhone3, string Createdby, string CreatedOS, string FenceStatus, string SendAlertStatus, string SenderEmail, string Senderphone)
        {
            List<GeoFenceModel> _Value = new List<GeoFenceModel>();
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            bool _value = true;
            using (SqlConnection _DBConnection = _SQLConnection)
            {   SqlCommand _SQLCommand = new SqlCommand();
                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;
                _SQLCommand.CommandTimeout = 0;
                using (_SQLCommand)
                {
                    try
                    {                       
                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "Geofence_Update";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@TrackItem", TrackItem);
                        _SQLCommand.Parameters.AddWithValue("@Fencelenght", Fencelenght);
                        _SQLCommand.Parameters.AddWithValue("@FencePath", FencePath);
                        _SQLCommand.Parameters.AddWithValue("@ShapeType", ShapeType);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertemail", FenceAlertemail);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertemail2", FenceAlertemail2);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertemail3", FenceAlertemail3);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertPhone", FenceAlertPhone);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertPhone2", FenceAlertPhone2);
                        _SQLCommand.Parameters.AddWithValue("@FenceAlertPhone3", FenceAlertPhone3);
                        _SQLCommand.Parameters.AddWithValue("@Createdby", Createdby);
                        _SQLCommand.Parameters.AddWithValue("@CreatedOS", CreatedOS);
                        _SQLCommand.Parameters.AddWithValue("@FenceStatus", FenceStatus);
                        _SQLCommand.Parameters.AddWithValue("@SendAlertStatus", SendAlertStatus);
                        _SQLCommand.Parameters.AddWithValue("@SenderEmail", SenderEmail);
                        _SQLCommand.Parameters.AddWithValue("@Senderphone", Senderphone);
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




        public static List<GeoFenceModel> Geofence_Select(string AccountNo, string TrackID)
        {

            List<GeoFenceModel> _Value = new List<GeoFenceModel>();

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

                        _SQLCommand.CommandText = "Get_Geofence";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        GeoFenceModel _result;

                        while (_SQLDataReader.Read())
                        {
                            _result = new GeoFenceModel();
                            _result.ID =Convert.ToInt32( _SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.Fencelenght = _SQLDataReader["Fencelenght"].ToString();


                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            _result.FenceAlertemail = _SQLDataReader["FenceAlertemail"].ToString();
                            _result.FenceAlertemail2 = _SQLDataReader["FenceAlertemail2"].ToString();


                            _result.FenceAlertemail3 = _SQLDataReader["FenceAlertemail3"].ToString();
                            _result.FenceAlertPhone = _SQLDataReader["FenceAlertPhone"].ToString();
                            _result.FenceAlertPhone2 = _SQLDataReader["FenceAlertPhone2"].ToString();

                            _result.FenceAlertPhone3 = _SQLDataReader["FenceAlertPhone3"].ToString();
                            _result.Createdby = _SQLDataReader["Createdby"].ToString();
                            _result.Createddate = _SQLDataReader["Createddate"].ToString();
                            _result.CreatedOS = _SQLDataReader["CreatedOS"].ToString();


                            _result.FenceStatus = _SQLDataReader["FenceStatus"].ToString();
                            _result.SendAlertStatus = _SQLDataReader["SendAlertStatus"].ToString();
                            _result.SenderEmail = _SQLDataReader["SenderEmail"].ToString();
                            _result.Senderphone = _SQLDataReader["Senderphone"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();
                            _result.ModifiedBy = _SQLDataReader["ModifiedBy"].ToString();
                            _result.FenceName = _SQLDataReader["FenceName"].ToString();
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






        public static bool Geofence_Alert(string AccountNo, string TrackID, string Alert)
        {
            List<GeoFenceModel> _Value = new List<GeoFenceModel>();
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
                        _SQLCommand.CommandText = "Geofence_OutOfFence_Alert";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@Alert", Alert);
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




        public static bool Geofence_OutOfFence_Respond(string AccountNo, string TrackID)
        {
            List<GeoFenceModel> _Value = new List<GeoFenceModel>();
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
                        _SQLCommand.CommandText = "Geofence_OutOfFence_Respond";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                    
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









        public static List<GeoFenceModel> Geofence_Active(string AccountNo)
        {

            List<GeoFenceModel> _Value = new List<GeoFenceModel>();

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

                        _SQLCommand.CommandText = "Geofence_Active";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        GeoFenceModel _result;

                        while (_SQLDataReader.Read())
                        {
                            _result = new GeoFenceModel();
                       
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.IsOutOfFence = _SQLDataReader["IsOutOfFence"].ToString();
                            _result.OutOfFenceRespond = _SQLDataReader["OutOfFenceRespond"].ToString();
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


    }
}
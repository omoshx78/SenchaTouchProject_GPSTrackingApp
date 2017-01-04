using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class GeofenceAlertHistoryModel
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

        public string Fencelength
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

        public string Longituded
        {
            get;
            set;
        }
        public string Latituded
        {
            get;
            set;
        }

        public string AlertDate
        {
            get;
            set;
        }



        public string FenceAreaName
        {
            get;
            set;
        }

        public string CreatedGeofenceID
        {
            get;
            set;
        }
        public string TrackingItem_Alert
        {
            get;
            set;
        }
        

        public static List<GeofenceAlertHistoryModel> Get_GeofenceAlertHistoryByAccNo(string AccNo)
        {

            List<GeofenceAlertHistoryModel> _Value = new List<GeofenceAlertHistoryModel>();

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
                        _SQLCommand.CommandText = "GeofenceAlertHistory_GetByAccNo";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccNo);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        GeofenceAlertHistoryModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new GeofenceAlertHistoryModel();

                            //_result.ID = _SQLDataReader["ID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            //_result.Fencelength = _SQLDataReader["Fencelength"].ToString();
                            //_result.FencePath = _SQLDataReader["FencePath"].ToString();
                            //_result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            //_result.Longituded = _SQLDataReader["Longituded"].ToString();
                            //_result.Latituded = _SQLDataReader["Latituded"].ToString();
                            //_result.AlertDate = _SQLDataReader["AlertDate"].ToString();
                            _result.FenceAreaName = _SQLDataReader["FenceAreaName"].ToString();
                            _result.CreatedGeofenceID = _SQLDataReader["CreatedGeofenceID"].ToString();
                            _result.TrackingItem_Alert = _SQLDataReader["TrackingItem_Alert"].ToString();    
                            
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


        public static List<GeofenceAlertHistoryModel> Get_GeofenceAlertHistoryByTrackID(string TrackID, string DateFrom, string DateTo,string GeofenceID)
        {//31-01-2016
            //31/01/2016
            //20160131
            //20160131
            int i=0;
            string[] dated = new string [3];
            string[] words = DateFrom.Split('-');
            string dt;
            foreach (string word in words)
            {
                dated[i] = word;
                i++;
            }
            dt = dated[2] + dated[1] + dated[0];
            List<GeofenceAlertHistoryModel> _Value = new List<GeofenceAlertHistoryModel>();

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
                        _SQLCommand.CommandText = "GeofenceAlertHistory_GetByTrackID";

                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@DateFrom", dt);
                        _SQLCommand.Parameters.AddWithValue("@DateTo", dt);
                        _SQLCommand.Parameters.AddWithValue("@GeofenceID", GeofenceID);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        GeofenceAlertHistoryModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new GeofenceAlertHistoryModel();

                            _result.ID = _SQLDataReader["ID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.Fencelength = _SQLDataReader["Fencelength"].ToString();
                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            _result.Longituded = _SQLDataReader["Longituded"].ToString();
                            _result.Latituded = _SQLDataReader["Latituded"].ToString();
                            _result.AlertDate = _SQLDataReader["AlertDate"].ToString();
                            _result.FenceAreaName = _SQLDataReader["FenceAreaName"].ToString();
                            _result.CreatedGeofenceID = _SQLDataReader["CreatedGeofenceID"].ToString();
                           // _result.TrackingItem_Alert = _SQLDataReader["TrackingItem_Alert"].ToString();

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
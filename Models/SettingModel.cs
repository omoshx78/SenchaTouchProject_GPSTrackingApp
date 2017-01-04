using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;
namespace TrackingInfo.Models
{
    public class SettingModel
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
        public string MarkerPoint
        {
            get;
            set;
        }
        public string PanMap
        {
            get;
            set;
        }
        public string AttachedLabel
        {
            get;
            set;
        }

        public string Interval
        {
            get;
            set;
        }
        public SettingModel() { }



        public static bool Geofence_SettingInsertUpdate(string AccountNo, string TrackID, string MarkerPoint, string PanMap, string AttachedLabel, string Interval)
        {
            List<SettingModel> _Value = new List<SettingModel>();
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
                        _SQLCommand.CommandText = "GeoFence_InsertUpdateSetting";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@MarkerPoint", MarkerPoint);
                        _SQLCommand.Parameters.AddWithValue("@PanMap", PanMap);
                        _SQLCommand.Parameters.AddWithValue("@AttachedLabel", AttachedLabel);
                        _SQLCommand.Parameters.AddWithValue("@Interval", Interval);
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



             public static List<SettingModel> Geofence_GetSetting(string AccountNo, string TrackID)
        {

            List<SettingModel> _Value = new List<SettingModel>();

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

                        _SQLCommand.CommandText = "Get_GeofenceSettingByID";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        SettingModel _result;

                        while (_SQLDataReader.Read())
                        {
                            _result = new SettingModel();
                            _result.ID =Convert.ToInt32( _SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.MarkerPoint = _SQLDataReader["MarkerPoint"].ToString();
                            _result.PanMap = _SQLDataReader["PanMap"].ToString();
                            _result.AttachedLabel = _SQLDataReader["AttachedLabel"].ToString();
                            _result.Interval = _SQLDataReader["Interval"].ToString();
                            
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
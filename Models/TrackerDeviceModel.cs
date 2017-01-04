using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class TrackerDeviceModel
    {
        public int ID
        {
            get;
            set;
        }

        public string DeviceID
        {
            get;
            set;
        }
        public string DeviceName
        {
            get;
            set;
        }
        public string DeviceModel
        {
            get;
            set;
        }
        public string Manufacturer
        {
            get;
            set;
        }
        public string Supplier
        {
            get;
            set;
        }
        public string CapabilityDescript
        {
            get;
            set;
        }
        public string CoordinateType
        {
            get;
            set;
        }
        public string SimNum
        {
            get;
            set;
        }
        public string SimOperator
        {
            get;
            set;
        }
        public string Status
        {
            get;
            set;
        }
        public string CreatedBy
        {
            get;
            set;
        }
        public string CreatedDate
        {
            get;
            set;
        }
        public string ModifiedBy
        {
            get;
            set;
        }
        public string ModifiedDate
        {
            get;
            set;
        }

        public string IgnitionRemotely
        {
            get;
            set;
        }
        public string LockedDoorRemotely
        {
            get;
            set;
        }
        public string ArmedRemotely
        {
            get;
            set;
        }
        public string HornRemotely
        {
            get;
            set;
        }





        public string Interval
        {
            get;
            set;
        }
        public string GPSPacket
        {
            get;
            set;
        }

        public string TrackerPwd
        {
            get;
            set;
        }
        public string TrackerUsrNm
        {
            get;
            set;
        }
        public string GPSserverPort
        {
            get;
            set;
        }
        public string ServerIP
        {
            get;
            set;
        }
        public TrackerDeviceModel() { }


        public static bool TrackerDevice_InsertUpdate(int ID,string DeviceID, string DeviceName, string DeviceModel, string Manufacturer, string Supplier, string CapabilityDescript, string CoordinateType, string SimNum, string SimOperator, string Status, string CreatedBy, string ModifiedBy, string IgnitionRemotely, string LockedDoorRemotely, string ArmedRemotely, string HornRemotely, string Interval, string GPSPacket, string TrackerPwd, string TrackerUsrNm, string GPSserverPort, string ServerIP)
        {
            List<TrackerDeviceModel> _Value = new List<TrackerDeviceModel>();
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
                        _SQLCommand.CommandText = "TrackerDevice_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _SQLCommand.Parameters.AddWithValue("@DeviceName", DeviceName);
                        _SQLCommand.Parameters.AddWithValue("@DeviceModel", DeviceModel);
                        _SQLCommand.Parameters.AddWithValue("@Manufacturer", Manufacturer);
                        _SQLCommand.Parameters.AddWithValue("@Supplier", Supplier);
                        _SQLCommand.Parameters.AddWithValue("@CapabilityDescript", CapabilityDescript);
                        _SQLCommand.Parameters.AddWithValue("@CoordinateType", CoordinateType);
                        _SQLCommand.Parameters.AddWithValue("@SimNum", SimNum);
                        _SQLCommand.Parameters.AddWithValue("@SimOperator", SimOperator);
                        _SQLCommand.Parameters.AddWithValue("@Status", Status);
                        _SQLCommand.Parameters.AddWithValue("@CreatedBy", CreatedBy);
                        _SQLCommand.Parameters.AddWithValue("@ModifiedBy", ModifiedBy);
                        _SQLCommand.Parameters.AddWithValue("@IgnitionRemotely", IgnitionRemotely);
                        _SQLCommand.Parameters.AddWithValue("@LockedDoorRemotely", LockedDoorRemotely);
                        _SQLCommand.Parameters.AddWithValue("@ArmedRemotely", ArmedRemotely);
                        _SQLCommand.Parameters.AddWithValue("@HornRemotely", HornRemotely);
                        _SQLCommand.Parameters.AddWithValue("@Interval", Interval);
                        _SQLCommand.Parameters.AddWithValue("@GPSPacket", GPSPacket);
                        _SQLCommand.Parameters.AddWithValue("@TrackerPwd", TrackerPwd);
                        _SQLCommand.Parameters.AddWithValue("@TrackerUsrNm", TrackerUsrNm);
                        _SQLCommand.Parameters.AddWithValue("@GPSserverPort", GPSserverPort);
                        _SQLCommand.Parameters.AddWithValue("@ServerIP", ServerIP);
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





        public static List<TrackerDeviceModel> Get_TrackerDevice(string DeviceID)
        {

            List<TrackerDeviceModel> _Value = new List<TrackerDeviceModel>();

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
                        _SQLCommand.CommandText = "Get_TrackerDevice";
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        TrackerDeviceModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new TrackerDeviceModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.DeviceID = _SQLDataReader["DeviceID"].ToString();
                            _result.DeviceName = _SQLDataReader["DeviceName"].ToString();
                            _result.DeviceModel = _SQLDataReader["DeviceModel"].ToString();
                            _result.Manufacturer = _SQLDataReader["Manufacturer"].ToString();
                            _result.Supplier = _SQLDataReader["Supplier"].ToString();
                            _result.CapabilityDescript = _SQLDataReader["CapabilityDescript"].ToString();

                            _result.CoordinateType = _SQLDataReader["CoordinateType"].ToString();
                            _result.SimNum = _SQLDataReader["SimNum"].ToString();
                            _result.SimOperator = _SQLDataReader["SimOperator"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.CreatedBy = _SQLDataReader["CreatedBy"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();

                            _result.ModifiedBy = _SQLDataReader["ModifiedBy"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();
                            _result.IgnitionRemotely = _SQLDataReader["IgnitionRemotely"].ToString();
                            _result.LockedDoorRemotely = _SQLDataReader["LockedDoorRemotely"].ToString();

                            _result.ArmedRemotely = _SQLDataReader["ArmedRemotely"].ToString();
                            _result.HornRemotely = _SQLDataReader["HornRemotely"].ToString();
                            _result.Interval = _SQLDataReader["Interval"].ToString();
                            _result.GPSPacket = _SQLDataReader["GPSPacket"].ToString();

                            _result.TrackerPwd = _SQLDataReader["TrackerPwd"].ToString();
                            _result.TrackerUsrNm = _SQLDataReader["TrackerUsrNm"].ToString();
                            _result.GPSserverPort = _SQLDataReader["GPSserverPort"].ToString();
                            _result.ServerIP = _SQLDataReader["ServerIP"].ToString();
                         
                            
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
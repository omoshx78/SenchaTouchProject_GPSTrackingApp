using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class SignalsModel
    {
        public string DeviceID
        {
            get;
            set;
        }

        public string IMEI_no
        {
            get;
            set;
        }
        public string SignalStatus
        {
            get;
            set;
        }

        public string Password
        {
            get;
            set;
        }
        public string DataType
        {
            get;
            set;
        }

        public string PacketNumber
        {
            get;
            set;
        }

        public string GSMBaseSt
        {
            get;
            set;
        }

           public string Longitude
        {
            get;
            set;
        }

        public string Latitude
        {
            get;
            set;
        }
        public string Speed
        {
            get;
            set;
        }

        public string Direction
        {
            get;
            set;
        }
        public string DateS
        {
            get;
            set;
        }

        public string DateD
        {
            get;
            set;
        }

        public string DateDT
        {
            get;
            set;
        }


        public string TimeS
        {
            get;
            set;
        }

        public string TimeD
        {
            get;
            set;
        }
        public string SignalINs
        {
            get;
            set;
        }

        public string SignalINd
        {
            get;
            set;
        }
        public string TrackID
        {
            get;
            set;
        }

        public string GPSSimNumber
        {
            get;
            set;
        }
        public string TrackItem
        {
            get;
            set;
        }

        public string TrackItemType
        {
            get;
            set;
        }

        public string BatteryReading
        {
            get;
            set;
        }
        public string GPSModel
        {
            get;
            set;
        }

        public string AccountNo
        {
            get;
            set;
        }


        public string Interval
        {
            get;
            set;
        }
        public string TrackingMode
        {
            get;
            set;
        }
        public string Status
        {
            get;
            set;
        }
        public string CreatedDate
        {
            get;
            set;
        }
        public string ExpiredDate
        {
            get;
            set;
        }

        public string Spare1
        {
            get;
            set;
        }
        public string Spare2
        {
            get;
            set;
        }
        public string Spare3
        {
            get;
            set;
        }
        public string Spare4
        {
            get;
            set;
        }
        public string Spare5
        {
            get;
            set;
        }
        public string Spare6
        {
            get;
            set;
        }
        public string Spare7
        {
            get;
            set;
        }

        public string Spare8
        {
            get;
            set;
        }
        public string Spare9
        {
            get;
            set;
        }



        public string Spare10
        {
            get;
            set;
        }

        public string Spare11
        {
            get;
            set;
        }
        public string Spare12
        {
            get;
            set;
        }
        public string FenceAlertResponder
        {
            get;
            set;
        }

        public string FenceAlertResponder2
        {
            get;
            set;
        }
        public string FenceAlertResponder3
        {
            get;
            set;
        }

        public string FenceAlertResponder4
        {
            get;
            set;
        }



        public string FenceAlertResponderRelations
        {
            get;
            set;
        }

        public string FenceAlertResponderRelations2
        {
            get;
            set;
        }
        public string FenceAlertResponderRelations3
        {
            get;
            set;
        }

        public string FenceAlertResponderRelations4
        {
            get;
            set;
        }
        public string Fencelenght
        {
            get;
            set;
        }

        public string Createddate
        {
            get;
            set;
        }
        public string FenceName
        {
            get;
            set;
        }
        public string Sex
        {
            get;
            set;
        }
        public string Age
        {
            get;
            set;
        }
        public string Risk
        {
            get;
            set;
        }
        public string Picture
        {
            get;
            set;
        }


        public string Altitude
        {
            get;
            set;
        }
        public string GSMSignalReading
        {
            get;
            set;
        }

        public string TerminalState
        {
            get;
            set;
        }
        public static List<SignalsModel> Get_SignalsSingleTracking(string TrackID, string AccountNo)
        {

            List<SignalsModel> _Value = new List<SignalsModel>();

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
                        _SQLCommand.CommandText = "Get_SignalsingleTracking";
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        SignalsModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new SignalsModel();

                            _result.Longitude = _SQLDataReader["Longitude"].ToString();
                            _result.Latitude = _SQLDataReader["Latitude"].ToString();
                            _result.IMEI_no = _SQLDataReader["IMEI_no"].ToString();
                            _result.Speed = _SQLDataReader["Speed"].ToString();                          
                            _result.BatteryReading = _SQLDataReader["BatteryReading"].ToString();
                            _result.DateDT = _SQLDataReader["DateDT"].ToString();
                            _result.Direction = _SQLDataReader["Direction"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();                          
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackItemType = _SQLDataReader["TrackItemType"].ToString();
                            _result.GPSModel = _SQLDataReader["GPSModel"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.GPSSimNumber = _SQLDataReader["GPSSimNumber"].ToString();
                            _result.Interval = _SQLDataReader["Interval"].ToString();
                            _result.TrackingMode = _SQLDataReader["TrackingMode"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.ExpiredDate = _SQLDataReader["ExpiredDate"].ToString();
                            _result.Spare1 = _SQLDataReader["Spare1"].ToString();
                            _result.Spare2 = _SQLDataReader["Spare2"].ToString();
                            _result.Spare3 = _SQLDataReader["Spare3"].ToString();
                            _result.Spare4 = _SQLDataReader["Spare4"].ToString();
                            _result.Spare5 = _SQLDataReader["Spare5"].ToString();
                            _result.Spare6 = _SQLDataReader["Spare6"].ToString();
                            _result.Spare7 = _SQLDataReader["Spare7"].ToString();
                            _result.Spare8 = _SQLDataReader["Spare8"].ToString();
                            _result.Spare9 = _SQLDataReader["Spare9"].ToString();
                            _result.Spare10 = _SQLDataReader["Spare10"].ToString();
                            _result.Spare11 = _SQLDataReader["Spare11"].ToString();
                            _result.Spare12 = _SQLDataReader["Spare12"].ToString();
                            //_result.Picture = _SQLDataReader["Picture"].ToString();











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







        public static List<SignalsModel> Get_SignalsSingle(string TrackID,string AccountNo)
        {

            List<SignalsModel> _Value = new List<SignalsModel>();

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
                        _SQLCommand.CommandText = "Get_Signalsingle";
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        SignalsModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new SignalsModel();

                            _result.Longitude = _SQLDataReader["Longitude"].ToString();
                            _result.Latitude = _SQLDataReader["Latitude"].ToString();
                            _result.IMEI_no = _SQLDataReader["IMEI_no"].ToString();
                            _result.Speed = _SQLDataReader["Speed"].ToString();
                            _result.GPSSimNumber = _SQLDataReader["GPSSimNumber"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.BatteryReading = _SQLDataReader["BatteryReading"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackItemType = _SQLDataReader["TrackItemType"].ToString();
                            _result.GPSModel = _SQLDataReader["GPSModel"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.DateDT = _SQLDataReader["DateDT"].ToString();
                            _result.Direction = _SQLDataReader["Direction"].ToString();
                            _result.FenceAlertResponder = _SQLDataReader["FenceAlertResponder"].ToString();
                            _result.FenceAlertResponder2 = _SQLDataReader["FenceAlertResponder2"].ToString();
                            _result.FenceAlertResponder3 = _SQLDataReader["FenceAlertResponder3"].ToString();
                            _result.FenceAlertResponder4 = _SQLDataReader["FenceAlertResponder4"].ToString();


                            _result.FenceAlertResponderRelations = _SQLDataReader["FenceAlertResponderRelations"].ToString();
                            _result.FenceAlertResponderRelations2 = _SQLDataReader["FenceAlertResponderRelations2"].ToString();
                            _result.FenceAlertResponderRelations3 = _SQLDataReader["FenceAlertResponderRelations3"].ToString();
                            _result.FenceAlertResponderRelations4 = _SQLDataReader["FenceAlertResponderRelations4"].ToString();

                            _result.Fencelenght = _SQLDataReader["Fencelenght"].ToString();
                            _result.Createddate = _SQLDataReader["Createddate"].ToString();
                            _result.FenceName = _SQLDataReader["FenceName"].ToString();
                            _result.Sex = _SQLDataReader["Sex"].ToString();

                            _result.Age = _SQLDataReader["Age"].ToString();
                            _result.Risk = _SQLDataReader["Risk"].ToString();
                            //_result.Picture = _SQLDataReader["Picture"].ToString();











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



        
        public static List<SignalsModel> Get_Signals(string DeviceID)
        {

            List<SignalsModel> _Value = new List<SignalsModel>();

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
                        _SQLCommand.CommandText = "Get_Signal";
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        SignalsModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new SignalsModel();

                            _result.Longitude = _SQLDataReader["Longitude"].ToString();
                            _result.Latitude = _SQLDataReader["Latitude"].ToString();
                            _result.Speed = _SQLDataReader["Speed"].ToString();
                            _result.DateS = _SQLDataReader["DateS"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
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





//############ WILL BE GET_SIGNALPLOTINGALL ######################################
        public static List<SignalsModel> Get_SignalsMultiple(string Accno)
        {

            List<SignalsModel> _Value = new List<SignalsModel>();

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
                        _SQLCommand.CommandText = "Get_Signalmultiple";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", Accno);

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        SignalsModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new SignalsModel();

                            _result.Longitude = _SQLDataReader["Longitude"].ToString();
                            _result.Latitude = _SQLDataReader["Latitude"].ToString();
                            _result.Speed = _SQLDataReader["Speed"].ToString();
                            _result.TrackItemType= _SQLDataReader["TrackItemType"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
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

        public static List<SignalsModel> Get_SignalsMultiples(string ImeiNo,string count,string AccountNo)
        {

            List<SignalsModel> _Value = new List<SignalsModel>();

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
                        _SQLCommand.CommandText = "Get_Signalmultiples";
                        _SQLCommand.Parameters.AddWithValue("@IMEI_no", ImeiNo);
                       _SQLCommand.Parameters.AddWithValue("@count", count);
                       _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        SignalsModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new SignalsModel();

                            _result.Longitude = _SQLDataReader["Longitude"].ToString();
                            _result.Latitude = _SQLDataReader["Latitude"].ToString();
                            _result.IMEI_no = _SQLDataReader["IMEI_no"].ToString();
                            _result.Speed = _SQLDataReader["Speed"].ToString();
                            _result.BatteryReading = _SQLDataReader["BatteryReading"].ToString();
                            _result.DateDT = _SQLDataReader["DateDT"].ToString();
                            _result.Direction = _SQLDataReader["Direction"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackItemType = _SQLDataReader["TrackItemType"].ToString();
                            _result.GPSModel = _SQLDataReader["GPSModel"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.GPSSimNumber = _SQLDataReader["GPSSimNumber"].ToString();
                            _result.Interval = _SQLDataReader["Interval"].ToString();
                            _result.TrackingMode = _SQLDataReader["TrackingMode"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.ExpiredDate = _SQLDataReader["ExpiredDate"].ToString();
                            _result.Spare1 = _SQLDataReader["Spare1"].ToString();
                            _result.Spare2 = _SQLDataReader["Spare2"].ToString();
                            _result.Spare3 = _SQLDataReader["Spare3"].ToString();
                            _result.Spare4 = _SQLDataReader["Spare4"].ToString();
                            _result.Spare5 = _SQLDataReader["Spare5"].ToString();
                            _result.Spare6 = _SQLDataReader["Spare6"].ToString();
                            _result.Spare7 = _SQLDataReader["Spare7"].ToString();
                            _result.Spare8 = _SQLDataReader["Spare8"].ToString();
                            _result.Spare9 = _SQLDataReader["Spare9"].ToString();
                            _result.Spare10 = _SQLDataReader["Spare10"].ToString();
                            _result.Spare11 = _SQLDataReader["Spare11"].ToString();
                            _result.Spare12 = _SQLDataReader["Spare12"].ToString();
                           
                           
                            
                          






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












        public static List<SignalsModel>  Get_SignalsHistory(string DeviceID,string TrackID,string GPSSimNumber,string DateFrom,string DateTo)
        {

            List<SignalsModel> _Value = new List<SignalsModel>();

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
                        _SQLCommand.CommandText = "Get_SignalHistory";
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                          _SQLCommand.Parameters.AddWithValue("@GPSSimNumber", GPSSimNumber);
                        _SQLCommand.Parameters.AddWithValue("@DateFrom", DateFrom);
                             _SQLCommand.Parameters.AddWithValue("@DateTo", DateTo);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        SignalsModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new SignalsModel();

                            _result.Longitude = _SQLDataReader["Longitude"].ToString();
                            _result.Latitude = _SQLDataReader["Latitude"].ToString();
                         //   _result.IMEI_no = _SQLDataReader["IMEI_no"].ToString();
                            _result.Speed = _SQLDataReader["Speed"].ToString();
                         //   _result.GPSSimNumber = _SQLDataReader["GPSSimNumber"].ToString();
                            _result.Direction = _SQLDataReader["Direction"].ToString();
                            _result.BatteryReading = _SQLDataReader["BatteryReading"].ToString();
                          //  _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                          //  _result.TrackItemType = _SQLDataReader["TrackItemType"].ToString();
                           // _result.GPSModel = _SQLDataReader["GPSModel"].ToString();
                           // _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.DateDT = _SQLDataReader["DateDT"].ToString();











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























        public static List<SignalsModel> SignalHistory_LoadByCreateria(string Createria, string DeviceID, string TrackID, string AccountNo, string DateFrom, string DateTo)
        {

            List<SignalsModel> _Value = new List<SignalsModel>();

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
                        _SQLCommand.CommandText = "SignalHistory_LoadByCreateria";
                        _SQLCommand.Parameters.AddWithValue("@Createria ", Createria);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo ", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@DateFrom", DateFrom);
                        _SQLCommand.Parameters.AddWithValue("@DateTo", DateTo);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        SignalsModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new SignalsModel();

                            _result.Longitude = _SQLDataReader["Longitude"].ToString();
                            _result.Latitude = _SQLDataReader["Latitude"].ToString();
                            _result.Speed = _SQLDataReader["Speed"].ToString();
                            _result.DateDT = _SQLDataReader["DateDT"].ToString();
                            _result.BatteryReading = _SQLDataReader["BatteryReading"].ToString();
                            _result.Direction = _SQLDataReader["Direction"].ToString();
                            _result.Altitude = _SQLDataReader["Altitude"].ToString();
                            _result.GSMSignalReading = _SQLDataReader["GSMSignalReading"].ToString();
                            _result.TerminalState = _SQLDataReader["TerminalState"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();










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
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TrackingInfo.Models
{
    public class MilageCountAlertHistoryModel
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

        public string DeviceID
        {
            get;
            set;
        }
        public string DateTimes
        {
            get;
            set;
        }

        public int MilageCount
        {
            get;
            set;
        }
        public string AlertDateMilageCount
        {
            get;
            set;
        }

        public string AlertRespondedDate
        {
            get;
            set;
        }

        public string AlertRespondedBy
        {
            get;
            set;
        }

        public string MilageServiceOilEngine
        {
            get;
            set;
        }
        public string MilageServiceOilEngineDate
        {
            get;
            set;
        }

        public string AlertMilageCountNote
        {
            get;
            set;
        }

        public string MilageServiceReceiptPicture
        {
            get;
            set;
        }


        public string AlertMillageUpdateInfoDate
        {
            get;
            set;
        }


        public string TrackID
        {
            get;
            set;
        }
        public string MilageCountString
        {
            get;
            set;
        }

        public string SubsriptionStatus
        {
            get;
            set;
        }
        public string AlertRespondedStatus
        {
            get;
            set;
        }


        public static List<MilageCountAlertHistoryModel> MilageCountAlertHistory_LoadByDeviceAccNo(string DeviceID, string AccountNo)
        {
            List<MilageCountAlertHistoryModel> _Value = new List<MilageCountAlertHistoryModel>();
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
                        _SQLCommand.CommandText = "MilageCountAlertHistory_LoadByDeviceAccNo";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        MilageCountAlertHistoryModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new MilageCountAlertHistoryModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.DeviceID = _SQLDataReader["DeviceID"].ToString();
                            _result.DateTimes = _SQLDataReader["DateTimes"].ToString();
                            _result.MilageCount = Convert.ToInt32(_SQLDataReader["MilageCount"].ToString());
                            _result.AlertDateMilageCount = _SQLDataReader["AlertDateMilageCount"].ToString();
                            _result.AlertRespondedDate = _SQLDataReader["AlertRespondedDate"].ToString();
                            _result.AlertRespondedBy = _SQLDataReader["AlertRespondedBy"].ToString();
                            _result.MilageServiceOilEngine = _SQLDataReader["MilageServiceOilEngine"].ToString();
                            _result.MilageServiceOilEngineDate = _SQLDataReader["MilageServiceOilEngineDate"].ToString();
                            _result.AlertMilageCountNote = _SQLDataReader["AlertMilageCountNote"].ToString();
                            _result.AlertMillageUpdateInfoDate = _SQLDataReader["AlertMillageUpdateInfoDate"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.MilageCountString = _SQLDataReader["MilageCountString"].ToString();
                            _result.SubsriptionStatus = _SQLDataReader["SubsriptionStatus"].ToString();
                            _result.AlertRespondedStatus = _SQLDataReader["AlertRespondedStatus"].ToString();


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


        public static List<MilageCountAlertHistoryModel> MilageCountAlertHistory_LoadByIDDeviceID(int ID, string DeviceID)
        {
            List<MilageCountAlertHistoryModel> _Value = new List<MilageCountAlertHistoryModel>();
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
                        _SQLCommand.CommandText = "MilageCountAlertHistory_LoadByIDDeviceID";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        MilageCountAlertHistoryModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new MilageCountAlertHistoryModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.DeviceID = _SQLDataReader["DeviceID"].ToString();
                            _result.DateTimes = _SQLDataReader["DateTimes"].ToString();
                            _result.MilageCount = Convert.ToInt32(_SQLDataReader["MilageCount"].ToString());
                            _result.AlertDateMilageCount = _SQLDataReader["AlertDateMilageCount"].ToString();
                            _result.AlertRespondedDate = _SQLDataReader["AlertRespondedDate"].ToString();
                            _result.AlertRespondedBy = _SQLDataReader["AlertRespondedBy"].ToString();
                            _result.MilageServiceOilEngine = _SQLDataReader["MilageServiceOilEngine"].ToString();
                            _result.MilageServiceOilEngineDate = _SQLDataReader["MilageServiceOilEngineDate"].ToString();
                            _result.AlertMilageCountNote = _SQLDataReader["AlertMilageCountNote"].ToString();
                            _result.MilageServiceReceiptPicture = _SQLDataReader["MilageServiceReceiptPicture]"].ToString();
                            _result.AlertMillageUpdateInfoDate = _SQLDataReader["AlertMillageUpdateInfoDate]"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.MilageCountString = _SQLDataReader["MilageCountString"].ToString();
                            _result.SubsriptionStatus = _SQLDataReader["SubsriptionStatus"].ToString();
                            _result.AlertRespondedStatus = _SQLDataReader["AlertRespondedStatus"].ToString();
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






        public static List<MilageCountAlertHistoryModel> MilageCountAlertHistory_LoadReceiptPictureByID(int ID, string DeviceID)
        {
            List<MilageCountAlertHistoryModel> _Value = new List<MilageCountAlertHistoryModel>();
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
                        _SQLCommand.CommandText = "MilageCountAlertHistory_LoadReceiptPictureByID";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        MilageCountAlertHistoryModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new MilageCountAlertHistoryModel();
                            _result.MilageServiceReceiptPicture = _SQLDataReader["MilageServiceReceiptPicture]"].ToString();
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
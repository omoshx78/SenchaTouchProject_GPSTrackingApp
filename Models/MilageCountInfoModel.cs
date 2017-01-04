using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TrackingInfo.Models
{
    public class MilageCountInfoModel
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
        public string TrackID
        {
            get;
            set;
        }

        public int CurrentMilage
        {
            get;
            set;
        }
        public string CurrentMilageStr
        {
            get;
            set;
        }

        public string NextAlertMilage
        {
            get;
            set;
        }

        public string Subscription
        {
            get;
            set;
        }

        public string MilageIntervalAlert
        {
            get;
            set;
        }
        public string MilageAlertVia
        {
            get;
            set;
        }

        public string ActivationDate
        {
            get;
            set;
        }

        public string ExpiredDate
        {
            get;
            set;
        }


        public string AlertSentCount
        {
            get;
            set;
        }


        public string UpdatedBy
        {
            get;
            set;
        }
        public string LastUpdateDate
        {
            get;
            set;
        }

        public string RowStatus
        {
            get;
            set;
        }
        public string RecorrectToleranceMilage
        {
            get;
            set;
        }


        public string LastSentMilageAlertDate
        {
            get;
            set;
        }
        public string DateTimes
        {
            get;
            set;
        }




        public static List<MilageCountInfoModel> MilageCountInfo_LoadByAccountNoDeviceID(string AccountNo, string DeviceID)
        {
            List<MilageCountInfoModel> _Value = new List<MilageCountInfoModel>();
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
                        _SQLCommand.CommandText = "MilageCountInfo_LoadByDeviceAccNo";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        MilageCountInfoModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new MilageCountInfoModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.DeviceID = _SQLDataReader["DeviceID"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.CurrentMilage = Convert.ToInt32(_SQLDataReader["CurrentMilage"].ToString());
                            _result.CurrentMilageStr = _SQLDataReader["CurrentMilageStr"].ToString();
                            _result.NextAlertMilage = _SQLDataReader["NextAlertMilage"].ToString();
                            _result.Subscription = _SQLDataReader["Subscription"].ToString();
                            _result.MilageIntervalAlert = _SQLDataReader["MilageIntervalAlert"].ToString();
                            _result.MilageAlertVia = _SQLDataReader["MilageAlertVia"].ToString();
                            _result.ActivationDate = _SQLDataReader["ActivationDate"].ToString();
                            _result.ExpiredDate = _SQLDataReader["ExpiredDate"].ToString();
                            _result.AlertSentCount = _SQLDataReader["AlertSentCount"].ToString();
                            _result.UpdatedBy = _SQLDataReader["UpdatedBy"].ToString();
                            _result.LastUpdateDate = _SQLDataReader["LastUpdateDate"].ToString();
                            _result.RowStatus = _SQLDataReader["RowStatus"].ToString();
                            _result.RecorrectToleranceMilage = _SQLDataReader["RecorrectToleranceMilage"].ToString();
                            _result.LastSentMilageAlertDate = _SQLDataReader["LastSentMilageAlertDate"].ToString();
                            _result.DateTimes = _SQLDataReader["DateTimes"].ToString();

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
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class GeoFenceAreaModel
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
        public string FencePath
        {
            get;
            set;
        }
        public string FenceName
        {
            get;
            set;
        }
        public string FenceLength
        {
            get;
            set;
        }
        public string Status
        {
            get;
            set;
        }
        public string ShapeType
        {
            get;
            set;
        }
        public string CreatedDate
        {
            get;
            set;
        }
        public GeoFenceAreaModel() { }

        public static bool GeoFenceArea_Insert(string AccountNo, string FencePath, string FenceName, string Fencelenght, string ShapeType, string TrackID)
        {
            List<GeoFenceAreaModel> _Value = new List<GeoFenceAreaModel>();
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
                        _SQLCommand.CommandText = "GeoFenceArea_Insert";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@FencePath", FencePath);
                        _SQLCommand.Parameters.AddWithValue("@FenceName", FenceName);
                        _SQLCommand.Parameters.AddWithValue("@Fencelenght", Fencelenght);                   
                        _SQLCommand.Parameters.AddWithValue("@ShapeType", ShapeType);
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


        public static bool GeoFenceArea_Update(int ID,string AccountNo, string FencePath, string FenceName, string Fencelenght, string ShapeType)
        {
            List<GeoFenceAreaModel> _Value = new List<GeoFenceAreaModel>();
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
                        _SQLCommand.CommandText = "GeoFenceArea_Update";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@FencePath", FencePath);
                        _SQLCommand.Parameters.AddWithValue("@FenceName", FenceName);
                        _SQLCommand.Parameters.AddWithValue("@Fencelenght", Fencelenght);                       
                        _SQLCommand.Parameters.AddWithValue("@ShapeType", ShapeType);
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







        public static bool GeoFenceArea_Disabled(int ID, string AccountNo)
        {
            List<GeoFenceAreaModel> _Value = new List<GeoFenceAreaModel>();
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
                        _SQLCommand.CommandText = "GeoFenceArea_Disabled";
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











        public static List<GeoFenceAreaModel> GeoFenceArea_SelectByAccountNo(string AccountNo)
        {
            List<GeoFenceAreaModel> _Value = new List<GeoFenceAreaModel>();
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
                        _SQLCommand.CommandText = "GeoFenceArea_SelectByAccountNo";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);

                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        GeoFenceAreaModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new GeoFenceAreaModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.FenceName = _SQLDataReader["FenceName"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.FenceLength = _SQLDataReader["FenceLength"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            
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

        public static List<GeoFenceAreaModel> GeoFenceArea_SelectByIDByAccountNo(int ID,string AccountNo)
        {
            List<GeoFenceAreaModel> _Value = new List<GeoFenceAreaModel>();
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
                        _SQLCommand.CommandText = "GeoFenceArea_SelectByIDByAccountNo";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);

                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        GeoFenceAreaModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new GeoFenceAreaModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.FenceName = _SQLDataReader["FenceName"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.FenceLength = _SQLDataReader["FenceLength"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();

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








        public static List<GeoFenceAreaModel> GeoFenceArea_SelectByAccountNoByFenceName(string AccountNo,string FenceName)
        {
            List<GeoFenceAreaModel> _Value = new List<GeoFenceAreaModel>();
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
                        _SQLCommand.CommandText = "GeoFenceArea_SelectByAccountNoByFenceName";
                      
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@FenceName", FenceName);

                        //  _SQLCommand.Parameters.AddWithValue("@count", count);
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        GeoFenceAreaModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new GeoFenceAreaModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.FenceName = _SQLDataReader["FenceName"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.FenceLength = _SQLDataReader["FenceLength"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();

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
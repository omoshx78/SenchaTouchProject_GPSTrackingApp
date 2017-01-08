using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class TrackingItemModel
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

        public string GPSSimNumber
        {
            get;
            set;
        }
        public string TrackID
        {
            get;
            set;
        }

        public string DeviceID
        {
            get;
            set;
        }
        public string TrackItemType
        {
            get;
            set;
        }

        public string TrackItem
        {
            get;
            set;
        }

        public string GPSModel
        {
            get;
            set;
        }

        public string Interval
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

        public string ExpiredDate
        {
            get;
            set;
        }
        public string Term
        {
            get;
            set;
        }


        public string SearchCol
        {
            get;
            set;
        }
        
         public string Sex
        {
            get;
            set;
        }
          public string Risk
        {
            get;
            set;
        } 
        public string Age
        {
            get;
            set;
        }
          public string Picture
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


          public string SimNum
          {
              get;
              set;
          }
          public static List<TrackingItemModel> Get_TrackingItemImage(string TrackID, string DeviceID,string AccountNo)
          {

              List<TrackingItemModel> _Value = new List<TrackingItemModel>();

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
                          _SQLCommand.CommandText = "Get_TrackingItemImage";

                          _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                          _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                          _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                          _DBConnection.Open();


                          SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                          TrackingItemModel _result;

                          while (_SQLDataReader.Read())
                          {


                              _result = new TrackingItemModel();

                              _result.Picture = _SQLDataReader["Picture"].ToString();


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
        public static List<TrackingItemModel> Get_TrackingIDCheck(string TrackID)
        {

            List<TrackingItemModel> _Value = new List<TrackingItemModel>();

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
                        _SQLCommand.CommandText = "Get_TrackIDCheck";
                        
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        TrackingItemModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new TrackingItemModel();
                        
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



        public static List<TrackingItemModel> Get_TrackingItemDetail(string AccountNo, string TrackID, string DeviceID)
        {

            List<TrackingItemModel> _Value = new List<TrackingItemModel>();

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
                        _SQLCommand.CommandText = "Get_TrackingItem_Detail";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        TrackingItemModel _result;

                        while (_SQLDataReader.Read())
                        {

                      
                            _result = new TrackingItemModel();

                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.DeviceID = _SQLDataReader["DeviceID"].ToString();
                            _result.GPSSimNumber = _SQLDataReader["GPSSimNumber"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.TrackItemType = _SQLDataReader["TrackItemType"].ToString();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.GPSModel = _SQLDataReader["GPSModel"].ToString();
                            _result.CreatedBy = _SQLDataReader["CreatedBy"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.ModifiedBy = _SQLDataReader["ModifiedBy"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();
                            _result.TrackingMode = _SQLDataReader["TrackingMode"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.ExpiredDate = _SQLDataReader["ExpiredDate"].ToString();
                            _result.Term = _SQLDataReader["Term"].ToString();
                            _result.Sex = _SQLDataReader["Sex"].ToString();
                            _result.Risk = _SQLDataReader["Risk"].ToString();
                            _result.Age = _SQLDataReader["Age"].ToString();
                            _result.Picture = _SQLDataReader["Picture"].ToString();
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




        public static List<TrackingItemModel> Get_TrackingItem(string AccountNo)
        {

            List<TrackingItemModel> _Value = new List<TrackingItemModel>();

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
                        _SQLCommand.CommandText = "Get_TrackingItem";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        TrackingItemModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new TrackingItemModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.GPSSimNumber = _SQLDataReader["GPSSimNumber"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.DeviceID = _SQLDataReader["DeviceID"].ToString();
                            _result.TrackItemType = _SQLDataReader["TrackItemType"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.GPSModel = _SQLDataReader["GPSModel"].ToString();
                            _result.Interval = _SQLDataReader["Interval"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();  
                            _result.CreatedBy = _SQLDataReader["CreatedBy"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();
                            _result.ModifiedBy = _SQLDataReader["ModifiedBy"].ToString();                     
                            _result.TrackingMode = _SQLDataReader["TrackingMode"].ToString();
                            _result.Status = _SQLDataReader["Status"].ToString();
                            _result.ExpiredDate = _SQLDataReader["ExpiredDate"].ToString();
                            _result.Term = _SQLDataReader["Term"].ToString();
                            _result.Sex = _SQLDataReader["Sex"].ToString();
                            _result.Risk = _SQLDataReader["Risk"].ToString();
                            _result.Age = _SQLDataReader["Age"].ToString();
                            ////_result.Picture = _SQLDataReader["Picture"].ToString();
                            _result.Spare1 = _SQLDataReader["Spare1"].ToString();
                            _result.Spare2 = _SQLDataReader["Spare2"].ToString();
                            _result.Spare3 = _SQLDataReader["Spare3"].ToString();
                            _result.Spare4 = _SQLDataReader["TrackID"].ToString() + ',' + _SQLDataReader["DeviceID"].ToString() + ',' + _SQLDataReader["TrackItem"].ToString() + ',' + _SQLDataReader["TrackItemType"].ToString();

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





        public static List<TrackingItemModel> Get_TrackingItemHistoryModule(string AccountNo,string TrackID)
        {

            List<TrackingItemModel> _Value = new List<TrackingItemModel>();

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
                        _SQLCommand.CommandText = "Get_TrackingItemHistoryModule";
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        TrackingItemModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new TrackingItemModel();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.DeviceID = _SQLDataReader["DeviceID"].ToString();
                            _result.SimNum = _SQLDataReader["SimNum"].ToString();
                          
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





        public static List<TrackingItemModel> Get_Searchcol(string Searchcol)
        {

            List<TrackingItemModel> _Value = new List<TrackingItemModel>();

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
                        _SQLCommand.CommandText = "Get_SearchCol";
                        _SQLCommand.Parameters.AddWithValue("@Searchcol", Searchcol);
                      
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        TrackingItemModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new TrackingItemModel();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                          

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




        public static bool TrackingItem_InsertUpdate(int ID, string AccountNo, string GPSSimNumber, string TrackID, string DeviceID, string TrackItemType, string TrackItem, string GPSModel, string TrackingMode, string Status, int Term, string CreatedBy, string ModifiedBy, string SearchCol, string Sex, string Risk, string Age, string Picture)
        {
            List<TrackingItemModel> _Value = new List<TrackingItemModel>();
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
                        _SQLCommand.CommandText = "TrackingItem_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@GPSSimNumber", GPSSimNumber);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                       // 
                        _SQLCommand.Parameters.AddWithValue("@TrackItemType", TrackItemType);
                        _SQLCommand.Parameters.AddWithValue("@TrackItem", TrackItem);
                        _SQLCommand.Parameters.AddWithValue("@GPSModel", GPSModel);
                        _SQLCommand.Parameters.AddWithValue("@CreatedBy", CreatedBy);
                        _SQLCommand.Parameters.AddWithValue("@ModifiedBy", ModifiedBy); 
                        _SQLCommand.Parameters.AddWithValue("@TrackingMode", TrackingMode);
                        _SQLCommand.Parameters.AddWithValue("@Status", Status);
                        _SQLCommand.Parameters.AddWithValue("@Term", Term);
                        _SQLCommand.Parameters.AddWithValue("@SearchCol", SearchCol);
                        
                          _SQLCommand.Parameters.AddWithValue("@Sex", Sex);
                        _SQLCommand.Parameters.AddWithValue("@Risk", Risk);
                        _SQLCommand.Parameters.AddWithValue("@Age", Age);
                        _SQLCommand.Parameters.AddWithValue("@Picture", Picture);


                        
	
	
		
                    
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





        public static bool TrackingItem_Update(int ID,string AccountNo, string GPSSimNumber, string TrackID, string DeviceID, string TrackItemType, string TrackItem, string GPSModel,
       string ModifiedBy)
        {
            List<TrackingItemModel> _Value = new List<TrackingItemModel>();
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
                        _SQLCommand.CommandText = "TrackingItem_Update";
                        _SQLCommand.Parameters.AddWithValue("@ID", ID);
                        _SQLCommand.Parameters.AddWithValue("@GPSSimNumber", GPSSimNumber);
                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@TrackItemType", TrackItemType);
                        _SQLCommand.Parameters.AddWithValue("@TrackItem", TrackItem);
                        _SQLCommand.Parameters.AddWithValue("@GPSModel", GPSModel);
                        _SQLCommand.Parameters.AddWithValue("@ModifiedBy", ModifiedBy);
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
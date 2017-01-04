using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;


namespace TrackingInfo.Models
{
    public class MarkerModel
    {


        public int ID
        {
            get;
            set;
        }

        public string Marker1
        {
            get;
            set;
        }

        public string Marker2
        {
            get;
            set;
        }
        public string Marker3
        {
            get;
            set;
        }


        public MarkerModel() { }



        public static List<MarkerModel> Marker_GetMarker()
        {

            List<MarkerModel> _Value = new List<MarkerModel>();

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

                        _SQLCommand.CommandText = "Get_Marker";

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        MarkerModel _result;

                        while (_SQLDataReader.Read())
                        {
                            _result = new MarkerModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.Marker1 = _SQLDataReader["Marker1"].ToString();
                            _result.Marker2 = _SQLDataReader["Marker2"].ToString();
                            _result.Marker3 = _SQLDataReader["Marker3"].ToString();                           
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
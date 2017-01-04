using System;

using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TrackingInfo.Models
{
    public class SQLConnectionString
    {
        public static SqlConnection BuildConnection()
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["TrackingAppsConnection"].ConnectionString);
            return conn;
        }
    }
}
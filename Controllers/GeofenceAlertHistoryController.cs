using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;
namespace TrackingInfo.Controllers
{
    public class GeofenceAlertHistoryController : Controller
    {
        //
        // GET: /GeofenceAlertHistory/

        //public ActionResult Index()
        //{
        //    return View();
        //}


        [HttpGet]
        public JsonResult GeofenceAlertHistoryByAccNo(string AccNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeofenceAlertHistoryModel> data = new List<GeofenceAlertHistoryModel>();
            try
            {
                data = GeofenceAlertHistoryModel.Get_GeofenceAlertHistoryByAccNo(AccNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public JsonResult GeofenceAlertHistoryByTrackID(string TrackID, string DateFrom, string DateTo,string geofenceID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeofenceAlertHistoryModel> data = new List<GeofenceAlertHistoryModel>();
            try
            {
                data = GeofenceAlertHistoryModel.Get_GeofenceAlertHistoryByTrackID(TrackID, DateFrom, DateTo, geofenceID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

    }
}

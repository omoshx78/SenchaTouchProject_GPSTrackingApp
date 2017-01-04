using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{

    public class GeoFenceController : Controller
    {
        //
        // GET: /GeoFence/

        //public ActionResult Index()
        //{
        //    return View();
        //}\



        [HttpGet]

        public JsonResult GeofenceSelect(string AccountNo, string TrackID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceModel> data = new List<GeoFenceModel>();
            try
            {
                data = GeoFenceModel.Geofence_Select(AccountNo, TrackID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }
         [HttpGet]

        public JsonResult GeofenceActive(string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceModel> data = new List<GeoFenceModel>();
            try
            {
                data = GeoFenceModel.Geofence_Active(AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        

        [HttpPost]
         public JsonResult GeofenceInsert(string AccountNo, string TrackID, string TrackItem, string Fencelenght, string FencePath, string ShapeType, string FenceAlertemail, string FenceAlertemail2, string FenceAlertemail3, string FenceAlertPhone, string FenceAlertPhone2, string FenceAlertPhone3, string FenceAlertPhone4, string Createdby, string CreatedOS, string FenceStatus, string SendAlertStatus, string SenderEmail, string Senderphone, string FenceAlertName, string FenceAlertName2, string FenceAlertName3, string FenceAlertName4, string SMSAlertMsg, string FenceName ,string FenceAlertResponderRelations, string FenceAlertResponderRelations2, string FenceAlertResponderRelations3, string FenceAlertResponderRelations4)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceModel> data = new List<GeoFenceModel>();
            try
            {
                success = GeoFenceModel.Geofence_Insert(AccountNo, TrackID, TrackItem, Fencelenght, FencePath, ShapeType, FenceAlertemail, FenceAlertemail2, FenceAlertemail3, FenceAlertPhone, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, Createdby, CreatedOS, FenceStatus, SendAlertStatus, SenderEmail, Senderphone, FenceAlertName, FenceAlertName2, FenceAlertName3, FenceAlertName4, SMSAlertMsg, FenceName, FenceAlertResponderRelations, FenceAlertResponderRelations2, FenceAlertResponderRelations3, FenceAlertResponderRelations4);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }





        [HttpPost]
        public JsonResult GeofenceDelete(string AccountNo, string TrackID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceModel> data = new List<GeoFenceModel>();
            try
            {
                success = GeoFenceModel.Geofence_Delete(AccountNo, TrackID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult GeofenceUpdate(string AccountNo, string TrackID, string TrackItem, string Fencelenght, string FencePath, string ShapeType, string FenceAlertemail, string FenceAlertemail2, string FenceAlertemail3, string FenceAlertPhone, string FenceAlertPhone2, string FenceAlertPhone3, string Createdby, string CreatedOS, string FenceStatus, string SendAlertStatus, string SenderEmail, string Senderphone)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceModel> data = new List<GeoFenceModel>();
            try
            {
                success = GeoFenceModel.Geofence_Update(AccountNo, TrackID, TrackItem, Fencelenght, FencePath, ShapeType, FenceAlertemail, FenceAlertemail2, FenceAlertemail3, FenceAlertPhone, FenceAlertPhone2, FenceAlertPhone3, Createdby, CreatedOS, FenceStatus, SendAlertStatus, SenderEmail, Senderphone);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }




        [HttpPost]
        public JsonResult GeofenceAlert(string AccountNo, string TrackID, string Alert)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceModel> data = new List<GeoFenceModel>();
            try
            {
                success = GeoFenceModel.Geofence_Alert(AccountNo, TrackID, Alert);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult GeofenceRespond(string AccountNo, string TrackID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceModel> data = new List<GeoFenceModel>();
            try
            {
                success = GeoFenceModel.Geofence_OutOfFence_Respond(AccountNo, TrackID);
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

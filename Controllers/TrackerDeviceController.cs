using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class TrackerDeviceController : Controller
    {
        //
        // GET: /TrackerDevice/

        //public ActionResult Index()
        //{
        //    return View();
        //}




        [HttpPost]
        public JsonResult TrackerDeviceInsertUpdate(int ID, string DeviceID, string DeviceName, string DeviceModel, string Manufacturer, string Supplier, string CapabilityDescript, string CoordinateType, string SimNum, string SimOperator, string Status, string CreatedBy, string ModifiedBy, string IgnitionRemotely, string LockedDoorRemotely, string ArmedRemotely, string HornRemotely, string Interval, string GPSPacket, string TrackerPwd, string TrackerUsrNm, string GPSserverPort, string ServerIP)

        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackerDeviceModel> data = new List<TrackerDeviceModel>();
            try
            {
                success = TrackerDeviceModel.TrackerDevice_InsertUpdate(ID, DeviceID, DeviceName, DeviceModel, Manufacturer, Supplier, CapabilityDescript, CoordinateType, SimNum, SimOperator, Status, CreatedBy, ModifiedBy, IgnitionRemotely, LockedDoorRemotely, ArmedRemotely, HornRemotely, Interval, GPSPacket, TrackerPwd, TrackerUsrNm, GPSserverPort, ServerIP);
      
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]

        public JsonResult GetTrackerDevice(string DeviceID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackerDeviceModel> data = new List<TrackerDeviceModel>();
            try
            {
                data = TrackerDeviceModel.Get_TrackerDevice(DeviceID);
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

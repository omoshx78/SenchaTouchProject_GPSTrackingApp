using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class MilageCountAlertHistoryController : Controller
    {
        //
        // GET: /MilageCountAlertHistory/

        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public JsonResult MilageCountAlertHistoryLoadByDeviceIDAccNo(string DeviceID, string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<MilageCountAlertHistoryModel> data = new List<MilageCountAlertHistoryModel>();
            try
            {
                data = MilageCountAlertHistoryModel.MilageCountAlertHistory_LoadByDeviceAccNo(DeviceID, AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpGet]
        public JsonResult MilageCountAlertHistoryLoadByIDDeviceID(int ID, string DeviceID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<MilageCountAlertHistoryModel> data = new List<MilageCountAlertHistoryModel>();
            try
            {
                data = MilageCountAlertHistoryModel.MilageCountAlertHistory_LoadByIDDeviceID(ID, DeviceID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }





        [HttpGet]
        public JsonResult MilageCountAlertHistoryLoadReceiptPictureByID(int ID, string DeviceID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<MilageCountAlertHistoryModel> data = new List<MilageCountAlertHistoryModel>();
            try
            {
                data = MilageCountAlertHistoryModel.MilageCountAlertHistory_LoadReceiptPictureByID(ID, DeviceID);
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

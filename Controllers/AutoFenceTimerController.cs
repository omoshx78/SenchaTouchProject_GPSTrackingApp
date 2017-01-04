using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class AutoFenceTimerController : Controller
    {
        //
        // GET: /AutoFenceTimer/

        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public JsonResult GetAutoFenceTimerByAccNo(string AccNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<AutoFenceTimerModel> data = new List<AutoFenceTimerModel>();
            try
            {
                data = AutoFenceTimerModel.Get_AutoFenceTimerByAccNo(AccNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetAutoFenceTimerGetByTrackID(string TrackID, string AccNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<AutoFenceTimerModel> data = new List<AutoFenceTimerModel>();
            try
            {
                data = AutoFenceTimerModel.Get_AutoFenceTimerGetByTrackID(TrackID, AccNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetAutoFenceTimerByAccID(int ID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<AutoFenceTimerModel> data = new List<AutoFenceTimerModel>();
            try
            {
                data = AutoFenceTimerModel.Get_AutoFenceTimerByID(ID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AutoFenceTimerDelete(int ID, string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<AutoFenceTimerModel> data = new List<AutoFenceTimerModel>();
            try
            {
                success = AutoFenceTimerModel.AutoFenceTimer_Delete(ID, AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult AutoFenceTimerInsertUpdate(int ID, string TrackItem, string TrackID, string AccountNo, string FencePath, string ShapeType,
            string FenceAreaName, string TimeFrom, string TimeTo, string DaySetting, string Status, string FenceLength)
        {
            bool success = true;
            string _Message = string.Empty;
            List<AutoFenceTimerModel> data = new List<AutoFenceTimerModel>();
            try
            {
                success = AutoFenceTimerModel.AutoFenceTimer_InsertUpdate(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength);
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

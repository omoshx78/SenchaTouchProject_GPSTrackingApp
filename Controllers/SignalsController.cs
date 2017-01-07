using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class SignalsController : Controller
    {
        //
        // GET: /Signals/

        //public ActionResult Index()
        //{
        //    return View();
        //}



        [HttpGet]

        public JsonResult GetSignalSingleTracking(string TrackID, string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SignalsModel> data = new List<SignalsModel>();
            try
            {
                data = SignalsModel.Get_SignalsSingleTracking(TrackID, AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]

        public JsonResult GetSignalSingle(string TrackID,string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SignalsModel> data = new List<SignalsModel>();
            try
            {
                data = SignalsModel.Get_SignalsSingle(TrackID,AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }






        [HttpGet]

        public JsonResult GetSignals(string DeviceID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SignalsModel> data = new List<SignalsModel>();
            try
            {
                data = SignalsModel.Get_Signals(DeviceID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        //#### WILL BE GETPLOTINGALLSIGNAL

        [HttpGet]

        public JsonResult GetSignalsMultiple(string AccNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SignalsModel> data = new List<SignalsModel>();
            try
            {
                data = SignalsModel.Get_SignalsMultiple(AccNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }





        [HttpGet]

        public JsonResult GetSignalsMultiples(string ImeiNo,string count,string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SignalsModel> data = new List<SignalsModel>();
            try
            {
                data = SignalsModel.Get_SignalsMultiples(ImeiNo, count, AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }





        [HttpGet]

        public JsonResult GetSignalsHistory(string DeviceID, string TrackID, string GPSSimNumber, string DateFrom, string DateTo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SignalsModel> data = new List<SignalsModel>();
            try
            {
                data = SignalsModel.Get_SignalsHistory(DeviceID,TrackID,GPSSimNumber,DateFrom,DateTo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }






        [HttpGet]

        public JsonResult SignalHistoryLoadByCreateria(string Createria ,string DeviceID, string TrackID, string AccountNo, string DateFrom, string DateTo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SignalsModel> data = new List<SignalsModel>();
            try
            {
                data = SignalsModel.SignalHistory_LoadByCreateria(Createria,DeviceID, TrackID, AccountNo, DateFrom, DateTo);
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

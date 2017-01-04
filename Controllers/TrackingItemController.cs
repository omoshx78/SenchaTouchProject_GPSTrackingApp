using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class TrackingItemController : Controller
    {
        //
        // GET: /TrackingItem/

        //public ActionResult Index()
        //{
        //    return View();
        //}

        


             [HttpGet]

        public JsonResult GetSearchCol(string Searchcol)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackingItemModel> data = new List<TrackingItemModel>();
            try
            {
                data = TrackingItemModel.Get_Searchcol(Searchcol);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]

        public JsonResult GetTrackingItem(string AccNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackingItemModel> data = new List<TrackingItemModel>();
            try
            {
                data = TrackingItemModel.Get_TrackingItem(AccNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]

        public JsonResult GetTrackingItemImage(string TrackID,string DeviceID,string AccNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackingItemModel> data = new List<TrackingItemModel>();
            try
            {
                data = TrackingItemModel.Get_TrackingItemImage(TrackID, DeviceID,AccNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]

        public JsonResult GetTrackingIDcheck(string TrackID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackingItemModel> data = new List<TrackingItemModel>();
            try
            {
                data = TrackingItemModel.Get_TrackingIDCheck(TrackID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]

        public JsonResult GetTrackingItemDetail(string AccNo, string TrackID, string DeviceID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackingItemModel> data = new List<TrackingItemModel>();
            try
            {
                data = TrackingItemModel.Get_TrackingItemDetail(AccNo,TrackID, DeviceID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpGet]

        public JsonResult GetTrackingItemHistoryModule(string AccNo,string tracID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackingItemModel> data = new List<TrackingItemModel>();
            try
            {
                data = TrackingItemModel.Get_TrackingItemHistoryModule(AccNo,tracID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult TrackingItemInsertUpdate(int ID, string AccountNo, string GPSSimNumber, string TrackID, string DeviceID, string TrackItemType, string TrackItem, string GPSModel, string TrackingMode, string Status, int Term, string CreatedBy, string ModifiedBy, string SearchCol, string Sex, string Risk, string Age, string Picture)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackingItemModel> data = new List<TrackingItemModel>();
            try
            {
                success = TrackingItemModel.TrackingItem_InsertUpdate(ID, AccountNo, GPSSimNumber, TrackID, DeviceID, TrackItemType, TrackItem, GPSModel, TrackingMode, Status, Term, CreatedBy, ModifiedBy, SearchCol, Sex,  Risk,  Age,  Picture);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }






        [HttpPost]
        public JsonResult TrackingItemUpdate(int ID, string AccountNo, string GPSSimNumber, string TrackID, string DeviceID, string TrackItemType, string TrackItem, string GPSModel,
       string ModifiedBy)
        {
            bool success = true;
            string _Message = string.Empty;
            List<TrackingItemModel> data = new List<TrackingItemModel>();
            try
            {
                success = TrackingItemModel.TrackingItem_Update(ID, AccountNo, GPSSimNumber, TrackID, DeviceID, TrackItemType, TrackItem, GPSModel,
        ModifiedBy);
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

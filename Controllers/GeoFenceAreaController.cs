using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class GeoFenceAreaController : Controller
    {
        //
        // GET: /GeoFenceArea/

        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpPost]
        public JsonResult GeoFenceAreaInsert(string AccountNo, string FencePath, string FenceName, string Fencelenght, string ShapeType, string TrackID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceAreaModel> data = new List<GeoFenceAreaModel>();
               
            try
            {
                success = GeoFenceAreaModel.GeoFenceArea_Insert(AccountNo, FencePath, FenceName, Fencelenght, ShapeType, TrackID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult GeoFenceAreaUpdate(int ID, string AccountNo, string FencePath, string FenceName, string Fencelenght, string ShapeType)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceAreaModel> data = new List<GeoFenceAreaModel>();

            try
            {
                success = GeoFenceAreaModel.GeoFenceArea_Update(ID,AccountNo, FencePath, FenceName, Fencelenght, ShapeType);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult GeoFenceAreaDisabled(int ID, string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceAreaModel> data = new List<GeoFenceAreaModel>();

            try
            {
                success = GeoFenceAreaModel.GeoFenceArea_Disabled(ID, AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public JsonResult GeoFenceAreaSelectByAccountNo(string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceAreaModel> data = new List<GeoFenceAreaModel>();
            try
            {
                data = GeoFenceAreaModel.GeoFenceArea_SelectByAccountNo(AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }





        [HttpGet]
        public JsonResult GeoFenceAreaSelectByIDByAccountNo(int ID, string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceAreaModel> data = new List<GeoFenceAreaModel>();
            try
            {
                data = GeoFenceAreaModel.GeoFenceArea_SelectByIDByAccountNo(ID,AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpGet]
        public JsonResult GeoFenceAreaSelectByAccountNoByFenceName(string AccountNo,string FenceName)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GeoFenceAreaModel> data = new List<GeoFenceAreaModel>();
            try
            {
                data = GeoFenceAreaModel.GeoFenceArea_SelectByAccountNoByFenceName(AccountNo, FenceName);
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

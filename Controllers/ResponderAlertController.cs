using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class ResponderAlertController : Controller
    {
        //
        // GET: /ResponderAlert/

        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public JsonResult GetResponderAlertByAccNo(string AccNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<ResponderAlertModel> data = new List<ResponderAlertModel>();
            try
            {
                data = ResponderAlertModel.Get_ResponderAlertByAccNo(AccNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public JsonResult GetResponderAlertByID(int ID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<ResponderAlertModel> data = new List<ResponderAlertModel>();
            try
            {
                data = ResponderAlertModel.Get_ResponderAlertByID(ID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult ResponderAlertLoadbyAccountNoModule(string AccountNo,string Module)
        {
            bool success = true;
            string _Message = string.Empty;
            List<ResponderAlertModel> data = new List<ResponderAlertModel>();
            try
            {
                data = ResponderAlertModel.ResponderAlert_LoadbyAccountNoModule(AccountNo, Module);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult ResponderAlertUpdate(int ID, string AccountNo, string ResponderName, string ResponderRelationShip, string ResponderPhoneNo, string ResponderEmail, string Status, string User)
        {
            bool success = true;
            string _Message = string.Empty;
            List<ResponderAlertModel> data = new List<ResponderAlertModel>();
            try
            {
                success = ResponderAlertModel.ResponderAlert_Update(ID, AccountNo, ResponderName, ResponderRelationShip, ResponderPhoneNo, ResponderEmail, Status, User);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }








        [HttpPost]
        public JsonResult ResponderAlertInsertUpdate(int ID, string AccountNo, string ResponderName, string ResponderRelationShip, string ResponderPhoneNo, string ResponderEmail, string Status, string GeofenceStatus, string User)
        {
            bool success = true;
            string _Message = string.Empty;
            List<ResponderAlertModel> data = new List<ResponderAlertModel>();
            try
            {
                success = ResponderAlertModel.ResponderAlert_InsertUpdate(ID, AccountNo, ResponderName, ResponderRelationShip, ResponderPhoneNo, ResponderEmail, Status, GeofenceStatus, User);
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

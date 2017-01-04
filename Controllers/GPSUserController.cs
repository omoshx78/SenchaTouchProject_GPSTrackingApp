using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;


namespace TrackingInfo.Controllers
{
    public class GPSUserController : Controller
    {
        //
        // GET: /GPSUser/

        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]

        public JsonResult GPSUserLog_in(string US, string PW, string PLYR, string SISOP, string IPADD)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GPSuserModel> data = new List<GPSuserModel>();
            try
            {
                data = GPSuserModel.GPSUser_Log_in(US, PW, PLYR, SISOP, IPADD);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]

        public JsonResult GetUserByAccNo(string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GPSuserModel> data = new List<GPSuserModel>();
            try
            {
                data = GPSuserModel.Get_UserbyAccNo(AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]

        public JsonResult GPSuserLoginR(string Us,string Pw,string Bro,string Os,string IP)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GPSuserModel> data = new List<GPSuserModel>();
            try
            {
                data = GPSuserModel.GPSUser_Login(Us, Pw, Bro, Os, IP);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]

        public JsonResult GPSuserLogin(string Us, string Pw, string Bro, string Os, string IP)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GPSuserModel> data = new List<GPSuserModel>();
            try
            {
                data = GPSuserModel.Get_User(Us, Pw, Bro, Os, IP);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }
       


        [HttpPost]
        public JsonResult GPSuserInsert(string UserName, string Password, string Version, string Status, string AccountNo, string RegisterBy, string UpdateBy,
            string LoginIP, string LoginType, string Browser, string OS, string EmailReg)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GPSuserModel> data = new List<GPSuserModel>();
            try
            {
                success = GPSuserModel.User_loginInsert(UserName, Password, Version, Status, AccountNo, RegisterBy, UpdateBy,
            LoginIP, LoginType, Browser, OS, EmailReg);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }




        [HttpPost]
        public JsonResult GPSuserUpdate(string UserName,string Password,string AccountNo,string UpdateBy,
         string LoginIP, string Browser,string OS,int ID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GPSuserModel> data = new List<GPSuserModel>();
            try
            {
                success = GPSuserModel.User_loginUpdate(UserName, Password, AccountNo, UpdateBy,
         LoginIP, Browser, OS, ID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult GPSuserDisable(int ID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<GPSuserModel> data = new List<GPSuserModel>();
            try
            {
                success = GPSuserModel.User_loginDisabled(ID);
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

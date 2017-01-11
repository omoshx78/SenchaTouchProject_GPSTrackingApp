using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class RegisterAccountController : Controller
    {
        //
        // GET: /RegisterAccount/

        //public ActionResult Index()
        //{
        //    return View();
        //}


        [HttpGet]

        public JsonResult GetlatestAcc()
        {
            bool success = true;
            string _Message = string.Empty;
            List<RegisteredAccountModel> data = new List<RegisteredAccountModel>();
            try
            {
                data = RegisteredAccountModel.Get_AccLatestID();
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]

        public JsonResult GetAccount(string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<RegisteredAccountModel> data = new List<RegisteredAccountModel>();
            try
            {
                data = RegisteredAccountModel.Get_Account(AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]

        public JsonResult RegisteredAccount_LoadByAccNo(string AccountNo)
        {
            bool success = true;
            string _Message = string.Empty;
            List<RegisteredAccountModel> data = new List<RegisteredAccountModel>();
            try
            {
                data = RegisteredAccountModel.RegisteredAccountLoadByAccNo(AccountNo);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult AccountInsertUpdate(string AccountNo, string AccountName, string AAddress, string AMobilePhone, string AHousePhone, string AOfficePhone, string AAlertPhone,
    string AEmail, string AAlertEmail, string AVersion, string ACreatedBy, string status, int AItemRegisterCount)
        {
            bool success = true;
            string _Message = string.Empty;
            List<RegisteredAccountModel> data = new List<RegisteredAccountModel>();
            try
            {
                success = RegisteredAccountModel.Account_InsertUpdate(AccountNo, AccountName, AAddress, AMobilePhone, AHousePhone, AOfficePhone, AAlertPhone,
                AEmail, AAlertEmail, AVersion, ACreatedBy, status, AItemRegisterCount);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult AccountUpdate(int AccID, string AccountNo, string AccountName, string AAddress, string AMobilePhone, string AHousePhone, string AOfficePhone, string AAlertPhone,
string AEmail, string AAlertEmail, string AVersion, string ACreatedBy)
        {
            bool success = true;
            string _Message = string.Empty;
            List<RegisteredAccountModel> data = new List<RegisteredAccountModel>();
            try
            {
                success = RegisteredAccountModel.Account_Update(AccID,AccountNo,AccountName,AAddress,AMobilePhone,AHousePhone,AOfficePhone,AAlertPhone,
AEmail,AAlertEmail,AVersion,ACreatedBy);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult AccountDisabled(int AccID, string AccountNo,string AStatus,string AModifiedBy)
        {
            bool success = true;
            string _Message = string.Empty;
            List<RegisteredAccountModel> data = new List<RegisteredAccountModel>();
            try
            {
                success = RegisteredAccountModel.Account_Disabled(AccID, AccountNo,AStatus,AModifiedBy);
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

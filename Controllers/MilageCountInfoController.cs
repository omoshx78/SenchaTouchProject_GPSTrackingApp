using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;
namespace TrackingInfo.Controllers
{
    public class MilageCountInfoController : Controller
    {
        //
        // GET: /MilageCountInfo/

        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public JsonResult MilageCountInfoLoadByAccountNoDeviceID(string AccountNo, string DeviceID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<MilageCountInfoModel> data = new List<MilageCountInfoModel>();
            try
            {
                data = MilageCountInfoModel.MilageCountInfo_LoadByAccountNoDeviceID(AccountNo,DeviceID);
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

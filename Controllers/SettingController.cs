using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class SettingController : Controller
    {
        //
        // GET: /Setting/

        [HttpPost]
        public JsonResult SettingInsertUpdate(string AccountNo, string TrackID, string MarkerPoint, string PanMap, string AttachedLabel, string Interval)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SettingModel> data = new List<SettingModel>();

            try
            {
                success = SettingModel.Geofence_SettingInsertUpdate(AccountNo, TrackID, MarkerPoint, PanMap, AttachedLabel, Interval);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetsettingGetbyAccontNo(string AccountNo, string TrackID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SettingModel> data = new List<SettingModel>();
            try
            {
                data = SettingModel.Geofence_GetSetting(AccountNo, TrackID);
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

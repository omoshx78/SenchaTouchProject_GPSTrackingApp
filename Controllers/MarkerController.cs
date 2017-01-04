using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;
namespace TrackingInfo.Controllers
{
    public class MarkerController : Controller
    {
        [HttpGet]
        public JsonResult GetMarker()
        {
            bool success = true;
            string _Message = string.Empty;
            List<MarkerModel> data = new List<MarkerModel>();
            try
            {
                data = MarkerModel.Marker_GetMarker();
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

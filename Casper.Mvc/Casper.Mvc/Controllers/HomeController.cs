using System.Web.Mvc;
using Casper.Mvc.Models;

namespace Casper.Mvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contact()
        {
            var model = new ContactViewModel();
            return View(model);
        }

        [HttpPost]
        public ActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("thanks");
            }

            return View(model);
        }

        public ActionResult Thanks()
        {
            return View();
        }
    }
}
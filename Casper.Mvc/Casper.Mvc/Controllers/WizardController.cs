using System.Web.Mvc;
using Casper.Mvc.Models;

namespace Casper.Mvc.Controllers
{
    public class WizardController : Controller
    {
        public ActionResult Index(int id)
        {
            var model = new WizardViewModel
            {
                Id = id,
                Question = "Question: " + id
            };

            return View(model);
        }


        [HttpPost]
        public ActionResult Index(WizardViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (model.Id++ == 50)
                    return RedirectToAction("Finished");

                return RedirectToAction("Index", new { model.Id });
            }

            return View(model);
        }

        public ActionResult Finished()
        {
            return View();
        }
    }
}
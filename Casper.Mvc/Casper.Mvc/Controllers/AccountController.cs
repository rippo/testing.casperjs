using System.Linq;
using System.Web.Mvc;
using Casper.Mvc.Models;

namespace Casper.Mvc.Controllers
{
    //Disclaimer, this is DEMO code and should not be used in production!
    //  If you do please do not accreditate me
    //  No honestly don't...


    public class AccountController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Index(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (model.Username == "test1@test.com")
                    return RedirectToAction("Search", new { id = 1 });
                if (model.Username == "test2@test.com")
                    return RedirectToAction("Search", new { id = 2 });

                ModelState.AddModelError("Username", "User could not be found");
            }

            return View(model);
        }

        public ActionResult Search(int id)
        {
            var model = new SearchViewModel { Id = id };
            return View(model);
        }

        [HttpPost]
        public ActionResult Search(SearchViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.Results = TestData.Fill()
                    .Where(w => w.Name.Contains(model.Query) && w.OwnerId == model.Id)
                    .ToList();
            }

            return View(model);
        }

    }
}
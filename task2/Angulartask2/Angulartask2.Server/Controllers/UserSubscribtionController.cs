using Angulartask2.Server.DTO;
using Angulartask2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angulartask2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubscribtionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UserSubscribtionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpPost]
        public IActionResult AddUserSubscribtion([FromBody]userSubscribtionDTO userSubscribtionDTO)
        {
            var Subscribtion = _db.Subscriptions.Where(w => w.SubscriptionId == userSubscribtionDTO.SubscriptionId).FirstOrDefault();

            var amount = Subscribtion.SubscriptionAmount;

            var startDate = DateOnly.FromDateTime(DateTime.Now);
            var endDate = DateOnly.FromDateTime(DateTime.Now);

            switch (amount)
            {
                case "7":
                    endDate = startDate.AddDays(7);
                    break;
                case "90":
                    endDate = startDate.AddMonths(3);
                    break;
                case "365":
                    endDate = startDate.AddYears(1);
                    break;

            }

            var userSubscribtion = new UserSubscription
            {
                UserId = userSubscribtionDTO.UserId,
                SubscriptionId = userSubscribtionDTO.SubscriptionId,
                SubServiceId = userSubscribtionDTO.SubServiceId,
                StartDate = startDate,
                EndDate = endDate
            };
            _db.UserSubscriptions.Add(userSubscribtion);
            _db.SaveChanges();
            return Ok();
        }
    }
}

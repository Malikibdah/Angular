using Angulartask2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angulartask2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribtionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubscribtionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public IActionResult GetAllSubscribtions()
        {
            var subscriptions = _db.Subscriptions.ToList();
            
            return Ok(subscriptions);
        }
    }
}

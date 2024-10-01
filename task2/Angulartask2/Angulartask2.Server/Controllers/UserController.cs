using Angulartask2.Server.DTO;
using Angulartask2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angulartask2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UserController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult Post([FromForm] AddUserDTO userDto)
        {
            var check = _db.Users.Where(u => u.Email == userDto.Email).FirstOrDefault();
            if (check != null)
            {
                return BadRequest("the user is exist");
            }
            var user = new User
            {
                UserName = userDto.UserName,
                Email = userDto.Email,
                PasswordHash = userDto.PasswordHash
            };
            _db.Users.Add(user);
            _db.SaveChanges();
            return Ok(user);

        }
        [HttpPost("login")]
        public IActionResult LoginUser([FromForm]AddUserDTO loginUser)
        {
            var user = _db.Users.Where(u => u.Email == loginUser.Email && u.PasswordHash == loginUser.PasswordHash).FirstOrDefault();
            if (user == null)
            {
                return Unauthorized();
            }
            return Ok(user);
        }
    }
}

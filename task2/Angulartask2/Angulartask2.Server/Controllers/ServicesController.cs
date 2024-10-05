using Angulartask2.Server.DTO;
using Angulartask2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angulartask2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ServicesController(MyDbContext db)
        {
            _db = db;
        }
        
        [HttpGet]
        public IActionResult GetAllServices()
        {
            var services = _db.Services.ToList();
            if (!services.Any()) { return BadRequest(); }
            return Ok(services);
        }

        [HttpPost("addServices")]
        public IActionResult addServices([FromForm] AddServiceDTO addServiceDTO)
        {
            var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "UploadImages");

            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            var ImageFile = Path.Combine(uploadFolder, addServiceDTO.ServiceImage.FileName);

            using (var stream = new FileStream(ImageFile, FileMode.Create))

            {
                addServiceDTO.ServiceImage.CopyToAsync(stream);
            }

            var newservice = new Service
            {
                ServiceName = addServiceDTO.ServiceName,
                ServiceDescription = addServiceDTO.ServiceDescription,
                ServiceImage = addServiceDTO.ServiceImage.FileName,
            };
            var service = _db.Services.FirstOrDefault(s => s.ServiceName == addServiceDTO.ServiceName);
            if (service != null)
            {
                return BadRequest("the service already excist");
            }
            _db.Services.Add(newservice);
            _db.SaveChanges();
            return Ok(newservice);
        }
        [HttpPut("editService/{id}")]
        public IActionResult EditService(int id, [FromForm] AddServiceDTO serviceDTO)
        {
            var service = _db.Services.Find(id);
            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadImages");
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
            var imageFile = Path.Combine(folder, serviceDTO.ServiceImage.FileName);

            using (var stream = new FileStream(imageFile, FileMode.Create))
            {
                serviceDTO.ServiceImage.CopyToAsync(stream);
            }

            service.ServiceName = serviceDTO.ServiceName ?? service.ServiceName;
            service.ServiceDescription = serviceDTO.ServiceDescription ?? service.ServiceDescription;
            service.ServiceImage = serviceDTO.ServiceImage?.FileName ?? service.ServiceImage;
            _db.Services.Update(service);
            _db.SaveChanges();
            return Ok(service);
        }
    }
}

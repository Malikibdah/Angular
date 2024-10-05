namespace Angulartask2.Server.DTO
{
    public class AddServiceDTO
    {
        public string? ServiceName { get; set; }

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }
    }
}

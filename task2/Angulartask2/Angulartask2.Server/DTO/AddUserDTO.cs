namespace Angulartask2.Server.DTO
{
    public class AddUserDTO
    {
        public string? UserName { get; set; } = null!;

        public string PasswordHash { get; set; } = null!;

        public string Email { get; set; } = null!;

    }
}

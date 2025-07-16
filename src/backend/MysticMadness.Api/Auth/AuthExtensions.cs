using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace MysticMadness.Api.Auth;

public static class AuthExtensions
{
    public static IServiceCollection AddAuth(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.Authority = configuration["Auth0:Domain"];
            options.Audience = configuration["Auth0:Audience"];
            options.TokenValidationParameters = new()
            {
                ValidIssuer = configuration["Auth0:Domain"],
                ValidAudience = configuration["Auth0:Audience"],
                RoleClaimType = "https://schemas.auth0.com/roles",
                ValidateLifetime = true
            };
        });
        return services;
    }
}

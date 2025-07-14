using AutoMapper;
using MysticMadness.Dto.Create;
using MysticMadness.Dto.Retrieve;
using MysticMadness.Dto.Update;
using MysticMadness.Model.Entities;

namespace MysticMadness.Service.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Order, OrderDto>().ReverseMap();
        CreateMap<OrderItem, OrderItemDto>().ReverseMap();
        CreateMap<User, UserDto>().ReverseMap();
        CreateMap<CartItem, CartItemDto>().ReverseMap();
        CreateMap<CartItem, CreateCartItemDto>().ReverseMap();
        CreateMap<Product, ProductDto>().ReverseMap();
        CreateMap<Product, UpdateProductDto>().ReverseMap();
        CreateMap<Product, CreateProductDto>().ReverseMap();
    }
}

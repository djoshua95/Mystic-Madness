using AutoMapper;
using MysticMadness.Dto.Create;
using MysticMadness.Dto.Retrieve;
using MysticMadness.Dto.Update;
using MysticMadness.Model.Entities;
using MysticMadness.Model.Enums;

namespace MysticMadness.Service.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<OrderItem, OrderItemDto>().ReverseMap();
        CreateMap<User, UserDto>().ReverseMap();
        CreateMap<CartItem, CartItemDto>().ReverseMap();
        CreateMap<CartItem, CreateCartItemDto>().ReverseMap();
        CreateMap<Product, ProductDto>().ReverseMap();
        CreateMap<Product, UpdateProductDto>().ReverseMap();
        CreateMap<Product, CreateProductDto>().ReverseMap();
        CreateMap<Category, CategoryDto>().ReverseMap();

        CreateMap<Order, OrderDto>()
            .ForMember(dto => dto.Status, config => config.MapFrom(x => Enum.GetName(typeof(OrderStatus), x.Status)))
            .ReverseMap();
        CreateMap<Attachment, AttachmentDto>()
            .ForMember(dto => dto.Type, config => config.MapFrom(x => Enum.GetName(typeof(AttachmentType), x.Type)))
            .ReverseMap();
    }
}

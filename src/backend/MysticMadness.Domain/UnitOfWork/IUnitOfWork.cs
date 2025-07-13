using MysticMadness.Domain.Repository;
using MysticMadness.Model.Entities;

namespace MysticMadness.Domain.UnitOfWork;

public interface IUnitOfWork
{
    IRepositoryBase<Attachment> AttachmentRepository { get; }
    IRepositoryBase<CartItem> CartItemRepository { get; }
    IRepositoryBase<Order> OrderRepository { get; }
    IRepositoryBase<OrderItem> OrderItemRepository { get; }
    IRepositoryBase<Product> ProductRepository { get; }
    IRepositoryBase<ProductAttachment> ProductAttachmentRepository { get; }
    IRepositoryBase<User> UserRepository { get; }
}

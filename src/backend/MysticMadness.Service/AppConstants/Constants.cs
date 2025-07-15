namespace MysticMadness.Service.AppConstants;

public static class Constants
{
    /// <summary>
    /// These constants are for custom logging messages when an exception is captured.
    /// </summary>
    public static class LoggingMessages
    {
        public const string ERROR_INVALID_DTO = "Invalid dto.";
        public const string ERROR_FAILED_GET_ORDERS_FOR_USER = "Failed to retrieve orders for user {UserId}. Error code: {ErrorCode}";
        public const string ERROR_FAILED_GET_PAGED_ORDERS_FOR_USER = "Failed to retrieve orders for user {UserId}. Error code: {ErrorCode}";
        public const string ERROR_FAILED_GET_PAGED_PRODUCTS = "Failed to retrieve products. Error code: {ErrorCode}";
        public const string ERROR_FAILED_SAVE_CART_ITEM = "Failed to save a cart item for {UserId}. Error code: {Error code}";
        public const string ERROR_FAILED_GET_CART_ITEMS = "Failed to retrieve the cart items for {UserId}. Error code: {Error code}";
        public const string ERROR_FAILED_GET_PRODUCT = "Failed to retrieve product. Error code: {ErrorCode}";
        public const string ERROR_FAILED_SAVE_PRODUCT = "Failed to save a product. Error code: {Error code}";
        public const string ERROR_FAILED_UPDATE_PRODUCT = "Failed to update a product. Error code: {Error code}";
        public const string ERROR_FAILED_DELETE_PRODUCT = "Failed to delete a product. Error code: {Error code}";
        public const string ERROR_INVALID_PAGE_SIZE = "Page size must be greater than or equal to 1.";
        public const string ERROR_INVALID_PAGE_NUMBER = "Page number must be greater than or equal to 1.";
    }

    /// <summary>
    /// These constants are for retrieving messages to the client.
    /// </summary>
    public static class ErrorMessages
    {
        public const string ERROR_GET_ITEMS_FAILED = "The operation failed, no items could be fetched.";
        public const string ERROR_SAVE_ITEM_FAILED = "The operation failed, it was not possible to save the item.";
        public const string ERROR_UPDATE_ITEM_FAILED = "The operation failed, it was not possible to update the item.";
        public const string ERROR_DELETE_ITEM_FAILED = "The operation failed, it was not possible to delete the item.";
    }
}

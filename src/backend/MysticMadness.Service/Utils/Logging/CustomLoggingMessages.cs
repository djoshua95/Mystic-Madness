using MysticMadness.Service.AppConstants;

namespace MysticMadness.Service.Utils.Logging;

public struct GenericLoggingError
{
    public string Template { get; set; }
    public string Code { get; set; }
    public Exception Exception { get; set; }
    public string[] Params { get; set; }
}

public interface ICustomLoggingMessage
{
    string ClientMessage { get; }
    string Code { get; }

    GenericLoggingError GetError();
    string GetClientMessage() => $"{ClientMessage} Error code: {Code}";
}

public static class CustomLoggingMessages
{
    public class ORDS0001 : ICustomLoggingMessage
    {
        public string ClientMessage { get => Constants.ErrorMessages.ERROR_GET_ITEMS_FAILED; }
        public string Code { get => nameof(ORDS0001); }

        public const string TEMPLATE = Constants.LoggingMessages.ERROR_FAILED_GET_ORDERS_FOR_USER;
        public required Exception Ex { get; set; }
        public required int UserId { get; set; }

        public GenericLoggingError GetError()
        {
            return new() { Template = TEMPLATE, Code = Code, Exception = Ex, Params = [UserId.ToString(), Code] };
        }
    }

    public class ORDS0002 : ICustomLoggingMessage
    {
        public string ClientMessage { get => Constants.ErrorMessages.ERROR_GET_ITEMS_FAILED; }
        public string Code { get => nameof(ORDS0002); }

        public const string TEMPLATE = Constants.LoggingMessages.ERROR_FAILED_GET_ORDERS_FOR_USER;
        public required Exception Ex { get; set; }
        public required int UserId { get; set; }

        public GenericLoggingError GetError()
        {
            return new() { Template = TEMPLATE, Code = Code, Exception = Ex, Params = [UserId.ToString(), Code] };
        }
    }

    public class CIS0001 : ICustomLoggingMessage
    {
        public string ClientMessage { get => Constants.ErrorMessages.ERROR_SAVE_ITEM_FAILED; }
        public string Code { get => nameof(CIS0001); }

        public const string TEMPLATE = Constants.LoggingMessages.ERROR_FAILED_SAVE_CART_ITEM;
        public required Exception Ex { get; set; }
        public required int UserId { get; set; }

        public GenericLoggingError GetError()
        {
            return new() { Template = TEMPLATE, Code = Code, Exception = Ex, Params = [UserId.ToString(), Code] };
        }
    }

    public class PROD0001 : ICustomLoggingMessage
    {
        public string ClientMessage { get => Constants.ErrorMessages.ERROR_GET_ITEMS_FAILED; }
        public string Code { get => nameof(PROD0001); }

        public const string TEMPLATE = Constants.LoggingMessages.ERROR_FAILED_GET_PAGED_PRODUCTS;
        public required Exception Ex { get; set; }

        public GenericLoggingError GetError()
        {
            return new() { Template = TEMPLATE, Code = Code, Exception = Ex, Params = [Code] };
        }
    }

    public class PROD0002 : ICustomLoggingMessage
    {
        public string ClientMessage { get => Constants.ErrorMessages.ERROR_GET_ITEMS_FAILED; }
        public string Code { get => nameof(PROD0002); }

        public const string TEMPLATE = Constants.LoggingMessages.ERROR_FAILED_GET_PRODUCT;
        public required Exception Ex { get; set; }

        public GenericLoggingError GetError()
        {
            return new() { Template = TEMPLATE, Code = Code, Exception = Ex, Params = [Code] };
        }
    }
    public class PROD0003 : ICustomLoggingMessage
    {
        public string ClientMessage { get => Constants.ErrorMessages.ERROR_SAVE_ITEM_FAILED; }
        public string Code { get => nameof(PROD0003); }

        public const string TEMPLATE = Constants.LoggingMessages.ERROR_FAILED_SAVE_PRODUCT;
        public required Exception Ex { get; set; }

        public GenericLoggingError GetError()
        {
            return new() { Template = TEMPLATE, Code = Code, Exception = Ex, Params = [Code] };
        }
    }

    public class PROD0004 : ICustomLoggingMessage
    {
        public string ClientMessage { get => Constants.ErrorMessages.ERROR_UPDATE_ITEM_FAILED; }
        public string Code { get => nameof(PROD0004); }

        public const string TEMPLATE = Constants.LoggingMessages.ERROR_FAILED_UPDATE_PRODUCT;
        public required Exception Ex { get; set; }

        public GenericLoggingError GetError()
        {
            return new() { Template = TEMPLATE, Code = Code, Exception = Ex, Params = [Code] };
        }
    }

    public class PROD0005 : ICustomLoggingMessage
    {
        public string ClientMessage { get => Constants.ErrorMessages.ERROR_DELETE_ITEM_FAILED; }
        public string Code { get => nameof(PROD0005); }

        public const string TEMPLATE = Constants.LoggingMessages.ERROR_FAILED_DELETE_PRODUCT;
        public required Exception Ex { get; set; }

        public GenericLoggingError GetError()
        {
            return new() { Template = TEMPLATE, Code = Code, Exception = Ex, Params = [Code] };
        }
    }
}

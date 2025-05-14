namespace MysticMadness.Service.Generics;

public class DataResult<TResult>
{
    public bool Success { get; set; }
    public TResult? Data { get; set; } = default;
    public string Message { get; set; } = string.Empty;
    public List<string> Errors { get; set; } = new();

    public static DataResult<TResult> CreateSuccess(TResult data, string message = "")
    {
        return new DataResult<TResult> { Success = true, Data = data, Message = message };
    }

    public static DataResult<TResult> Error(string message, List<string>? errors = null)
    {
        return new DataResult<TResult>
        {
            Success = false,
            Message = message,
            Errors = errors ?? new List<string>()
        };
    }
}
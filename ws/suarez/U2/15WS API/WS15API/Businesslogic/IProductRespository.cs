using WS15API.Model;

//<summry>
//Realizar el manejo del repository para los productos
//</summary>

namespace WS15API.Businesslogic
{
    /// <summary>
    /// Agrega un producto
    /// </summary>
    public interface IProductRespository
    {
        Task<ICollection<Product>> GetProductsAsync();
        Task<Product> AddProductAsync(Product product);
    }
}

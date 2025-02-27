using APIRestNetCore.Model;

namespace APIRestNetCore.BussinessLogic
{
    public interface IProductRepository
    {
        //Metdo para listar los productos
        Task<ICollection<Product>> GetProductsAsync();
        //Metodo para agregar un producto
        Task<Product> AddProductAsync(Product product);
    }
}

using Microsoft.EntityFrameworkCore;
using WS15API.Businesslogic;
using WS15API.Model;

namespace WS15API.DataAcces
{
    public class ProductRespository : IProductRespository
    {
        private readonly AppDBContext _context;

        public ProductRespository(AppDBContext context)
        {
            _context = context;
        }

        public async Task<Product> AddProductAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return product;
        }

        public async Task<ICollection<Product>> GetProductsAsync() 
        => await _context.Products.ToListAsync();
    }
}

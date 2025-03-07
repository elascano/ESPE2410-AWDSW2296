﻿using APIRestNetCore.BussinessLogic;
using APIRestNetCore.Model;
using Microsoft.EntityFrameworkCore;

namespace APIRestNetCore.DataAccess
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;
        public ProductRepository(AppDbContext context)
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

// File: Services/SalesService.cs
using MadecorSales.Data;
using MadecorSales.Models;
using MongoDB.Driver;
using System;
using System.Threading.Tasks;

namespace MadecorSales.Services
{
    public class SalesService
    {
        private readonly IMongoCollection<Sale> _salesCollection;

        public SalesService(MongoDbContext context)
        {
            // Assume that the collection name is "Sales"
            _salesCollection = context.GetCollection<Sale>("Sales");
        }

        /// <summary>
        /// Business Rule 1: Validate a sale.
        /// For example, check if inventory is sufficient, validate sale totals, etc.
        /// </summary>
        public async Task<bool> ValidateSaleAsync(Sale sale)
        {
            return await Task.Run(() =>
            {
                // NOTE: In a real implementation, you would inject an InventoryService
                // to check inventory levels for each sale item.
                // Here, we simulate a validation rule.
                foreach (var item in sale.Items)
                {
                    if (item.Quantity <= 0 || item.UnitPrice <= 0)
                    {
                        return false;
                    }
                }

                // Optionally, compute total and verify against provided TotalAmount.
                decimal computedTotal = 0;
                foreach (var item in sale.Items)
                {
                    computedTotal += item.Quantity * item.UnitPrice;
                }

                if (computedTotal != sale.TotalAmount)
                {
                    return false;
                }

                // Additional business validations could be applied here.
                return true;
            });
        }

        /// <summary>
        /// Business Rule 2: Approve a sale.
        /// For example, apply discount rules if the sale qualifies,
        /// check for credit limits, or flag high-value transactions.
        /// </summary>
        public async Task<Sale> ApproveSaleAsync(Sale sale)
        {
            // This is where you would implement rules to modify the sale.
            // For demonstration, let’s say if the total exceeds 1000, apply a 5% discount.
            if (sale.TotalAmount > 1000)
            {
                sale.TotalAmount *= 0.95m;
            }

            // You might then update the sale record in MongoDB.
            await _salesCollection.InsertOneAsync(sale);
            return sale;
        }
    }
}

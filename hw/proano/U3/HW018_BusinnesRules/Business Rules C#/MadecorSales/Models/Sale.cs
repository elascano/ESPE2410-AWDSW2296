using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace MadecorSales.Models
{
    public class Sale
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; } // Make it nullable

        public DateTime SaleDate { get; set; } = DateTime.UtcNow;
        public List<SaleItem> Items { get; set; } = new List<SaleItem>();
        public decimal TotalAmount { get; set; }

        public string CustomerId { get; set; } = null!;
    }
}

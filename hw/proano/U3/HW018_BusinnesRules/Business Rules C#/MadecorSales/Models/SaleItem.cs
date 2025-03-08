using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MadecorSales.Models
{
    public class SaleItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; } // Make it nullable

        public string ProductId { get; set; } = null!;
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}

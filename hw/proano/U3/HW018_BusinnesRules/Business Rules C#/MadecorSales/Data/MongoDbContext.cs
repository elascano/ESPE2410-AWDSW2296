// File: Data/MongoDbContext.cs
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace MadecorSales.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IConfiguration configuration)
        {
            var mongoSettings = configuration.GetSection("MongoDB");
            var connectionString = mongoSettings["ConnectionString"];
            var databaseName = mongoSettings["Database"];

            var client = new MongoClient(connectionString);
            _database = client.GetDatabase(databaseName);
        }

        public IMongoCollection<T> GetCollection<T>(string name)
        {
            return _database.GetCollection<T>(name);
        }
    }
}

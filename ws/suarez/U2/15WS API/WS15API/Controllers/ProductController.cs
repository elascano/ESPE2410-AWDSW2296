using Microsoft.AspNetCore.Mvc;
using WS15API.Businesslogic;
using WS15API.Model;

namespace WS15API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ProductController> _logger;
        private readonly IProductRespository _productRespository;

        public ProductController(ILogger<ProductController> logger, IProductRespository productRespository)
        {
            _logger = logger;
            _productRespository = productRespository;
        }

        [HttpGet(Name = "GetProduct")]
        public async Task<IActionResult> GetProduct()
        {
            var product = await _productRespository.GetProductsAsync();
            return Ok(product);

        }

        [HttpPost(Name = "AddProduct")]
        public async Task<IActionResult> AddProduct(Product product)
        {
            var productAdded = await _productRespository.AddProductAsync(product);

            if (productAdded is null)
                StatusCode(500);

            return StatusCode(201);

        }
    }
}

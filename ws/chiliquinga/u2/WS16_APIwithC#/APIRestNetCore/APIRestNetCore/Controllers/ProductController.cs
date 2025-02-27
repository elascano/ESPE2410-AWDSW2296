using APIRestNetCore.BussinessLogic;
using APIRestNetCore.Model;
using Microsoft.AspNetCore.Mvc;

namespace APIRestNetCore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        private readonly IProductRepository _productRepository;

        public ProductController(ILogger<ProductController> logger, IProductRepository productRepository)
        {
            _logger = logger;
            _productRepository = productRepository;
        }

        [HttpGet(Name = "GetProducts")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _productRepository.GetProductsAsync();
            return Ok(products);
        }
        [HttpPost(Name ="AddProducts")]
        public async Task<IActionResult> AddProducts(Product product)
        {
            //validacion 
            var products = await _productRepository.AddProductAsync(product);
            //200: procesamiento Ok
            //201: Recurso creado
            //500: Error
            if (products is null)
            {
                StatusCode(500);
            }
            return StatusCode(201);
        }
    }
}

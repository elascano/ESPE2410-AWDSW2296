// File: Controllers/SalesController.cs
using MadecorSales.Models;
using MadecorSales.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MadecorSales.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        private readonly SalesService _salesService;

        public SalesController(SalesService salesService)
        {
            _salesService = salesService;
        }

        /// <summary>
        /// Business Rule URI: Validate a sale.
        /// POST api/sales/validate
        /// </summary>
        [HttpPost("validate")]
        public async Task<IActionResult> ValidateSale([FromBody] Sale sale)
        {
            bool isValid = await _salesService.ValidateSaleAsync(sale);
            if (!isValid)
            {
                return BadRequest("Sale validation failed. Check quantities, pricing, and totals.");
            }
            return Ok("Sale is valid.");
        }

        /// <summary>
        /// Business Rule URI: Approve a sale (apply discount rules, etc.).
        /// POST api/sales/approve
        /// </summary>
        [HttpPost("approve")]
        public async Task<IActionResult> ApproveSale([FromBody] Sale sale)
        {
            // First, ensure the sale passes validation.
            bool isValid = await _salesService.ValidateSaleAsync(sale);
            if (!isValid)
            {
                return BadRequest("Sale validation failed. Cannot approve sale.");
            }

            var approvedSale = await _salesService.ApproveSaleAsync(sale);
            return Ok(approvedSale);
        }
    }
}

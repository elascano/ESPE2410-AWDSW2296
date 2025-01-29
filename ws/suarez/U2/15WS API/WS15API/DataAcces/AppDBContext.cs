using Microsoft.EntityFrameworkCore;
using WS15API.Model;

public class AppDBContext : DbContext
{

    public DbSet<Product> Products { get; set; }

    public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.ToTable("product");

            entity.Property(e => e.Id)
                .HasColumnName("id")
                .ValueGeneratedOnAdd();

            entity.Property(e => e.Description)
                .HasColumnName("description")
                .HasMaxLength(100)
                .IsRequired();

            entity.Property(e => e.Price)
                .HasColumnName("price")
                .HasPrecision(10, 2)
                .IsRequired();

            entity.Property(e => e.Stock)
                .HasColumnName("stock")
                .HasDefaultValue(0);
        });
    }

}

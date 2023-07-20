using Microsoft.EntityFrameworkCore;
using SmartHintDev.Domain.Models;

namespace SmartHintDev.Infra.Context
{
    public class SystemDbContext : DbContext
    {
        public SystemDbContext(DbContextOptions<SystemDbContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)  
        {
            foreach(var property in modelBuilder
                .Model
                .GetEntityTypes()
                .SelectMany(e => e.GetProperties()
                    .Where(p => p.ClrType == typeof(string))))
            {
                property.SetColumnType("varchar(100)");

                modelBuilder.ApplyConfigurationsFromAssembly(typeof(SystemDbContext).Assembly);

                foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys())) relationship.DeleteBehavior = DeleteBehavior.ClientSetNull;

                base.OnModelCreating(modelBuilder);
            }
        }

    }
}

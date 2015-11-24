using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace NandosoWeb.Models
{
    public class NandosoWebContext : DbContext
    {

        public class MyConfiguration : DbMigrationsConfiguration<NandosoWebContext>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }

            protected override void Seed(NandosoWebContext context)
            {
                var specials = new List<Special>
                {
                    new Special {
                        discount = 1.5,
                        name ="large chips" ,
                        originalPrice =2.99,
                        type =type.Item
                    },
                    new Special {
                        discount =1,
                        name ="drum",
                        originalPrice =3.5,
                        type =type.Weight
                    }
                };
                specials.ForEach(s => context.Specials.AddOrUpdate(p => p.name, s));
                context.SaveChanges();

                var comments = new List<Comment>
                {
                        new Comment
                        {
                            name="Klevin",
                            email="kelvin@abc.com",
                            message="like",
                            date=new DateTime(2015,9,3)
                        }            ,
                        new Comment
                        {
                            name="Bob"          ,
                            email="bob@abc.com",
                            message="no like",
                            date = new DateTime(2011,4,20)
                        }
                };
                comments.ForEach(c => context.Comments.AddOrUpdate(p => p.message, c));
                context.SaveChanges();

            }
        }
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public NandosoWebContext() : base("name=NandosoWebContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoWebContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<NandosoWeb.Models.Special> Specials { get; set; }

        public System.Data.Entity.DbSet<NandosoWeb.Models.Comment> Comments { get; set; }



    }
}

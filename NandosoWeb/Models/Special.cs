using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NandosoWeb.Models
{
    public enum type
    {
        Weight, Item
    }

    public class Special
    {
        public int ID { get; set; }
        public string name { get; set; }
        public double originalPrice { get; set; }
        public double discount { get; set; }
        public type type { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NandosoWeb.Models
{
    public class Comment
    {
        public int ID { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public DateTime date { get; set; }
        public string message { get; set; }
    }
}
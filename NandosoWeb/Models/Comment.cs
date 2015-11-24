using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NandosoWeb.Models
{
    public class Comment
    {
        public int ID { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        [EmailAddress]
        public string email { get; set; }
        public DateTime date { get; set; }
        [Required]
        public string message { get; set; }
    }
}
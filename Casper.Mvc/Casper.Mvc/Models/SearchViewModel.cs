using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Casper.Mvc.Models
{
    public class SearchViewModel
    {
        public int Id { get; set; }
        [Required]
        public string Query { get; set; }

        public List<SearchDto> Results { get; set; }
    }

    public static class TestData
    {
        public static IEnumerable<SearchDto> Fill()
        {
            return new List<SearchDto>
            {
                new SearchDto{ Id = 1, Name = "Albert Alderlict"},
                new SearchDto{ Id = 2, Name = "Bert Biggins"},
                new SearchDto{ Id = 3, Name = "Charles Charleson"},
                new SearchDto{ Id = 4, Name = "Dianna Django"},
                new SearchDto{ Id = 5, Name = "Ethel Edwards"},
                new SearchDto{ Id = 6, Name = "Fiona Freds"},
                new SearchDto{ Id = 7, Name = "Grace Grayson"},
                new SearchDto{ Id = 8, Name = "Harry Hill"},
                new SearchDto{ Id = 9, Name = "India Inklands"}
            };
        }
    }

    public class SearchDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
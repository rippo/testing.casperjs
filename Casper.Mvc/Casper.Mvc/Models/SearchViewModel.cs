using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Casper.Mvc.Models
{
    public class SearchViewModel
    {
        public SearchViewModel()
        {
            Results = new List<SearchDto>();
        }

        public int Id { get; set; }
        [Required(ErrorMessage = "Enter a search term")]
        public string Query { get; set; }

        public List<SearchDto> Results { get; set; }
    }

    public static class TestData
    {
        public static IEnumerable<SearchDto> Fill()
        {
            return new List<SearchDto>
            {
                new SearchDto{ Id = 1, Name = "Albert Alderlict", OwnerId = 1},
                new SearchDto{ Id = 2, Name = "Bert Biggins", OwnerId = 1},
                new SearchDto{ Id = 3, Name = "Charles Charleson", OwnerId = 1},
                new SearchDto{ Id = 4, Name = "Dianna Django", OwnerId = 1},
                new SearchDto{ Id = 5, Name = "Ethel Edwards", OwnerId = 1},
                new SearchDto{ Id = 6, Name = "Fiona Freds", OwnerId = 2},
                new SearchDto{ Id = 7, Name = "Grace Grayson", OwnerId = 2},
                new SearchDto{ Id = 8, Name = "Harry Hill", OwnerId = 2},
                new SearchDto{ Id = 9, Name = "India Inklands", OwnerId = 2}
            };
        }
    }

    public class SearchDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int OwnerId { get; set; }
    }
}
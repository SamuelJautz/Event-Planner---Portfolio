var events = [];

var form = document.getElementById("input-form");
var titleInput = document.getElementById("title");
var dateInput = document.getElementById("date");
var descriptionInput = document.getElementById("description");
var eventlist = document.getElementById("event-list");
var searchbar = document.getElementById("search");
var sortmenu = document.getElementById("sort");

form.addEventListener("submit", function(e) {

    var title;
    var date;
    var description;

    if(title.length == 0 || date.length == 0 || description.length == 0) {
        // TODO: Error einfügfen
    }
});


// Sortier-Funktion
function sort(list) {
    var value = sortmenu.value;
  
    if (value === "title-asc") {
      return list.slice().sort(function(a, b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase(), "de");
      });
    }
  
    if (value === "title-des") {
      return list.slice().sort(function(a, b) {
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase(), "de");
      });
    }
  
    if (value === "date-des") {
      return list.slice().sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    }
    if (value === "date-asc") {
        return list.slice().sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
        });
     }
    }
  








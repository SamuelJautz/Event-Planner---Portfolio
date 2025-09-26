var events = [];

var form = document.getElementById("input-form");
var titleInput = document.getElementById("title");
var dateInput = document.getElementById("date");
var descriptionInput = document.getElementById("description");
var eventlist = document.getElementById("event-list");
var searchbar = document.getElementById("search");
var sortmenu = document.getElementById("sort");

form.addEventListener("submit", function(e) {

    var event = new Event(titleInput, dateInput, descriptionInput);
    if(!event.validateEvent){ //TODO: Error Nachricht wenn event nicht validiert werden kann}

});

function refreshList() {

}



// Sortier-Funktion
function sortEvents(eventlist, sort){
  if (mode === "date-asc")   return list.sort((a,b)=> new Date(a.date) - new Date(b.date));
  if (mode === "date-desc")  return list.sort((a,b)=> new Date(b.date) - new Date(a.date));
  if (mode === "title-asc")  return list.sort((a,b)=> a.title.localeCompare(b.title));
  if (mode === "title-desc") return list.sort((a,b)=> b.title.localeCompare(a.title));
  return list;
}

class Event {
    constructor(title, date, description) {
        this.date = title;
        this.date = date;
        this.description = description;
    }

    validateEvent(){
        if(title.length == 0 || date.length == 0 || description.length == 0) {
            return false;
        }
    }
}









var events = [];

var form = document.getElementById("input-form");
var titleInput = document.getElementById("title");
var dateInput = document.getElementById("date");
var descriptionInput = document.getElementById("description");
var eventlist = document.getElementById("event-list");
var searchbar = document.getElementById("search");
var sortmenu = document.getElementById("sort");

form.addEventListener("submit", function(e) {
  e.preventDefault();
    var event = new EventItem(titleInput.value, dateInput.value, descriptionInput.value);
    if(!validateEvent(event)){
      //TODO: Error Nachricht wenn event nicht validiert werden kann}
      
    }
    events.push(event);
    sortEvents(events, );
    refreshEventList(events, eventlist);
});


function refreshEventList(events, eventlist) {
  eventlist.innerHtml = ""; //alte Listeninhalte entfernen

  //Default -- kiene Events vorhanden
  if(events.length == 0){
    eventlist.innerHtml = "<li>Keine Events vorhanden</li>"
    return;
  }

  for (var e in events) {
    var li = document.createElement("li");
    li.innerHTML = `
      <h3>${e.title}</h3>
      <p>Datum: ${e.Date}</p>
      <p>${e.description}</p>
    `;
    eventlist.appendChild(li);
  }
}

// Sortier-Funktion
function sortEvents(events, sort){
  if (mode === "date-asc")   return list.sort((a,b)=> new Date(a.date) - new Date(b.date));
  if (mode === "date-desc")  return list.sort((a,b)=> new Date(b.date) - new Date(a.date));
  if (mode === "title-asc")  return list.sort((a,b)=> a.title.localeCompare(b.title));
  if (mode === "title-desc") return list.sort((a,b)=> b.title.localeCompare(a.title));
  return list;
}

class EventItem {
    constructor(title, date, description) {
        this.date = title.trim();
        this.date = date;
        this.description = description;
    }

    validateEvent(){
        if(title.length == 0 || date.length == 0 || description.length == 0) {
            return false;
        }
    }
}
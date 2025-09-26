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
    if(!event.validateEvent(event)){
      //TODO: Error Nachricht wenn event nicht validiert werden kann}
      alert("Fehler")
      return;
    }
    events.push(event);
      // sortieren (Fallback: date-asc)
    sortEvents(events, (sortmenu && sortmenu.value) || "date-asc");
    refreshEventList(events, eventlist);
});



sortmenu.addEventListener("change", function () {
  var sort = sortmenu.value;
  sortEvents(events, sort);
  refreshEventList(events, eventlist);
});


function refreshEventList(events, eventlist) {
  eventlist.innerHTML = ""; //alte Listeninhalte entfernen

  //Default -- kiene Events vorhanden
  if(events.length == 0){
    eventlist.innerHtml = "<li>Keine Events vorhanden</li>"
    return;
  }

  for (var e of events) {
    var li = document.createElement("li");
    li.innerHTML = `
      <div class="event">
        <h3>${e.title}</h3>
        <p><span style="font-weight: bold">Datum: </span>${e.date}</p>
        <p>${e.description}</p>
      </div>
    `;
    eventlist.appendChild(li);
  }
}

// Sortier-Funktion
function sortEvents(events, sort){
  if (sort == "date-asc")   return events.sort((a,b)=> new Date(a.date) - new Date(b.date));
  if (sort == "date-des")  return events.sort((a,b)=> new Date(b.date) - new Date(a.date));
  if (sort == "title-asc")  return events.sort((a,b)=> a.title.localeCompare(b.title));
  if (sort == "title-des") return events.sort((a,b)=> b.title.localeCompare(a.title));
  return events;
}

class EventItem {
    constructor(title, date, description) {
        this.title = title.trim();
        this.date = date;
        this.description = description;
    }

    validateEvent(){
        if(this.title.length == 0 || this.date.length == 0 || this.description.length == 0) {
            return false;
        }
        return true;
    }
}
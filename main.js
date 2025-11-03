// GRUPPE: WWI24A - 4133345 Samuel Jautz - 8803132 Johannes Belz - 4754659 Lars Guenther - 5906652 Tim Kachel

var events = [];

var form = document.getElementById("input-form");
var titleInput = document.getElementById("title");
var dateInput = document.getElementById("date");
var descriptionInput = document.getElementById("description");
var eventlist = document.getElementById("event-list");
var searchbar = document.getElementById("search");
var sortmenu = document.getElementById("sort");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var event = new EventItem(titleInput.value, dateInput.value, descriptionInput.value);

  if (!validateEvent(event)) return;

  events.push(event);
  refreshEventList(events, eventlist);
});

sortmenu.addEventListener("change", function () {
  refreshEventList(events, eventlist);
});


searchbar.addEventListener("input", function () {
  refreshEventList(events, eventlist);
});

function validateEvent(event) {
  titleInput.setCustomValidity("");
  dateInput.setCustomValidity("");
  descriptionInput.setCustomValidity("");

  if (!titleInput.value.trim()) titleInput.setCustomValidity("Titel fehlt.");
  if (!dateInput.value) dateInput.setCustomValidity("Datum fehlt.");
  if (!descriptionInput.value.trim()) descriptionInput.setCustomValidity("Beschreibung");

  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }
  return true;
}

function refreshEventList(events, eventlist) {

  sortEvents(events, sortmenu.value);

  var search = searchbar.value.trim().toLowerCase();
  var filtered = events;

  // Felder leer machen
  form.reset();

  if (search.length > 0) {
    filtered = events.filter(function (EventItem) {
      return (
        EventItem.title.toLowerCase().includes(search) ||
        EventItem.description.toLowerCase().includes(search)
      );
    });
  }


  eventlist.innerHTML = ""; //alte Listeninhalte entfernen

  //Default -- kiene Events vorhanden
  if (filtered.length == 0) {
    eventlist.innerHTML = "<li>Keine Events vorhanden</li>"
    return;
  }

  for (var e of filtered) {
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
function sortEvents(events, sort) {
  if (sort == "date-asc") return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (sort == "date-des") return events.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (sort == "title-asc") return events.sort((a, b) => a.title.localeCompare(b.title));
  if (sort == "title-des") return events.sort((a, b) => b.title.localeCompare(a.title));
  return events;
}

class EventItem {
  constructor(title, date, description) {
    this.title = title.trim();
    this.date = date;
    this.description = description.trim();
  }
}
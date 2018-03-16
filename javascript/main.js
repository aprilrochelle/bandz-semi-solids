//testing...
console.log("hello");

// Write to DOM
function writeToDom(outputString, outputId) {
  document.getElementById(outputId).innerHTML = outputString;
}
var tourSchedule = [
  {
      date: "3/18/18",
      city: "Nashville",
      state: "Tennessee",
      time: "7:00 PM",
      venue: "Ryman Auditorium",
      tickets: "suckit.html"
  },
  {
      date: "3/23/18",
      city: "Atlanta",
      state: "Georgia",
      time: "7:00 PM",
      venue: "Fox Theatre",
      tickets: "suckit.html"
  },
  {
      date: "4/02/18",
      city: "St. Louis",
      state: "Missouri",
      time: "7:00 PM",
      venue: "Palladium",
      tickets: "suckit.html"
  },
  {
      date: "4/09/18",
      city: "Chicago",
      state: "Illinois",
      time: "7:00 PM",
      venue: "Buddy Guy's Legends",
      tickets: "suckit.html"
  },
  {
      date: "4/18/18",
      city: "Detroit",
      state: "Michigan",
      time: "7:00 PM",
      venue: "Detroit Opera House",
      tickets: "suckit.html"
  },
  {
      date: "4/24/18",
      city: "North Tonawanda",
      state: "New York",
      time: "7:00 PM",
      venue: "Majestic Theatre",
      tickets: "suckit.html"
  },
  {
      date: "5/01/18",
      city: "Memphis",
      state: "Tennessee",
      time: "7:00 PM",
      venue: "Orpheum Theatre",
      tickets: "suckit.html"
  },
  {
      date: "5/10/18",
      city: "Redford",
      state: "Michigan",
      time: "7:00 PM",
      venue: "Redford Jaycee Hall",
      tickets: "suckit.html"
  },
  {
      date: "5/18/18",
      city: "Kansas City",
      state: "Missouri",
      time: "7:00 PM",
      venue: "Midland Theatre",
      tickets: "suckit.html"
  },
  {
      date: "5/25/18",
      city: "Los Angeles",
      state: "California",
      time: "7:00 PM",
      venue: "LA Forum",
      tickets: "suckit.html"
  },
]

function createEvent(myEvent){
  var tourString = "";
  for (var i = 0; i < myEvent.length; i++){
    tourString += '<div class="events">';
    tourString += '<p>' + myEvent[i].date + '</p>';
    tourString += '<p>' + myEvent[i].city + '</p>';
    tourString += '<p>' + myEvent[i].state + '</p>';
    tourString += '<p>' + myEvent[i].time + '</p>';
    tourString += '<p>' + myEvent[i].venue + '</p>';
    tourString += '<a href="' + myEvent[i].tickets + '"><button>Buy Now</button></a>';
    tourString += '</div>';
  writeToDom(tourString, "tourSchedule");  
  }
    
}
createEvent(tourSchedule);

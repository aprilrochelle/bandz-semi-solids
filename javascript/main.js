//testing...
console.log("hello");

// Write to DOM
function writeToDom(outputString, outputId) {
  document.getElementById(outputId).innerHTML += outputString;
}

var tourDates = [
  {
    date: "01/01/2018",
    city: "Nashville",
    state: "TN",
    venue: "Ryman",
    time: "7:00pm"
  },
  {
    date: "01/02/2018",
    city: "Nashville",
    state: "TN",
    venue: "Ryman",
    time: "7:00pm"
  },
  {
    date: "01/03/2018",
    city: "Nashville",
    state: "TN",
    venue: "Ryman",
    time: "7:00pm"
  },
  {
    date: "01/04/2018",
    city: "Nashville",
    state: "TN",
    venue: "Ryman",
    time: "7:00pm"
  },
  {
    date: "01/05/2018",
    city: "Nashville",
    state: "TN",
    venue: "Ryman",
    time: "7:00pm"
  }
];
// date city state venue time
// date city state
function indexMiniTourCard(inputTour) {
  inputTour.forEach(function(e) {
    var miniTourOutput = 
      "<div class='itemForMiniTour'></div><div class='firstMiniTourDiv'><p>" + e.date + "</p></div>" +
      "<div class='secondMiniTourDiv'><p>" + e.city + "</p></div>" +
      "<div class='thirdMiniTourDiv'><p>" + e.state + "</p></div></div>";
    writeToDom(miniTourOutput, "mini-tour");
  });
}


indexMiniTourCard(tourDates);

// students.forEach(myFunction);

// function myFunction (item, index) {

//   for( var key in item ) {
//     console.log(item[key])
//   }
// }
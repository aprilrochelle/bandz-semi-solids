//-----------BAND MEMBERS -------------------//

var bandMembers =  [
  {
  image: "../images/andy.jpg",
  name: "Andy Million",
  instrument: "Drums",
  age: 34,
  hometown: "Redford, MI",
  favoriteBand: "Sublime",
  favoriteSemiSolid: "Toothpaste"
},
{
  image: "../images/april.jpg",
  name: "April Nichols",
  instrument: "Vocals, Tamborine and Keys",
  age: 35,
  hometown: "Memphis, TN",
  favoriteBand: "Marvin Gaye, Frankie Beverly and Moonchild",
  favoriteSemiSolid: "Playdough"
},
{
  image: "../images/amanda.jpg",
  name: "Amanda Slayton",
  instrument: "Lead Vocals",
  age: 31,
  hometown: "North Tonawanda, NY",
  favoriteBand: "Faun",
  favoriteSemiSolid: "Oobleck"
},
{
  image: "../images/mary.jpg",
  name: "Mary Alice Orr",
  instrument: "Harmony and Back-Up Dancing",
  age: 31,
  hometown: "Los Angeles, CA",
  favoriteBand: "The Eagles",
  favoriteSemiSolid: "Mashed Potatoes"
},
{
  image: "../images/nathan.jpg",
  name: "Nathan Pabst",
  instrument: "Guitar",
  age: 38,
  hometown: "Kansas City, MO",
  favoriteBand: "Father John Mitsy",
  favoriteSemiSolid: "Mac & Cheese"
}];

function bandMemberBuilder(bandArray){
  bandArray.forEach(function(bandMember){
    var string = "";
    string += "<div class='band-container'>";
      string += "<img class='band-photo' src='" + bandMember.image + "'>";
      string += "<h2>" + bandMember.name + "</h2>";
      string += "<p>" + "<strong>Instrument: </strong>" + bandMember.instrument + "</p>";
      string += "<p>" + "<strong>Age: </strong>" + bandMember.age + "</p>";
      string += "<p>" + "<strong>Hometown: </strong>" + bandMember.hometown + "</p>";
      string += "<p>" + "<strong>Favorite Band: </strong>" + bandMember.favoriteBand + "</p>";
      string += "<p>" + "<strong>Favorite Semi-Solid: </strong>" + bandMember.favoriteSemiSolid + "</p>";
    string += "</div>";
    printToDom(string, 'band-member-holder')
  })
}

function printToDom(domString, divId){
  var element = document.getElementById(divId);
  element.innerHTML += domString;
}

bandMemberBuilder(bandMembers);

console.log(bandMembers);
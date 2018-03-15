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
  bandArray.forEach(function(band){
    var string = "";
    string += "<div class='band-member'>";
    string += "<image>" + bandMembers.image + "<image>";
    string += "<h2>" + bandMembers.name + "</h2>";
    string += "<h4>" + "Instrument: " + bandMembers.instrument + "</h4>";
    string += "<h4>" + "Age: " + bandMembers.age + "</h4>";
    string += "<h4>" + "Hometown: " + bandMembers.hometown + "</h4>";
    string += "<h4>" + "Favorite Band: " + bandMembers.favoriteBand + "</h4>";
    string += "<h4>" + "Favorite Semi-Solid: " + bandMembers.favoriteSemiSolid + "</h4>";
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
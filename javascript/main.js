//testing...
console.log("hello");

// Write to DOM
// function writeToDom(outputString, outputId) {
//   document.getElementById(outputId).innerHTML = outputString;
// }


var bandMembers =  [
  {
  image: "/images/andy.jpg",
  name: "Andy Million",
  instrument: "Drums",
  age: 34,
  hometown: "Redford, MI",
  favoriteBand: "Sublime",
  favoriteSemiSolid: "Toothpaste"
},
{
  image: "/images/april.jpg",
  name: "April Nichols",
  instrument: "Vocals, Tamborine and Keys",
  age: 35,
  hometown: "Memphis, TN",
  favoriteBand: "Marvin Gaye, Frankie Beverly and Moonchild",
  favoriteSemiSolid: "Playdough"
},
{
  image: "/images/amanda.jpg",
  name: "Amanda Slayton",
  instrument: "Lead Vocals",
  age: 31,
  hometown: "North Tonawanda, NY",
  favoriteBand: "Faun",
  favoriteSemiSolid: "Oobleck"
},
{
  image: "/images/mary.jpg",
  name: "Mary Alice Orr",
  instrument: "Harmony and Back-Up Dancing",
  age: 31,
  hometown: "Los Angeles, CA",
  favoriteBand: "The Eagles",
  favoriteSemiSolid: "Mashed Potatoes"
},
{
  image: "/images/nathan.jpg",
  name: "Nathan Pabst",
  instrument: "Guitar",
  age: 38,
  hometown: "Kansas City, MO",
  favoriteBand: "Father John Mitsy",
  favoriteSemiSolid: "Mac & Cheese"
}];

function bandMemberBuilder(bandMemberArray){
  bandMemberArray.forEach(function(band){
    var string = "";
    string += "<div class='band'>";
    string += "<h3>" + bandMember.name + "</h3>";
    string += "<h5>" + "Instrument: " + bandMember.instrument + "</h5>";
    string += "<h5>" + "Age: " + bandMember.age + "</h5>";
    string += "<h5>" + "Hometown: " + bandMember.hometown + "</h5>";
    string += "<h5>" + "Favorite Band: " + bandMember.favoriteBand + "</h5>";
    string += "<h5>" + "Favorite Semi-Solid: " + bandMember.favoriteSemiSolid + "</h5>";
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

// Write to DOM
function writeToDom(outputString, outputId) {
  document.getElementById(outputId).innerHTML += outputString;
};


//-----------BAND MEMBERS -------------------//


var bandMembers =  [
  {
    image: "/images/andy.jpg",
    name: "Andy Million",
    instrument: "Drums",
    age: 34,
    hometown: "Redford, MI",
    favoriteBand: "Sublime",
    favoriteSemiSolid: "Toothpaste",
    favoriteSongs: [10, 2]
  },
  {
    image: "/images/april.jpg",
    name: "April Nichols",
    instrument: "Vocals, Tamborine and Keys",
    age: 35,
    hometown: "Memphis, TN",
    favoriteBand: "Marvin Gaye, Frankie Beverly and Moonchild",
    favoriteSemiSolid: "Playdough",
    favoriteSongs: [7, 1]
  },
  {
    image: "/images/amanda.jpg",
    name: "Amanda Slayton",
    instrument: "Lead Vocals",
    age: 31,
    hometown: "North Tonawanda, NY",
    favoriteBand: "Faun",
    favoriteSemiSolid: "Oobleck",
    favoriteSongs: [5, 4]
  },
  {
    image: "/images/mary.jpg",
    name: "Mary Alice Orr",
    instrument: "Harmony and Back-Up Dancing",
    age: 31,
    hometown: "Los Angeles, CA",
    favoriteBand: "The Eagles",
    favoriteSemiSolid: "Mashed Potatoes",
    favoriteSongs: [17, 3]
  },
  {
    image: "/images/nathan.jpg",
    name: "Nathan Pabst",
    instrument: "Guitar",
    age: 38,
    hometown: "Kansas City, MO",
    favoriteBand: "Father John Mitsy",
    favoriteSemiSolid: "Mac & Cheese",
    favoriteSongs: [14, 16]
  }
];


function bandMemberBuilder(bandArray){
  var bandString = "";
  bandArray.forEach(function(bandMember){
    var string = "";
      bandString += "<div class='band-container'>";
        bandString +="<div class='band-border-photo'>"
          bandString += "<img class='band-photo' src='" + bandMember.image + "'>";
        bandString += "</div>"
        bandString += "<h2>" + bandMember.name + "</h2>";
        bandString += "<p>" + "<strong>Instrument: </strong>" + bandMember.instrument + "</p>";
        bandString += "<p>" + "<strong>Age: </strong>" + bandMember.age + "</p>";
        bandString += "<p>" + "<strong>Hometown: </strong>" + bandMember.hometown + "</p>";
        bandString += "<p>" + "<strong>Favorite Band: </strong>" + bandMember.favoriteBand + "</p>";
        bandString += "<p>" + "<strong>Favorite Semi-Solid: </strong>" + bandMember.favoriteSemiSolid + "</p>";
        bandString += "<p>" + "<strong>Favorite Semi-Solid Songs: </strong>" + songChoiceBuilder(bandMember.favoriteSongs) + "</p>";
      bandString += "</div>";
});
writeToDom(bandString, 'band-member-holder');
};



function songChoiceBuilder(favoriteSongs) {
  var songChoiceString= "";
    for (var i=0; i<songs.length; i++) {
      for (var j=0; j<favoriteSongs.length; j++) {
        if (songs[i].songId === favoriteSongs[j]) {
          songChoiceString += "<span>" + '"' + songs[i].name + '"' + " " + "</span>";
        } 
      }
    }
    return songChoiceString;
};
 





//-----------SONG LIST OBJECT ARRAY------------//

var songs = [
  {
    songId: 1,
    album: "Stick in the Mud",
    name: "Stuck On You",
    duration: 186,
    audioURL: "audioclips/audio_hero_Show-And-Tell_SIPML_Q-0149.mp3"
  },
  {
    songId: 2,
    album: "Stick in the Mud",
    name: "My Ooze",
    duration: 203,
    audioURL: "audioclips/baby-music-box_daniel-simion.mp3"
  },
  {
    songId: 3,
    album: "Stick in the Mud",
    name: "Laughin' In The Dark",
    duration: 105,
    audioURL: "audioclips/cartoon-telephone_daniel_simion.mp3"
  },
  {
    songId: 4,
    album: "Stick in the Mud",
    name: "Play with my Heart",
    duration: 105,
    audioURL: "audioclips/flock-of-seagulls_daniel-simion.mp3"
  },
  {
    songId: 5,
    album: "Stick in the Mud",
    name: "Brush It Up",
    duration: 146,
    audioURL: "audioclips/hyena-laugh_daniel-simion.mp3"
  },
  {
    songId: 6,
    album: "Stick in the Mud",
    name: "It Ain't Natural",
    duration: 359,
    audioURL: "audioclips/Kazoo-SoundBible.com-161921968.mp3"
  },
  {
    songId: 7,
    album: "Stick in the Mud",
    name: "Smash the Spud",
    duration: 465,
    audioURL: "audioclips/marbles-daniel_simon.mp3"
  },
  {
    songId: 8,
    album: "Stick in the Mud",
    name: "Slippin'",
    duration: 157,
    audioURL: "audioclips/music_david_gwyn_jones_the_long_march_instrumental.mp3"
  },
  {
    songId: 9,
    album: "Stick in the Mud",
    name: "Can't Eat This (Pain I'm Feelin')",
    duration: 791,
    audioURL: "audioclips/music_zapsplat_trick_or_treat.mp3"
  },
  {
    songId: 10,
    album: "Stick in the Mud",
    name: "Stick It (And See What Happens)",
    duration: 465,
    audioURL: "audioclips/ Mystic_Chanting_4-Marianne_Gagnon-591053853.mp3"
  },
  {
    songId: 11,
    album: "Single",
    name: "I'm Just an Ooze",
    duration: 105,
    audioURL: "audioclips/Raptor Call-SoundBible.com-858657807.mp3"
  },
  {
    songId: 12,
    album: "Single",
    name: "Let it rise",
    duration: 105,
    audioURL: "audioclips/sawing-wood-daniel_simon.mp3"
  },
  {
    songId: 13,
    album: "Single",
    name: "Melt My Gouda",
    duration: 105,
    audioURL: "audioclips/Track17_vbr.mp3"
  },
  {
    songId: 14,
    album: "Single",
    name: "Minty Fresh",
    duration: 105,
    audioURL: "audioclips/zapsplat_science_fiction_alien_small_creature_eating_17833.mp3"
  },
  {
    songId: 15,
    album: "Single",
    name: "Squish Me, I'm Gooey",
    duration: 105,
    audioURL: "audioclips/audio_hero_Seal_DIGIVC1-53.mp3"
  },
  {
    songId: 16,
    album: "Single",
    name: "Slem",
    duration: 105,
    audioURL: "audioclips/zapsplat_leisure_game_spinner_plastic_spin_slow_stop_17453.mp3"
  },
  {
    songId: 17,
    album: "Single",
    name: "My Friend, The Gelatinous Cube",
    duration: 105,
    audioURL: "audioclips/aaj_0192_WhtisYrNmEvil1.mp3"
  },
  {
    songId: 18,
    album: "Single",
    name: "Jello, Jello, Jello",
    duration: 105,
    audioURL: "audioclips/audio_hero_LaughEvilVeryLowpi PE131301.mp3"
  },
  {
    songId: 19,
    album: "Single",
    name: "Slick It",
    duration: 105,
    audioURL: "audioclips/audio_hero_MonsterEat_DIGIJ03-57-2.mp3"
  },
  {
    songId: 20,
    album: "Single",
    name: "Playtime",
    duration: 105,
    audioURL: "audioclips/Alash_Ensemble_-_01_-_Syyn_Miygak.mp3"
  }
];


//-------------HOME----------------------//

function indexMiniTourCard(tourDates) {
  var miniTourOutput = "";
  tourDates.slice(0,3).forEach(function(e) {  //only returns first three shows
    miniTourOutput +=
      "<div class='itemForMiniTour'><div class='firstMiniTourDiv'><p>" + e.date + "</p></div>" +
      "<div class='secondMiniTourDiv'><p>" + e.city + "</p></div>" +
      "<div class='thirdMiniTourDiv'><p>" + e.state + "</p></div>" +
      "<div class='fourthMiniTourDiv'><p>" + e.venue + "</p></div></div>";
  });
  writeToDom(miniTourOutput, "mini-tour");
}

function buildSongList(songArray){
  var myString = "";
  myString += "<article class='song-header'>";
  myString += "<p class='songID'>ID</p>";
  myString += "<p class='song-name'>Song</p>";
  myString += "<p class='album-name'>Album</p>";
  myString += "<p class='song-duration'>Duration</p>";
  myString += "<p>Sample</p>";
  myString += "</article>";

  for(var i = 0; i < songs.length; i++){   
    myString += "<article class='individual-song-container'>";
    myString += "<p class='songID'>" + songArray[i].songId + "</p>";
    myString += "<p class='song-name'>" + songArray[i].name + "</p>";
    myString += "<p class='album-name'>" + songArray[i].album + "</p>";
    myString += "<p class='song-duration'>" + songArray[i].duration + "</p>";
    myString += "<audio src='/" + songArray[i].audioURL + "' class='audio-element' controls controlsList='nodownload'></audio>";
    myString += "</article>";
  };
  writeToDom(myString,"song-container");
};

// TOUR SCHEDULE PAGE

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
];

function createEvent(myEvent){
  var tourString = "";
    tourString += "<article class='event-header'>";
    tourString += "<p class='date'>Date</p>";
    tourString += "<p class='city'>City</p>";
    tourString += "<p class='state'>State</p>";
    tourString += "<p class='time'>Time</p>";
    tourString += "<p class='venue'>Venue</p>";
    tourString += "<p class='tickets'>Tickets</p>";
    tourString += "</article>";
    
  for (var i = 0; i < myEvent.length; i++){
    tourString += '<article class="events">';
    tourString += '<p class="date">' + myEvent[i].date + '</p>';
    
    tourString += '<p class="city">' + myEvent[i].city + '</p>';
    tourString += '<p class="state">' + myEvent[i].state + '</p>';
    tourString += '<p class="time">' + myEvent[i].time + '</p>';
    tourString += '<p class="venue">' + myEvent[i].venue + '</p>';
    tourString += '<a href="' + myEvent[i].tickets + '"><button>Buy Now</button></a>';
    tourString += '</article>';
  };
  writeToDom(tourString, "tourSchedule");    
};
// MERCH OBJECT

var merch = [
  {
    item: "Semi-Solids Tee",
    image: "/images/merch-tee.jpg",
    price: 20,
    description: "You'll look the hottest in your Semi-Solids logo tee! Cop yours today!",
    link: "/html/suckit.html"
  },
  {
    item: "Semi-Solids Hat",
    image: "/images/merch-hat.jpg",
    price: 10,
    description: "Complete the look with your Semi-Solids logo hat. One size fits most.",
    link: "/html/suckit.html"
  },
  {
    item: "Semi-Solids Vinyl",
    image: "/images/merch-vinyl.jpg",
    price: 20,
    description: "Keep the party going with the greatest Semi-Solids hits on VINYL!",
    link: "/html/suckit.html"
  }
];

function showMerch(array) {
  var itemCard = "";
  array.forEach(function(merchItem) {
    itemCard += '<div class="merch-card"><h3>' + merchItem.item + '</h3>';
    itemCard += '<img src="' + merchItem.image + '" alt="Merch Item" width="300">';
    itemCard += '<h4>Price: ' + merchItem.price + ' USD</h4>';
    itemCard += '<p>' + merchItem.description + '</p>';
    itemCard += '<a href="' + merchItem.link + '"><button>Buy Now</button></a></div>';
  });
  writeToDom(itemCard, "merch-here");
};

//----------SUCK IT MESSAGE----------//
var suckItMsg = [
  "4 0 4. File Not Found",
  "Psych",
  "Suck it",
  "Thought something was here, didn't you?",
  "NOPE",
  "Mouldy mildew mother of mouthmuck",
  "Nuh uh",
  "It's not you, it's us. Oh wait, no it's definitly you",
  "This is not the page you were looking for.",
  "Oh no, Right in the mud.",
  "Oh mother of ooze.",
  "I wouldn't say I've been missing it Bob."
];


function suckIt(msgArray){
  var myString = document.getElementById("suckIt");
  myString.innerHTML += "<img src='/images/cross-39414_1280.png' alt='404 File Not Found' id='cross' class='suckItElement'>";
  myString.innerHTML += "<h1 class='suckItElement'>SUCK IT</h1>";
  myString.innerHTML += "<a href='/index.html' id='goHome' class='suckItElement'>Back to Home</a>";
  var myMsg = msgArray[Math.floor(Math.random() * msgArray.length)];
  var msg = new SpeechSynthesisUtterance(myMsg);
  window.speechSynthesis.speak(msg);
};




//DECIDES WHAT PAGE IS CURRENT AND CALLS APPROPRIATE FUNCTION
//OTHERWISE ERRORS OUT
var currentPage = document.title;
var pageTitle = currentPage.split(" ").pop();
if(pageTitle === "Band"){
  bandMemberBuilder(bandMembers);
}else if(pageTitle === "Songs"){
  buildSongList(songs);
}else if(pageTitle === "Merch"){
  showMerch(merch);
}else if(pageTitle === "Tour"){
  createEvent(tourSchedule);
}else if(pageTitle === "404"){
  suckIt(suckItMsg);
} else if (pageTitle === "Home") {
  indexMiniTourCard(tourSchedule);
};
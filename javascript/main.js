
// Write to DOM
function writeToDom(outputString, outputId) {
  document.getElementById(outputId).innerHTML = outputString;
}


// //-----------BAND MEMBERS -------------------//

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
  }
];

function bandMemberBuilder(bandArray){
  var bandString = "";
  bandArray.forEach(function(bandMember){
      bandString += "<div class='band-container'>";
      bandString += "<img class='band-photo' src='" + bandMember.image + "'>";
      bandString += "<h2>" + bandMember.name + "</h2>";
      bandString += "<p>" + "<strong>Instrument: </strong>" + bandMember.instrument + "</p>";
      bandString += "<p>" + "<strong>Age: </strong>" + bandMember.age + "</p>";
      bandString += "<p>" + "<strong>Hometown: </strong>" + bandMember.hometown + "</p>";
      bandString += "<p>" + "<strong>Favorite Band: </strong>" + bandMember.favoriteBand + "</p>";
      bandString += "<p>" + "<strong>Favorite Semi-Solid: </strong>" + bandMember.favoriteSemiSolid + "</p>";
      bandString += "</div>";
  });
  writeToDom(bandString, 'band-member-holder');
};

//-----------SONG LIST OBJECT ARRAY------------//

var songs = [
  {
    songId: 1,
    album: "Stick in the Mud",
    name: "Stuck On You",
    duration: "2:31",
    audioURL: "audioclips/audio_hero_Show-And-Tell_SIPML_Q-0149.mp3"
  },
  {
    songId: 2,
    album: "Stick in the Mud",
    name: "My Ooze",
    duration: "0:18",
    audioURL: "audioclips/baby-music-box_daniel-simion.mp3"
  },
  {
    songId: 3,
    album: "Stick in the Mud",
    name: "Laughin' In The Dark",
    duration: "0:06",
    audioURL: "audioclips/cartoon-telephone_daniel_simion.mp3"
  },
  {
    songId: 4,
    album: "Stick in the Mud",
    name: "Play with my Heart",
    duration: "1:01",
    audioURL: "audioclips/flock-of-seagulls_daniel-simion.mp3"
  },
  {
    songId: 5,
    album: "Stick in the Mud",
    name: "Brush It Up",
    duration: "1:46",
    audioURL: "audioclips/hyena-laugh_daniel-simion.mp3"
  },
  {
    songId: 6,
    album: "Stick in the Mud",
    name: "It Ain't Natural",
    duration: "0:07",
    audioURL: "audioclips/Kazoo-SoundBible.com-161921968.mp3"
  },
  {
    songId: 7,
    album: "Stick in the Mud",
    name: "Smash the Spud",
    duration: "4:65",
    audioURL: "audioclips/marbles-daniel_simon.mp3"
  },
  {
    songId: 8,
    album: "Stick in the Mud",
    name: "Slippin'",
    duration: "1:57",
    audioURL: "audioclips/music_david_gwyn_jones_the_long_march_instrumental.mp3"
  },
  {
    songId: 9,
    album: "Stick in the Mud",
    name: "Can't Eat This (Pain I'm Feelin')",
    duration: "1:31",
    audioURL: "audioclips/music_zapsplat_trick_or_treat.mp3"
  },
  {
    songId: 10,
    album: "Stick in the Mud",
    name: "Stick It (And See What Happens)",
    duration: "4:65",
    audioURL: "audioclips/Mystic_Chanting_4-Marianne_Gagnon-591053853.mp3"
  },
  {
    songId: 11,
    album: "Single",
    name: "I'm Just an Ooze",
    duration: "0:03",
    audioURL: "audioclips/Raptor Call-SoundBible.com-858657807.mp3"
  },
  {
    songId: 12,
    album: "Single",
    name: "Let it rise",
    duration: "0:11",
    audioURL: "audioclips/sawing-wood-daniel_simon.mp3"
  },
  {
    songId: 13,
    album: "Single",
    name: "Melt My Gouda",
    duration: "0:10",
    audioURL: "audioclips/Track17_vbr.mp3"
  },
  {
    songId: 14,
    album: "Single",
    name: "Minty Fresh",
    duration: "0:01",
    audioURL: "audioclips/zapsplat_science_fiction_alien_small_creature_eating_17833.mp3"
  },
  {
    songId: 15,
    album: "Single",
    name: "Squish Me, I'm Gooey",
    duration: "0:28",
    audioURL: "audioclips/audio_hero_Seal_DIGIVC1-53.mp3"
  },
  {
    songId: 16,
    album: "Single",
    name: "Slem",
    duration: "0:01",
    audioURL: "audioclips/zapsplat_leisure_game_spinner_plastic_spin_slow_stop_17453.mp3"
  },
  {
    songId: 17,
    album: "Single",
    name: "My Friend, The Gelatinous Cube",
    duration: "0:02",
    audioURL: "audioclips/aaj_0192_WhtisYrNmEvil1.mp3"
  },
  {
    songId: 18,
    album: "Single",
    name: "Jello, Jello, Jello",
    duration: "0:17",
    audioURL: "audioclips/audio_hero_LaughEvilVeryLowpi PE131301.mp3"
  },
  {
    songId: 19,
    album: "Single",
    name: "Slick It",
    duration: "0:31",
    audioURL: "audioclips/audio_hero_MonsterEat_DIGIJ03-57-2.mp3"
  },
  {
    songId: 20,
    album: "Single",
    name: "Playtime",
    duration: "1:35",
    audioURL: "audioclips/Alash_Ensemble_-_01_-_Syyn_Miygak.mp3"
  }
];

// Write to DOM
function writeToDom(outputString, outputId) {
  document.getElementById(outputId).innerHTML += outputString;
}

var tourSchedule = [
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

function indexMiniTourCard(tourDates) {
  tourDates.slice(0,3).forEach(function(e) {  //only returns first three shows
    var miniTourOutput =
      "<div class='itemForMiniTour'><div class='firstMiniTourDiv'><p>" + e.date + "</p></div>" +
      "<div class='secondMiniTourDiv'><p>" + e.city + "</p></div>" +
      "<div class='thirdMiniTourDiv'><p>" + e.state + "</p></div>" +
      "<div class='fourthMiniTourDiv'><p>" + e.venue + "</p></div></div>";
    writeToDom(miniTourOutput, "mini-tour");
  });
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

// SHOW MERCH FUNCTION
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

//DECIDES WHAT PAGE IS CURRENT AND CALLS APPROPRIATE FUNCTION
//OTHERWISE ERRORS OUT
var currentPage = document.title;
var pageTitle = currentPage.split(" ").pop();
if(pageTitle === "Band"){
  bandMemberBuilder(bandMembers);
}else if(pageTitle === "Songs"){
  buildSongList(songs);
} else if (pageTitle === "Merch") {
  showMerch(merch);
} else if (pageTitle === "Home") {
  indexMiniTourCard(tourSchedule);
}

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

//bandMemberBuilder(bandMembers);


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

//testing...
console.log("hello");

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

indexMiniTourCard(tourSchedule);

var merch = [
  {
    item: "Semi-Solids Tee",
    image: "/images/merch-tee.jpg",
    price: 20,
    description: "You'll look the hottest in your Semi-Solids logo tee! Cop yours today!",
    link: "url"
  },
  {
    item: "Semi-Solids Hat",
    image: "/images/merch-hat.jpg",
    price: 10,
    description: "Complete the look with your Semi-Solids logo hat. One size fits most.",
    link: "url"
  },
  {
    item: "Semi-Solids Vinyl",
    image: "/images/merch-vinyl.jpg",
    price: 20,
    description: "Keep the party going with the greatest Semi-Solids hits on VINYL! How cool are YOU?!",
    link: "url"
  }
];
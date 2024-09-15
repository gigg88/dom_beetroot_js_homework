"use strict";

// 1. Create a page that displays a numbered list of tracks:
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}]; // playlist.js

var playlist = document.getElementById('mySongs'); // Reference the list element
// Function to update the playlist display

function updatePlaylist() {
  playlist.innerHTML = ''; // Clear existing list items

  playList.forEach(function (song, index) {
    var listItem = document.createElement('li');
    listItem.textContent = "".concat(index + 1, ". ").concat(song.author, " - ").concat(song.song);
    playlist.appendChild(listItem);
  });
}

updatePlaylist(); // Call the function to display the initial playlist
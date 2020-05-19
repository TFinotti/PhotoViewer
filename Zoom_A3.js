/*
    COMP 125 - Summer 2019
	Client - Side Web Development
	Joanne Filloti

	Photo Viewer - Assignment 3
	Zoom JavaScript
	Author: Tiago Franco Finotti #301041366
	Date: June 17th 2019

	Filename: Zoom_A3.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    createEventListener();
}

/* close window */
function closeWin() {
    window.close();
}

/* create event listener for close button */
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }

    var addToFavoritesDiv = document.getElementsByTagName("p")[1];
    if (addToFavoritesDiv.addEventListener) {
        addToFavoritesDiv.addEventListener("click", window.opener.addToFavorites, false);
    } else if (addToFavoritesDiv.attachEvent) {
        addToFavoritesDiv.attachEvent("onclick", closeWin);
    }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;
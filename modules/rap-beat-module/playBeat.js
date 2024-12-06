"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playSound = playSound;
exports.stopSound = stopSound;
// Declare `currentAudio` outside of the functions so it has the appropriate scope
let currentAudio = null;
function playSound(url) {
    if (currentAudio) {
        // Stop the current audio if already playing
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    // Create a new audio element and play it
    currentAudio = new Audio(url);
    currentAudio.play().catch((error) => {
        console.error("Error playing audio:", error);
    });
}
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset playback
        currentAudio = null; // Reset the current audio reference
    }
}
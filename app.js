// Button API
const github = function() {
    window.open("https://github.com/jiffyrob", "_blank");
}

const itchio = function() {
    window.open("https://itch.io/profile/jiffyrob", "_blank");
}

const soundcloud = function() {
    window.open("https://soundcloud.com/jiffyrob/albums", "_blank");
}

const rickroll = function() {
    window.open("https://youtu.be/E4WlUXrJgy4", "_blank");
}

const discord = function() {
    window.open("discord.html", "popup", 'height=200,width=300')
};

// Set background image to be random from selection of background images
const backgroundImages = ["mushrooms", "exploding-cows"]
const backgroundImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
console.log(backgroundImage);

const style = (function() {
    // Create the <style> tag
    var style = document.createElement("style");

    // WebKit hack
    style.appendChild(document.createTextNode(""));

    // Add the <style> element to the page
    document.head.appendChild(style);
  
    console.log(style.sheet.cssRules); // length is 0, and no rules

    return style;
})();

style.sheet.insertRule(`#top-bar::before {background-image: url("img/${backgroundImage}.png");}`, 0);
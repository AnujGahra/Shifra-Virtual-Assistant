let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-IN"; // Use "hi-IN" for Hindi or "en-GB" for British English
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();

  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}

// Speak the greeting when the page loads
window.addEventListener("load", () => {
  wishMe();
});

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  if (
    message.includes("hello") ||
    message.includes("hii") ||
    message.includes("hey")
  ) {
    speak("Hello sir, How can I help you?");
  } else if (message.includes("who are you")) {
    speak("I am a virtual assistant, created by Anuj Kumar.");
  } else if (message.includes("open youtube")) {
    speak("Opening YouTube");
    window.open("https://www.youtube.com/");
  } else if (message.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com/");
  } else if (message.includes("open linkedin")) {
    speak("Opening LinkedIn");
    window.open("https://www.linkedin.com/");
  } else if (message.includes("open facebook")) {
    speak("Opening Facebook");
    window.open("https://www.facebook.com/");
  } else if (message.includes("open instagram")) {
    speak("Opening Instagram");
    window.open("https://www.instagram.com/");
  } else if (message.includes("open twitter") || message.includes("open x")) {
    speak("Opening Twitter");
    window.open("https://www.twitter.com/");
  } else if (message.includes("open github")) {
    speak("Opening GitHub");
    window.open("https://github.com/AnujGahra");
  } else if (message.includes("open stack overflow")) {
    speak("Opening Stack Overflow");
    window.open("https://stackoverflow.com/");
  } else if (message.includes("open whatsapp")) {
    speak("Opening WhatsApp Web");
    window.open("https://web.whatsapp.com/");
  } else if (message.includes("open gmail")) {
    speak("Opening Gmail");
    window.open("https://mail.google.com/");
  } else if (message.includes("open netflix")) {
    speak("Opening Netflix");
    window.open("https://www.netflix.com/");
  } else if (message.includes("open vlc media")) {
    speak("Opening Netflix");
    window.open("vlc://");
  } else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(time);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "long",
    });
    speak(date);
  } else {
    let finalText =
      "this is what i found on internet regarding" +
        message.replace("shipra", "") || message.replace("shifra", "");
    speak(finalText);
    window.open(
      `https://www.google.com/search?q=${message.replace("shipra", "")}`,
      "_blank"
    );
  }
}

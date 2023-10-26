function messageText(newMessage) {
  let message = document.querySelector(".message-note");
  message.innerHTML = newMessage;
}

function fabricDesign() {
  let fabric = prompt("What fabric designs do you like?");
  if (fabric === "Ankara") {
    return fabric;
  }
}

function moreAnkara() {
  alert("Hello! Welcome to Africa 😍");
  let name = prompt("What is your name?");
  let continent = prompt("What continent are you from?");

  if (continent === "Africa" || fabricDesign() === "Ankara") {
    messageText(
      `🌹 Hi!
        ${name} 
        It nice to know you are from
        ${continent}. Please, do explore all our exclusive African Ankara designs. Please, do explore all our exclusive African Ankara designs... Just for you!  👉 SUBCRIBE 👇`
    );
  } else {
    messageText(
      `🌹 Hi!
        ${name} 
        It nice to know you are from
        ${continent}. Good to know you love African Ankara designs. Please, do explore all our exclusive African Ankara designs... Just for you!  👉 SUBCRIBE 👇`
    );
  }
}

let ankaraBtn = document.querySelector("#design");
ankaraBtn.addEventListener("click", moreAnkara);

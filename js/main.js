//* raccolgo i dati che mi servono in variabili
const userName = document.getElementById("text-name");
const userKm = parseFloat(document.getElementById("text-km"));
const userAge = parseInt(document.getElementById("text-age"));
const generateTicketButton = document.getElementById("play-button");

const userNameEl = document.getElementById("username");
const price = document.getElementById("price");

console.log(userName.value);

//* al click del mouse
generateTicketButton.addEventListener("click", function () {
  const userNameValue = userName.value;
  const userKmValue = userKm.value;
  const userAgeValue = userAge.value;

  const ticketfare = 0.21;
  let ticketPrice = userKmValue * ticketfare;
  //* se l'età dell'utente è meno di 18
  if (userAgeValue < 18) {
    //* applichiamo uno sconto del 20%
    ticketPrice *= 0.8;
    //* altrimenti se l'età dell'utente è meno di 18
  } else if (userAgeValue > 65) {
    //* applichiamo uno sconto del 40%
    ticketPrice *= 0.6;
  }
  //* infine stampiamo il biglietto
  userNameEl.innerHTML = userNameValue;
  price.innerHTML = "€ " + ticketPrice.toFixed(2);
});

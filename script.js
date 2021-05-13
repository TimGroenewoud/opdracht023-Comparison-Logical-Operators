
const age = 50;
const firstName = "Sarah";
const totalAmount = 99.99;

// 50% korting
if (age >= 18 && age < 25) {

    console.log("Welkom u mag naar binnen, en ontvangt 50% korting op bier");

} else if (age > 25) {

    console.log("Welkom u mag naar binnen");

} else if (age <= 17) {

    console.log("kom over een jaar maar terug");

} else {

    console.log("helaas u mag nog niet niet binnen");
}

// Ludieke aktie
if (firstName === "Bram" || firstName === "Sarah") {

    console.log("Welkom, u ontvangt een bierrtje van het huis!!");

} else {

    console.log("Helaas geen gratis biertje voor jou");

}

// Jubileum korting
if (totalAmount >= 25 && totalAmount <= 49.99) {

    console.log("Bedankt voor u bestelling, u ontvangt een gratis portie bitterballen");

} else if (totalAmount >= 50 && totalAmount <= 99.99) {

    console.log("Bedankt voor u bestelling, u ontvangt een gratis portie nachos");

} else if (totalAmount >= 100) {

    console.log("Bedankt voor u bestelling, u ontvangt een gratis fles Champagne");

} else {

    console.log("U maakt geen aanspraak op de jubileum korting");

}


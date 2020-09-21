// const text = baffle(".text-pizda");
// text.set({
//   characters: "░▓▓ <█▒█▓ ░░/▓▓ ░/█ ///██ ▒░█▒ <▒█ ▓█░▓ /█▒▓",
//   speed: 200,
// });
// text.start();
// text.reveal(4000);
const text = baffle(".text-pizda");
var i = 1;

do {
  text.set({
    characters: "░▓▓ <█▒█▓ ░░/▓▓ ░/█ ///██ ▒░█▒ <▒█ ▓█░▓ /█▒▓",
    speed: 200,
  });
  text.start();
  text.reveal(4000);
  i++;
} while (i < 100);

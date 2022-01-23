// Code your solutions in this file

function writeCards(names, event) {
  let x = []
  for (let i = 0; i < names.length; i++) {
    x.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

  }
  return x;
}




function countDown(){
  let countdown = 10;
  while (countdown >= 0) {
    console.log(countdown--);
  }
}
countDown(10);
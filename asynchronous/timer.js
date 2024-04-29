// timer => setTimeout
// delay/menunda pelaksanaan kode
// setTimeout(handlerFunc,timer)

// const timer = 1000;
function addTimer(taskName, timer) {
  console.log(`START  ${taskName} @${new Date(Date.now()).getTime()}`); // Synchronous
  setTimeout(function () {
    console.log(`FINISH ${taskName} @${new Date(Date.now()).getTime()}`); // Asynchronous
  }, timer);
}

addTimer(123, 200);
addTimer(124, 250);
addTimer(125, 150);

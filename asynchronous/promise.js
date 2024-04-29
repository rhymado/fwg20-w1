function addTimer(taskName) {
  const success = false;
  console.log(`START  ${taskName} @${new Date(Date.now()).getTime()}`);
  if (success) {
    return true;
  }
  return false;
}

// Promise merupakan bentuk asynchronous
const timerPromise = new Promise(function (resolve, reject) {
  const taskName = 123;
  const result = addTimer(taskName);
  setTimeout(() => {
    if (result) return resolve(taskName);
    return reject(taskName);
  }, 200);
});

// PromiseObject.then().catch()
timerPromise
  .then((taskName) => {
    console.log(`FINISH ${taskName} @${new Date(Date.now()).getTime()}`);
  })
  .catch(function (taskName) {
    console.log(`FAILED ${taskName} @${new Date(Date.now()).getTime()}`);
  });

function createTimer(taskName, timer) {
  return new Promise(function (resolve, reject) {
    const result = addTimer(taskName);
    setTimeout(() => {
      if (result) return resolve(taskName);
      return reject(taskName);
    }, timer);
  });
}

createTimer(124, 199)
  .then((taskName) => {
    console.log(`FINISH ${taskName} @${new Date(Date.now()).getTime()}`);
  })
  .catch(function (taskName) {
    console.log(`FAILED ${taskName} @${new Date(Date.now()).getTime()}`);
  });

// async => membuat fungsi asynchronous berjalan seolah-olah synchronous
//       => menandakan bahwa fungsi bersifat asynchronous

// await => menunda eksekusi kode berikutnya sampai kode
//       => asynchronous (sebelah kanan) selesai berjalan
function addTimer(taskName) {
  const success = Math.random() * 100 > 20 ? true : false;
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

async function doAsync() {
  try {
    const taskName = await timerPromise;
    console.log(`FINISH ${taskName} @${new Date(Date.now()).getTime()}`);
  } catch (taskName) {
    console.log(`FAILED ${taskName} @${new Date(Date.now()).getTime()}`);
  }
}

doAsync();

function createTimer(taskName, timer) {
  return new Promise(function (resolve, reject) {
    const result = addTimer(taskName);
    setTimeout(() => {
      if (result) return resolve(taskName);
      return reject(taskName);
    }, timer);
  });
}

const asyncFunc = async () => {
  try {
    const success = [];
    const tasks = [
      { name: 124, timer: 200 },
      { name: 125, timer: 150 },
      { name: 126, timer: 250 },
    ];
    for (let t of tasks) {
      success.push(await createTimer(t.name, t.timer));
    }
    console.log(`FINISH ${success.join(", ")} @${new Date(Date.now()).getTime()}`);
  } catch (error) {
    console.log(`FAILED ${error} @${new Date(Date.now()).getTime()}`);
  } finally {
    console.log("END");
  }
};

asyncFunc();

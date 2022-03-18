<<<<<<< Updated upstream
=======
new Promise((resolve, reject) => {
        setTimeout(() =>
        reject(new Error('awdawdaw')), 1000)
    })
  .then(() => {
      let promise = new Promise((res, rej) => {
        res(123)
      })
      promise.result = 321
      console.log(promise)
      return promise
    })
    .then((promise)=>{
        console.log(promise)
    })
    .catch(err => console.log(err))

    new Promise(function(resolve, reject) {
        setTimeout(() => {
          throw new Error("Whoops!");
        }, 1000);
      }).catch(alert);
>>>>>>> Stashed changes

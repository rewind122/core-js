import { xhrPromise } from './lib/index.js';






// xhrPromise.get('https://jsonplaceholder.typicode.com/users')
// .then(console.log)


// await 병 ...?
// Promise 객체를 알아야 await 병을 탈출할 수 있다... ... 



const getData = async () => {
  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users');

  console.log(data);
}

// getData()


























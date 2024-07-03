// console.log('storage');

import { isString } from "./type.js";

const {localStorage:storage} = window;


// const user = {
//   name: 'tiger',
//   age: 40,
//   gender: 'male',
//   email: 'tiger@nave.com'
// };

// localStorage.setItem('user', JSON.stringify(user))

// const data = JSON.parse(localStorage.getItem('user'));

// console.log(data);


export function setStorage(key, value){

  return new Promise((resolve, reject)=>{

    if(isString(key)){
      storage.setItem(key, JSON.stringify(value));
      resolve()
    }
    else{
      reject()
    }
  })

}


export function getStorage(key){


  return new Promise((resolve, reject)=>{
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject();
    }
  })

}


// const data = await getStorage('user')

// console.log(data);


export function deleteStorage(key){

  return new Promise((resolve, reject)=>{
    !key ? storage.clear() : storage.removeItem(key);
    resolve()
  })

}



deleteStorage('user')





// setStorage('user', user);
// getStorage('user');









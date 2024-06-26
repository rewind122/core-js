const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete     => 성공 / 실패 여부는 관계 없음 (성공 의미 X)

const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
};







/* ------------------------------------------------------ */
/*                     xhr callback 방식                    */
/* ------------------------------------------------------ */

function xhr({
  method = 'GET',
  url = '',
  body = null,
  onsuccess = null,
  onfail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  // const { method = 'GET', url = '', body = null, onsuccess = null, onfail = null } = options;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  // 첫번째 파라미터: 메서드 이름
  // 두번째 파라미터: url

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    // 완료 여부
    if (readyState === 4) {
      // 성공 여부
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        onsuccess(data);
      } else {
        onfail('실패!');
      }
    }
  });
  // readyState가 바뀔때마다 호출해주는 이벤트

  xhr.send(JSON.stringify(body));
}

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안 쓰면?


xhr.get = (url,onsuccess,onfail) => {
  xhr({url,onsuccess,onfail,});
}

xhr.post = (url,body,onsuccess,onfail) => {
  xhr({method:'POST',body,url,onsuccess,onfail,});
}

xhr.put = (url,body,onsuccess,onfail) => {
  xhr({method:'PUT',body,url,onsuccess,onfail,});
}

xhr.put = (url,onsuccess,onfail) => {
  xhr({method:'DELETE',url,onsuccess,onfail,});
}







/* ------------------------------------------------------ */
/*                     xhr Promise 방식                     */
/* ------------------------------------------------------ */




function xhrPromise(method,url,body){

  const xhr = new XMLHttpRequest();


  xhr.open(method, url);

  xhr.send(JSON.stringify(body));

  return new Promise((resolve,reject)=>{

    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState ===4){
        if(xhr.status >= 200 && xhr.status < 400){
          // 성공
          resolve(JSON.parse(xhr.response));
        }
        else{
          // 실패
          reject({message: '알 수 없는 오류'});
        }
      }
    })

  })

}


xhrPromise('GET',ENDPOINT,{name:'tiger'})
.then((res)=>{
  console.log(res);
})



























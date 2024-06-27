

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-control-Allow-Origin': '*',
  },
};




export const tiger = async (options) => {

  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // const {url,...restOptions} = config;

  const response = await fetch(url,restOptions);
  // fetch는 GET이 기본
  // let data

  if(response.ok){

    // data = await response.json();
    response.data = await response.json();
  }else{
    // 에러 처리 이쪽에서
  }

  // return data;
  return response;
}


// const result = await tiger({url:ENDPOINT});


// console.log( result );



tiger.get = (url,options) => {
  return tiger({
    url,
    ...options
  })
}


tiger.post = (url,body,options) => {
  return tiger({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}

tiger.delete = (url,options) => {
  return tiger({
    method:'DELETE',
    url,
    ...options,
  })
}

tiger.put = (url,body,options) => {
  return tiger({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}

tiger.patch = (url,body,options) => {
  return tiger({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}




// IIAFE 즉시 실행 비동기 함수
// (async function(){
// 
// 
// 
// })()


































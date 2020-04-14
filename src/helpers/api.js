var myHeaders = {
    "Accept":"application/json",
    "Content-Type": "application/json",
    "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI2YWQ5NTdjMy1hODI4LTQ4YzctYmMwMC1hMmI1MTI0ZjBjZjUiLCJleHAiOjE1ODY4NzgwNTd9.BIoJTcMjFnA-RHpa5NK1tlDLpMqnNfRSRjIHIdKLzpM"
}

export const get = url =>
    new Promise(
        (resolve, reject) => {
            fetch(url,{
                mode: "cors",
                method: "GET",
                headers: myHeaders
            })
                .then(response => response.json())
                .then(json => resolve(json))
                .catch(error => console.log('Authorization failed : ' + error.message));
        }
    )

const apiCall = (url, method, body, resolve, reject) =>
    fetch(url,{
        mode: "cors",
        method: method,
        headers: myHeaders,
        body: JSON.stringify(body)
        })
        .then(response => {
            if (response.ok){
                response.json().then(json => resolve(json))
            } else {
                reject(response)
            }
        })

export const post = (url,body) =>
    new Promise(
        (resolve, reject) => apiCall(url, 'POST', body, resolve, reject)
    )

export const put = (url,body) =>
    new Promise(
        (resolve, reject) => apiCall(url, 'PUT', body, resolve, reject)
    )

export const destroy = url => 
    new Promise(
        (resolve, reject) => {
            fetch(url,{
                mode: "cors",
                method: 'DELETE',
                headers: myHeaders
                })
                .then(response => {
                    if (response.ok){
                        resolve(response)
                    } else {
                        reject(response)
                    }
                })
        }
    )

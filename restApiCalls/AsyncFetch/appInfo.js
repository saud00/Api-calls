async function get(url){
    const res = await fetch(url);
    const data = await res.json();
    return data
}

async function post(url , enterData){
    const res = await fetch(url,{
        method:'POST', 
        headers: {'Content-type':'application/json'},
         body: JSON.stringify(enterData)})
    const data = await res.json()
    return data
}

async function put(url, enterData){
    const res = await fetch(url,{
        method:'PUT', 
        headers: {'Content-type':'application/json'},
         body: JSON.stringify(enterData)})

         const data = await res.json()
                return data


           //     await Promise.reject(new Error('something went wrong'))

}

async function Delete(){

}


const enterData = {
    "Title": " New entry here do you hate",
    "Body": "I look for things, but rejected \ nal or to avoid it, but it is \ nvoluptatis all the pleasures of what we can \ nest bound or no pain"
  }

// get('https://jsonplaceholder.typicode.com/posts')
// .then(res => console.log(res))
// .catch(err => console.log(err))

// post('https://jsonplaceholder.typicode.com/posts', enterData)
// .then(res => console.log(res))
// .catch(err => console.log(err))

put('https://jsonplaceholder.typicode.com/posts/5', enterData)
.then(res => console.log(res))
.catch(err => console.log(err))
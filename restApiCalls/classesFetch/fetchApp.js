const data = new Posts

// data.get('https://jsonplaceholder.typicode.com/posts', (a)=>{
//     console.log(a)
// })

const enterData = {
    
        "Title": "Edited version , No wayyy  or to reject the blind are welcome option to find",
        "Body": "Aooo g\ nsuscipit follow accepted lightly with \ nreprehenderit discomfort may be the entire \ nnostrum of the things that happens is that they are extremely"
}

// data.anotherGet('https://jsonplaceholder.typicode.com/posts')
// .then(res => console.log(res))
// .catch(err => console.log(err))


// data.post('https://jsonplaceholder.typicode.com/posts', enterData)
// .then(res => console.log(res))
// .catch(err => console.log(err))


const i = 3

// data.put(`https://jsonplaceholder.typicode.com/posts/${i}`, enterData)
// .then(res => console.log(res))
// .catch(err => console.log(err))


data.delete(`https://jsonplaceholder.typicode.com/posts/${i}`)
.then(res => console.log(res))
.catch(err => console.log(err))
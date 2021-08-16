
const li = document.getElementById('li')
const post = new posts


const data= {
    title: 'i am title',
    body: 'i am new body, you want any body like me?'
}

const editData= {
    title: 'i am edited title',
    body: 'i am new EDITED body, you want any body like me?'
}


// post.put('https://jsonplaceholder.typicode.com/posts/1',editData, function(err,response){
//     console.log(err, response)
//     if(err){
//        console.log(err)
//     }else{
//         console.log(response)
//     }
// })
post.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
    console.log(err, response)
    if(err){
       console.log(err)
    }else{
        console.log(response)
    }
})

// post.post('https://jsonplaceholder.typicode.com/posts', data, function(err,response){
//     console.log(err, response)
//     if(err){
//        console.log(err)
//     }else{
//         console.log(response)
//     }
// })

/*
post.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
    console.log(err, response)
    if(response){
        li.innerHTML= response
    }else{
        li.innerText = err
    }
})
*/
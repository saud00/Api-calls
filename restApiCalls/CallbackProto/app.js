// We are using JSON-placeholder rest api to add delete and edit posts
// json-placeholder contain fake data, for testing purpose

// In this file we use ES-5 prototype instead of ES-6 classes

const post = new posts

post.get('https://jsonplaceholder.typicode.com/posts', function(e){
    console.log(e)
})


// This is example of Async callback
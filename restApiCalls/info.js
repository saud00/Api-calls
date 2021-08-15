function posts(){
    this.post = new XMLHttpRequest();
}

let self = this
posts.prototype.get = function(url, callback){
    this.post.open('GET',url,true)

    this.post.onload = function(){
        if(this.status === 200){

            // Here return data is 'undefined' bcoz it return before the data is added to response
            //so we use callbacks
            
            //return this.responseText
            callback(this.responseText)
        }
    }

    this.post.send()
}
class posts{
    constructor(){
        this.posts = new XMLHttpRequest()
    }
    
    /*
    get(url, callback){
         this.posts.open('GET', url , true)
         
         let self = this, output=""
         self.posts.onload = function(){
             if(self.posts.status === 200){
                 const arr = JSON.parse(this.responseText)
                 arr.forEach(function(val){
                     output +=`<li>${val.title}</li>` 
                 })
                 callback(null, output )
                }else callback('error', this.status)
         }

         this.posts.send()
        }

*/
        post(url, data, callback){
                this.posts.open('POST', url, true)
                this.posts.setRequestHeader('Content-type', 'application/json')

                let self = this

                self.posts.onload = function(){
                        callback(null, this.responseText )
                }
                
                this.posts.send(JSON.stringify(data))


            }


        put(url,editData, callback){
                this.posts.open('PUT', url, true)
                this.posts.setRequestHeader('Content-type', 'application/json')

                let self = this

                self.posts.onload = function(){
                    if(self.posts.status === 200){
                        callback(null, this.responseText )
                    }else{
                        callback('error', this.status)
                    }
                }
                
                this.posts.send(JSON.stringify(editData))
            }


        delete(url, callback){
                this.posts.open('DELETE', url, true)
                this.posts.setRequestHeader('Content-type', 'application/json')

                let self = this

                self.posts.onload = function(){
                    if(self.posts.status === 200){
                        callback(null, this.responseText )
                    }else{
                        callback('error', this.status)
                    }
                }
                
                this.posts.send()


            }
}

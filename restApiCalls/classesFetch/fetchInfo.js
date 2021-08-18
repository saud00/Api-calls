
class Posts{

    get(url, callback){
        fetch(url)
        .then(res => res.json())
        .then((res) => {
            return callback(res)
            })
        .catch(err => err)
    }

    anotherGet(url){
        // In this way we use PROMISE to resolve the undefined
        return new Promise((resolve, rej)=>{
        fetch(url)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => rej(err))
        })
    }
    
    post(url, data){
        return new Promise((resolve, rej)=>{
        fetch(url, {
            method : 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => rej(err))
        })

    }

    put(url, data){
        return new Promise((resolve,rej)=>{
            fetch(url,{
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => rej(err))
        })
    }

    delete(url){
        return new Promise((resolve,rej)=>{
            fetch(url,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => rej(err))
        })

    }
}

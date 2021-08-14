const h1 = document.getElementById('h1')
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'api.txt' , true)

    xhr.onload= function(){

        console.log('onload')

        if(this.status === 200){
            console.log(this.response)
            h1.innerHTML = this.responseText
        }
    }

    xhr.send()
})
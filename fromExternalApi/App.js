const form = document.getElementById('form')
const para = document.getElementById('quote')
const input = document.getElementById('input')

let inputVal
input.addEventListener('input',function(e){
    inputVal = e.target.value
    console.log(inputVal)
})

form.addEventListener('submit', function(e){
    
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    
    xhr.open('GET', `https://goquotes-api.herokuapp.com/api/v1/random?count=${inputVal}` ,true)
    
    let text=""
    xhr.onload = function(){
        if(this.status === 200){
            
            text = JSON.parse(this.responseText);
            let output = ""

            text.quotes.forEach(function(val){
                console.log(val.text)
                output +=`
                <blockquote>
                ${val.text}
                </blockquote>
                `
            })
            para.innerHTML = output
        }

    }
    xhr.send()
})
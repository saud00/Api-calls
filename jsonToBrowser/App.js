const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const customer = document.getElementById('single')
const customers = document.getElementById('loop')

btn1.addEventListener('click',apiCall)
function apiCall(){
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customer.json', true)

    xhr.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText)
            console.log(data)
            customer.innerHTML =  `<ul>
            <li>${data.id}</li>
            <li>${data.name}</li>
            <li>${data.email}</li>
            <li>${data.company}</li>
            </ul>`
        }
    }
    xhr.send()
}



btn2.addEventListener('click',api2Call)
function api2Call(){
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customers.json', true)

    xhr.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText)
            let display =''
            data.forEach(function(val){
                display +=`
                <ul>
                <li>${val.id}</li>
                <li>${val.name}</li>
                <li>${val.email}</li>
                <li>${val.company}</li>
                </ul>`
            })
            console.log(display)
            customers.innerHTML = display
        }
    }
    xhr.send()
}
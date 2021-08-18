document.getElementById('btn1').addEventListener('click', fromTxt)
document.getElementById('btn2').addEventListener('click',fromJSON)
document.getElementById('btn3').addEventListener('click', fromExternal)

 function fromTxt=()=>{
    fetch('text.txt')
    .then((res)=>{
        return res.text()
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

function fromJSON(){
    fetch('text.json')
    .then(res => res.json())
    .then(function(res){
        console.log(res)
        res.forEach(val => console.log(val.name))
    })
    .catch(err => console.log(err))
}

function fromExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return (res.json())
    })
    .then(function(res){
        console.log(res)
        
        res.forEach(function(val){
            console.log(val.login)})
    })
    .catch(function(err){
        console.log(err)
    })
}

document.getElementById('btn1').addEventListener('click', fromTxt)
document.getElementById('btn2').addEventListener('click',fromJSON)
//document.getElementById('btn3').addEventListener('click', fromExternal)

function fromTxt(){
    fetch('text.txt')
    .then(function(res){
        return (res.text())
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}

function fromJSON(){
    fetch('text.json')
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}
/*
function fromExternal(){
    fetch('text.txt')
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}
*/
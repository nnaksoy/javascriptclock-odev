let name=prompt("Adınız nedir?")
let info =document.querySelector("#myName")
info.innerHTML=`${name}`
let date= new Date().toLocaleString('tr-TR');
let dateInfo=document.querySelector("#myClock")
dateInfo.innerHTML=`${date}`

 
console.log((date))

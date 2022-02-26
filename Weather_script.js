var button = document.getElementById("submit")
var inputValue = document.getElementById("inputValue")
var name = document.getElementById("name")
var desc = document.getElementById("desc")
var temp = document.getElementById("temp")

       button.addEventListener('click' , function(){

       fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${inputValue.value} &appid=4641804f942be648309f9d7f69aa4767`)
       .then((response)=>{
           return response.json()
       }).then((data)=>{
           console.log(data)
           var nameValue = data['name']
           var tempValue = data['main']['temp']
           var description = data['weather'][0]['description']
           name.innerHTML = nameValue;
           desc.innerHTML = description;
           temp.innerHTML = `${tempValue}`;
       })
       .catch((error)=>{
           alert("wrong city name")
       })
   })














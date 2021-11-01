var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputvalue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=307cf47ec96a030a1c1b0d927cf3fc1e')
    .then(response => response.json())
    .then(data => {
        
        var namevalue = data['name'];
        var descvalue = data['weather'][0]['description'];
        var tempvalue = data['main']['temp']

        name.innerHTML = namevalue;
        temp.innerHTML = tempvalue;
        desc.innerHTML = descvalue;
    })

    .catch(err => atert('wrong  city name'))
})










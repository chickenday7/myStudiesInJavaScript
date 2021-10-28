fetch('http://api.openweathermap.org/data/2.5/weather?id=536203&appid=70e1ed322b02acbc57d443dd91065f3e&lang=ru')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = `${Math.round(data.main.temp - 273)}&deg;`;
        document.querySelector('.disclaimer').textContent =`${data.weather[0].description}`
        document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>`
    })
    .catch(function () {
    });


    // https://openweathermap.org/img/wn/04n@2x.png пример
    // https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
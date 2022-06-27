// 1).  Solving problems using array functions on rest countries data.


// (a).Get all the countries from Asia continent / region using Filter function


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response)
    for (let i of data.filter(Asiacountries => Asiacountries.region == "Asia")) {
      let user = i
      console.log(user.name)
    }
  }
}
xhr.send();



// (b).Get all the countries with a population of less than 2 lakhs using Filter function


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response)
    for (let i of data.filter(countries => countries.population < 200000)) {
      let user = i
      console.log(user.name)
    }
  }
}
xhr.send();



// (c).Print the following details name, capital, flag using forEach function


// (1).  Name of the country

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response)
    data.forEach(element => {
      console.log(element.name)

    });
  }
}
xhr.send();




// (2).capital of the country

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response)
    data.forEach(element => {
      console.log(element.capital)

    });
  }
}
xhr.send();



// (3).flag of the country


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response)
    data.forEach(element => {
      console.log(element.flag)

    });
  }
}
xhr.send();






// (d).Print the total population of countries using reduce function


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response)
    let totalpop = data.reduce((acc, cur) => {
      return acc + cur.population
    }, 0)
    console.log(totalpop)
  }
}
xhr.send();




// (e).Print the country which uses US Dollars as currency.


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response)
    for (let i of data) {
      let user = i
      for (let i = 0; i < user.currencies.length; i++) {
        if (user.currencies[i].code == 'USD') {
          console.log(user.name)
        }
      }
    }
  }
}
xhr.send();



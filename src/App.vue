// ATMOS 1.0 — parth sharma, 18-7-20
// this entire project follows the Vue.js project structure

<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 20 ? 'warm' : ''">
    <main>

      <!-- <div class="header">
        <div class="container"><h1>Atmos 🌦</h1></div>
      </div> -->

      <!-- div containing the search box and sending query -->
      <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
          />
      </div>

      <!-- only displays weather box if entered location is defined -->
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">

        <div class="location-box">
          <!-- fetches location, country, and shows date -->
          <div class="location"> {{weather.name}}, {{weather.sys.country}}</div>
          <div class="date">{{dateBuilder()}}</div>
        </div>

        <div class="weather-box">
          <!-- shows the int value of temperature and the weather type -->
          <div class="temp">{{Math.round(weather.main.temp)}}° C</div>
          <div class="weather">{{weather.weather[0].main }}</div>
        </div>

      </div>

      <!-- <div class="footer">
        <div class="container">Made with ❤ by Parth Sharma, 2020 </div>
      </div> -->

    </main>
  </div>
</template>

<script>
export default {
  name: 'App',

  // data method
  data () {

    return {

      // used from openweathermap.org 
      api_key: '39baf1397c2e0a511fc699715cb417b6',
      url_base: 'https://api.openweathermap.org/data/2.5/',

      // returns a query
      query: '',
      weather: {}
    }
  },

  methods: {

    // fetch weather method
    fetchWeather (e) {

      // method only called if enter key is pressed
      if (e.key == "Enter") {

        // query sent to API to return val in json file
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    // results are set
    setResults (results) {
      this.weather = results;
    },
    // date builder function to diplay string format of date
    dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} — ${date} ${month}, ${year}`;
    }
  }
}
</script>

<style>

  /* CSS stylesheet for the markup */
  
  *{
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
  }

  #app {
    background-image: url('./assets/cold-bg.jpg');
    background-size: cover;
    background-position: top;
    transition: 0.4s;
  }

  #app.warm {
    background-image: url('./assets/warm-bg.jpg');
  }

  main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
  }

  .header .footer {
    align-items: center;
    display: block;
    width: 100%;
    position: fixed;        
    /* background: #333; */
    padding: 10px 0;
    color: #fff;
  }

  .header {
    top:0;
  }

  .footer {
    bottom:0;
  }

.container {
  align-items: center;
  /* text-c: #FFF; */
}

  .search-box {
        width: 75%;
        align-items: center;
        margin: 50px;
    }

  @media (min-width: 900px) {
    .search-box {
      width: 90%;
      align-items: center;
      margin: 50px;
    }
  }

 

  .search-box .search-bar {
    display: block;
    align-content: center;
    width: 100%;
    padding: 15px;

    color: #313131;
    font-size: 20px;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 12px 12px 12px 12px;

  }

  /* 
    /* weird transition thing that seemed cool at the time

  .search-box .search-bar:focus{
    box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
    background-color: rgba(255,255,255,0.75);
    border-radius: 16px 0px 16px 0px;
  } */

  .location-box .location {
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px 3px rgba(0,0,0,0.25);
  }

  .location-box .date {
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    text-shadow: 1px 3px rgba(0,0,0,0.25);
    font-style: italic;
  }

  .weather-box {
    text-align: center;
  }

  .weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #FFF;
    font-size: 100px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(0,0,0,0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;

    box-shadow: 3px 6px rgba(0,0,0,0.25);
  }

  .weather-box .weather {
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    /* font-style: italic; */
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }

</style>

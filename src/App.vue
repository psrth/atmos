<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
          />
      </div>

      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">

        <div class="location-box">
          <div class="location"> {{weather.name}}, {{weather.sys.country}}</div>
          <div class="date">Saturday — July 18, 2020</div>
        </div>

        <div class="weather-box">
          <div class="temp">9° C</div>
          <div class="weather">Rain</div>
        </div>

      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {

    return {
      api_key: '39baf1397c2e0a511fc699715cb417b6',
      url_base: 'https://api.openweathermap.org/data/2.5/',

      query: '',
      weather: {}
    }
  },

  methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      this.weather = results;
    }
  }
}
</script>

<style>

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


    main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
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

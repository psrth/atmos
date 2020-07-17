<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..."/>
        
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      api_key: '39baf1397c2e0a511fc699715cb417b6'
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
    width: 100%;
    margin: 50px;
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

    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 12px 12px 12px 12px;

  }
</style>

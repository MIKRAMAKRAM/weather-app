function Getweather() {

     let cityname = document.getElementById("temp1").value ;
     alert(cityname)
   // c create =post r read===get update===put delete ===delete


   axios.get(`https://api.weatherapi.com/v1/current.json?key=9d14d95f25f74129812125955241910&q=${cityname}&aqi=yes`)
  .then(function (response) {
    // handle success
    console.log(response);

    let weatherdata = response.data;
    console.log(weatherdata)
    console.log(weatherdata.current.temp_c)
    document.querySelector("#change").innerHTML=(` Current celsus temp in your city is ${weatherdata.current.temp_c}`)



  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })




}
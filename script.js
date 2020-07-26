$(document).ready(function(){
  var lat, lon;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      var api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
      // console.log(api)
      
      $.getJSON(api, (data)=>{
        var tempC=Math.round(data.main.temp); 
        var tempF= Math.round((9*tempC/5)+32);
        var tempClass = $('.temp');
     
        var mapsrc = `https://www.google.com/maps/@${lat},${lon},15z`;  
          $("#tempC").html(tempC+"&deg");
          $("#tempF").html(tempF + "&deg");
          $("#icon").html(data.weather[0].description);
          $("#icon-image").attr('src', data.weather[0].icon);
          $("#city").html('Area: '+data.name); 
          $("#country").html('Country: '+ data.sys.country);   
          
        
         $('.temp').on('click', ()=>{
           if(tempClass.val()=="C"){
             tempClass.val("F"); 
             $("#tempC").addClass("hide");
             $("#tempF").removeClass("hide");
             } else {
              tempClass.val("C");
              $("#tempC").removeClass("hide");
              $("#tempF").addClass("hide");      
            }         
           
         });
      })
    })
  }
});

  function timeDisplay(){
      setInterval(function(){
     var date = new Date();
     $('#date').html(date.getFullYear()+' - '+(date.getMonth()+1)+' - '+date.getDate());
        $('#time').html(date.toLocaleTimeString());
        },1000);
    }
    timeDisplay(); // time call

$(document).ready(function(){
    $('#button').click(function(){
      var city = $('#city').val();
      $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&appid=3f33a8c2454f16ae309feb48ae9e5e08",
        type:"GET",
        dataType:"jsonp",
        success:function(data){
          console.log(data);
          var td=data.dt;
          const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          var date = new Date(td*1000);
          $(".day").html(weekday[date.getDay()])
          $(".time").html(date.getHours()+":"+date.getMinutes())
          $(".risetime").html((new Date(data.sys.sunrise*1000)).getHours()+":"+(new Date(data.sys.sunrise*1000)).getMinutes())
          $(".settime").html((new Date(data.sys.sunset*1000)).getHours()+":"+(new Date(data.sys.sunset*1000)).getMinutes())
          $(".pinn").html(data.name)
          $(".pin").html(data.name)
          $(".degreecelcius").html(data.main.temp)
          $(".base").html(data.main.temp_min)
         
          $(".windspeedd").html(data.wind.speed)
          $(".rainy").html(data.weather[0].description)
          $(".mostly").html(data.weather[0].main)
          $(".windspeed").html(data.main.humidity)
          $(".windspeed1").html(data.visibility)
  
        }
  
  
      });
    });
  });
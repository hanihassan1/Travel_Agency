/*---------------------------------------------------------hotel search*/

var searchHotel = new XMLHttpRequest();
var myResponse;
var link;



searchHotel.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myResponse = JSON.parse(this.responseText);
        console.log(myResponse);
        var hotel_design = $("#hotel_row").html();
        $("#hotel_row").html("");
        for (var i = 0; i<4; i++){
        var updated_hotel_design = hotel_design.replace("Marriott Downtown at CF Toronto Eaton Centre", myResponse.results[i].name);
        updated_hotel_design = updated_hotel_design.replace("525 Bay Street, Toronto",myResponse.results[i].vicinity);
        updated_hotel_design = updated_hotel_design.replace("4.5",myResponse.results[i].rating);
        updated_hotel_design = updated_hotel_design.replace("1,956",myResponse.results[i].user_ratings_total);
        if (myResponse.results[i].opening_hours.open_now == true){
            updated_hotel_design = updated_hotel_design.replace("Open Now","Open Now");
        }
        else{
            updated_hotel_design = updated_hotel_design.replace("Open Now","Closed Now");
        }
        updated_hotel_design = updated_hotel_design.replace("assets/images/hilton1.jpg","assets/images/niagrafalls.jpg");
        
        $("#hotel_row").append(updated_hotel_design);
      
        }
    }
    }
    


$(".submitButtonHotel").on("click", function(){
    link = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.6532,-79.3832&radius=2000&type=lodging&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4";
     searchHotel.open("GET", link);
     searchHotel.send();
});




/*--------------------------------------------------------car search*/


var searchCar = new XMLHttpRequest();
var myResponse;
var link; 
searchCar.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myResponse = JSON.parse(this.responseText);
        console.log(myResponse);
        var car_design = $("#cars_row").html();
        $("#cars_row").html("");
        for (var i = 0; i<4; i++){
        var updated_car_design = car_design.replace("Enterprise Rent-A-Car", myResponse.results[i].name);
        updated_car_design = updated_car_design.replace("200 Front Street West, Toronto",myResponse.results[i].vicinity);
        updated_car_design = updated_car_design.replace("4.2",myResponse.results[i].rating);
        updated_car_design = updated_car_design.replace("156",myResponse.results[i].user_ratings_total);
        if (myResponse.results[i].opening_hours.open_now == true){
            updated_car_design = updated_car_design.replace("Open Now","Open Now");
        }
        else{
            updated_car_design = updated_car_design.replace("Open Now","Closed Now");
        }
        updated_car_design = updated_car_design.replace("assets/images/cars.jpg","assets/images/cars.jpg");
        
        $("#cars_row").append(updated_car_design);
      
        }
    }
    }
    


$(".submitButtonCars").on("click", function(){
    link = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.6532,-79.3832&radius=2000&type=car_rental&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4";
     searchCar.open("GET", link);
     searchCar.send();
});

/*--------------------------------------------------------restaurant search*/
var searchFood = new XMLHttpRequest();
var myResponse;
var link;

searchFood.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myResponse = JSON.parse(this.responseText);
        console.log(myResponse);
        var food_design = $("#food_row").html();
        $("#food_row").html("");
        for (var i = 0; i<4; i++){
        var updated_food_design = food_design.replace("Enterprise Rent-A-Car", myResponse.results[i].name);
        updated_food_design  = updated_food_design.replace("200 Front Street West, Toronto",myResponse.results[i].vicinity);
        updated_food_design  = updated_food_design.replace("4.2",myResponse.results[i].rating);
        updated_food_design = updated_food_design.replace("156",myResponse.results[i].user_ratings_total);
        if (myResponse.results[i].opening_hours.open_now == true){
           updated_food_design  = updated_food_design.replace("Open Now","Open Now");
        }
        else{
            updated_food_design  = updated_food_design .replace("Open Now","Closed Now");
        }
       updated_food_design  = updated_food_design .replace("assets/images/cars.jpg","assets/images/cars.jpg");
        
        $("#food_row").append(updated_food_design );
      
        }
    }
    }
    


$(".submitButtonFood").on("click", function(){
    link = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.6532,-79.3832&radius=2000&type=car_rental&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4";
     searchFood.open("GET", link);
     searchFood.send();
});

/*--------------------------------------------------------scroll up*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
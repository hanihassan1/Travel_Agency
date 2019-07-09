/*---------------------------------------------------------hotel search*/

var searchHotel = new XMLHttpRequest();
var myResponse;
var myCoordinates;
var link;



searchHotel.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myResponse = JSON.parse(this.responseText);
        var hotel_design = '<div class="col-md-5 div-colr-ratings"><h3 class="hotelName-title">Marriott Downtown at CF Toronto Eaton Centre</h3> <img src="assets/images/hotelroom3.jpg" class="hotel-img-edit zoom-in" alt=""><div class="ratingStarMarriot"> Rating: 4.5<p>Based on 1,956 guest reviews</p></div> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span><div class="openClosed"> Open Now</div><div class="rest-location">525 Bay Street, Toronto</div></div>';
        $("#hotel_row").html("");
        for (var i = 0; i<4; i++){
        var updated_hotel_design = hotel_design.replace("Marriott Downtown at CF Toronto Eaton Centre", myResponse.results[i].name);
        updated_hotel_design = updated_hotel_design.replace("525 Bay Street, Toronto",myResponse.results[i].vicinity);
        updated_hotel_design = updated_hotel_design.replace("4.5",myResponse.results[i].rating);
        updated_hotel_design = updated_hotel_design.replace("1,956",myResponse.results[i].user_ratings_total);
        updated_hotel_design = updated_hotel_design.replace("assets/images/hotelroom3.jpg", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&photoreference="+myResponse.results[i].photos[0].photo_reference+"&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4")
        if(myResponse.results[i].hasOwnProperty('opening_hours')){
        if (myResponse.results[i].opening_hours.open_now == true){
            updated_hotel_design = updated_hotel_design.replace("Open Now","Open Now");
        }
        else{
            updated_hotel_design = updated_hotel_design.replace("Open Now","Closed Now");
        }
        }
        else{
            updated_hotel_design = updated_hotel_design.replace("Open Now","Open Now");
        }
        updated_hotel_design = updated_hotel_design.replace("assets/images/hilton1.jpg","assets/images/niagrafalls.jpg");
        
        $("#hotel_row").append(updated_hotel_design);
      
        }
    }
    }
    


$(".submitButtonHotel").on("click", function(){
    findCoordinates($("#hotelSearchId").val());
    var cordString = localStorage.getItem("lat") + "," + localStorage.getItem("lng");
    link = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + cordString + "&radius=2000&type=lodging&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4";
     console.log(link);
     searchHotel.open("GET", link);
     searchHotel.send();
});




/*--------------------------------------------------------car search*/


var searchCar = new XMLHttpRequest();
var serach_coordinates = new XMLHttpRequest();
var myResponse;
var link; 

searchCar.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myResponse = JSON.parse(this.responseText);
        console.log(myResponse);
        var car_design = '<div class="col-md-5 div-colrCar-ratings"><h3 class="CarsName-title">Discount Car & Truck Rentals</h3> <img src="assets/images/cars.jpg" class="Cars-img-edit zoom-in" alt=""><div class="ratingStarCars"> Rating: 4.2<p>Based on 156 guest reviews</p></div> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span><div class="openClosed"> Open Now</div><div class="rest-location">200 Front Street West, Toronto</div></div>';
        $("#cars_row").html("");
        for (var i = 0; i<4; i++){
        var updated_car_design = car_design.replace("Enterprise Rent-A-Car", myResponse.results[i].name);
        updated_car_design = updated_car_design.replace("200 Front Street West, Toronto",myResponse.results[i].vicinity);
        updated_car_design = updated_car_design.replace("4.2",myResponse.results[i].rating);
        updated_car_design = updated_car_design.replace("156",myResponse.results[i].user_ratings_total);
        updated_car_design = updated_car_design.replace("assets/images/cars.jpg", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&photoreference="+myResponse.results[i].photos[0].photo_reference+"&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4")
         if(myResponse.results[i].hasOwnProperty('opening_hours')){
        if (myResponse.results[i].opening_hours.open_now == true){
            updated_car_design = updated_car_design.replace("Open Now","Open Now");
        }
        else{
            updated_car_design = updated_car_design.replace("Open Now","Closed Now");
        }
         }
        updated_car_design = updated_car_design.replace("assets/images/cars.jpg","assets/images/cars.jpg");
        
        $("#cars_row").append(updated_car_design);
      
        }
    }
    }

    


$(".submitButtonCars").on("click", function(){
    findCoordinates($("#carSearchId").val());
    var cordString = localStorage.getItem("lat") + "," + localStorage.getItem("lng");
    link = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + cordString + "&radius=2000&type=lodging&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4";
     console.log(link);

   
     searchCar.open("GET", link);
     searchCar.send();
});

/*--------------------------------------------------------restaurant search*/
var searchFood = new XMLHttpRequest();
var myResponse;
var myCoordinates;
var link;

searchFood.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myResponse = JSON.parse(this.responseText);
        console.log(myResponse);
        var food_design ='<div class="col-md-5 div-colrfood-ratings"><h3 class="foodName-title">B.GOOD</h3> <img src="assets/images/rest1.jpg" class="food-img-edit zoom-in" alt=""><div class="ratingStarFood"> Rating: 4.1<p>Based on 239 guest reviews</p></div><div class="pricePointCars"> price_level: 2</div> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span><div class="openClosed"> Open Now</div><div class="rest-location">100 Front St E, Toronto</div></div>';
        $("#food_row").html("");
        for (var i = 0; i<4; i++){
        var updated_food_design = food_design.replace("B.GOOD", myResponse.results[i].name);
        updated_food_design  = updated_food_design.replace("100 Front St E, Toronto",myResponse.results[i].vicinity);
        updated_food_design  = updated_food_design.replace("4.1",myResponse.results[i].rating);
        updated_food_design = updated_food_design.replace("239",myResponse.results[i].user_ratings_total);
        updated_food_design = updated_food_design.replace("2",myResponse.results[i].price_level);
        updated_food_design = updated_food_design.replace("assets/images/rest1.jpg", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&photoreference="+myResponse.results[i].photos[0].photo_reference+"&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4")
        if(myResponse.results[i].hasOwnProperty('opening_hours')){
        if (myResponse.results[i].opening_hours.open_now == true){
         updated_food_design  = updated_food_design.replace("Open Now","Open Now");
        }
        else{
            updated_food_design  = updated_food_design .replace("Open Now","Closed Now");
        }
        }
         else{
            updated_food_design = updated_food_design.replace("Open Now","Open Now");
        }

       updated_food_design  = updated_food_design .replace("assets/images/cars.jpg","assets/images/cars.jpg");
        
        $("#food_row").append(updated_food_design );
      
        }
    }
    }
    


$(".submitButtonFood").on("click", function(){
    findCoordinates($("#foodSearchId").val());
    var cordString = localStorage.getItem("lat") + "," + localStorage.getItem("lng");
    link = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + cordString + "&radius=2000&type=lodging&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4";
     console.log(link);

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

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*--------------------------------------------------------autocomplete*/
function initAutoComplete(){
   var input = document.getElementById('hotelSearchId');
var input2 = document.getElementById('carSearchId');
var input3 = document.getElementById('foodSearchId');
var options = {
  types: ['(cities)']
};

autocomplete = new google.maps.places.Autocomplete(input, options);
autocomplete = new google.maps.places.Autocomplete(input2, options);
autocomplete = new google.maps.places.Autocomplete(input3, options); 
}


function findCoordinates(place){
    link = "https://maps.googleapis.com/maps/api/geocode/json?address="+ place +"&key=AIzaSyAZRg3EcBLszWyNFzZtdQv17ji0HNGFdy4";
     serach_coordinates.open("GET", link);
     serach_coordinates.send();
     
    serach_coordinates.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myCoordinates = JSON.parse(this.responseText);
        console.log(myCoordinates.results[0].geometry.location);
        localStorage.setItem("lat", myCoordinates.results[0].geometry.location.lat);
        localStorage.setItem("lng", myCoordinates.results[0].geometry.location.lng);
    }
    }
    
    return true;
}



let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});



/*--------------------------------------------------------googlemap*/

 var map;
      function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:  43.659860, lng: -79.486180},
          zoom: 15
        });
      }
      
    function initialize() {
   initMap();
   initAutoComplete();
}
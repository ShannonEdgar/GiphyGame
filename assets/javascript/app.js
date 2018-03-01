    var movies = ["Black Panther", "Good Fellas", "The Godfather", "The Shawshank Redemption", "Citizen Kane", "Gone with the Wind", "Casablanca", "Forrest Gump", "Titanic", "Star Wars", "Love Actually"];

    // Function for displaying movie data
    function renderButtons() {

      $("#movie-view").empty();

      // Looping through the array of movies
      for (var i = 0; i < movies.length; i++) {
        var a = $("<button>");
        a.addClass("movie");
        a.attr("dataName", movies[i]);
        a.text(movies[i]);
        $("#movie-view").append(a);
      }
    }


// Makes new button from input box
$("#add-movie").on("click", function(event) {
  event.preventDefault();
  var movie = $("#movie-input").val().trim();
  movies.push(movie);

  // calling renderButtons which handles the processing of our movie array
  callAjax();
  renderButtons();
});


// buttons call ajax
$(document).on("click", ".movie", callButtonAjax);

function callButtonAjax(){
  var data = $(this).attr("dataName");
  q = data // search query
  
  request = new XMLHttpRequest;
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
  
  request.onload = function() {
   
      data = JSON.parse(request.responseText).data.image_url;

      $("#gif-view").append('<img src = "'+data+'"  title="GIF via Giphy">');
      console.log(request.responseText);
  };

  request.send();
};



// Calls ajax and returns gif to page
function callAjax(){
  movie = $("#movie-input").val().trim();
  q = movie // search query
  
  request = new XMLHttpRequest;
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=limit10'+q, true);

  
  request.onload = function() {
      data = JSON.parse(request.responseText).data.image_url;

      $("#gif-view").append('<img src = "'+data+'"  title="GIF via Giphy" class="img">');
      console.log(request.responseText);  
  };

  request.send();
};

renderButtons();



// Thats as far as I could get! Just ran out of time this week. 
// Here is my sudo code for what still needs to happen.

      // Right now the game only calls one gif. To set to 10 I would use the 
      // "limit" code in the key. Then I need to set the gifs to still and animate
      // them using the code below after grabbing there animation states from
      // the API response

      // This grabs the data state from the gif and sets it to still
      // When a user clicks it animates the gif
      // when a user clicks again it sets it back to still
      $("#img").on("click", function() {
      var state = $(this).attr("data-state");

      // if (state === "still") {
      //   $(this).attr("src", $(this).attr("data-animate"));
      //   $(this).attr("data-state", "animate");
      // } else {
      //   $(this).attr("src", $(this).attr("data-still"));
      //   $(this).attr("data-state", "still");
      });


  



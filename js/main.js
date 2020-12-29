var posts = [];
var myRequest = new XMLHttpRequest();
myRequest.open(
  "GET",
  "https://api.themoviedb.org/3/trending/movie/day?api_key=13261900e23432183fa92f71503de473"
);
myRequest.send();

myRequest.addEventListener("readystatechange", function () {
  if (myRequest.readyState == 4 && myRequest.status == 200) {
    posts = JSON.parse(myRequest.response).results;
    displayPosts();
  }
});

function displayPosts() {
  var container = "";
  for (var i = 0; i < posts.length; i++) {
    container += ` 
     <div class="col-md-4">
     <div class="post">
            <h3 class="text-bold">${posts[i].vote_average}</h3>
            <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
           <h4 class="text-center">${posts[i].title}</h4>
        
     </div>
 </div>`;
  }
  document.getElementById("myRow").innerHTML = container;
}

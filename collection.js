// Offer Bar
let offerbar = document.querySelector(".offer-bar")
let closebutton = document.getElementById("close")
closebutton.addEventListener("click",function(){
       offerbar.style.display="none"
})

// Prodcut search functionality
var collectioncontainer = document.getElementById("collection-container");
var search = document.getElementById("searchbox");
var collectionlist = collectioncontainer.querySelectorAll("div");
search.addEventListener("keyup", function () {
  var enteredvalue = event.target.value.toUpperCase();
  {
    for (count = 0; count <collectionlist.length; count = count + 1) {
      var collectionname = collectionlist[count].querySelector("h1").textContent;
      if (collectionname.toUpperCase().indexOf(enteredvalue) < 0) {
        collectionlist[count].style.display = "none";
      } else {
        collectionlist[count].style.display = "block";
      }
    }
  }
});

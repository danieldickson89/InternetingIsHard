$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        var extraOffset = 0;
        if (hash !== "#top") {
          extraOffset += 150
        } else {
          extraOffset = 5000
        }
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          
          scrollTop: $(hash).offset().top - extraOffset
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash - extraOffset;
        });
      } // End if
    });
  });

  function contactMe() {
    alert("You should totally talk to this guy!");
  }

  function workAtUVU() {
    alert("Working at UVU is the BEST!");
  }
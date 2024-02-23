

$(document).ready(function() {
    // Automatically open the lightbox when a movie image is clicked
    $('.work-item').click(function() {
        var imgSrc = $(this).find('.lightbox-img').attr('src');
        $('.lightbox-img').attr('src', imgSrc);
        $('.lightbox').fadeIn();
    });

    // Close the lightbox when the close button is clicked
    $('.lightbox-close').click(function() {
        $('.lightbox').fadeOut();
    });

    // Close the lightbox when clicking outside of the image
    $(document).mouseup(function(e) {
        var container = $(".img-box");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.lightbox').fadeOut();
        }
    });
});

$(document).ready(function() {
    // Add a click event handler to the "Send Message" button
    $('#button').click(function() {
        // Display a pop-up message
        alert('Your message has been sent! We will get back to you soon.');
    });
});


   // jQuery ready function
   $(document).ready(function() {
    // Add a click event handler to the toggle button
    $('.toggle-btn').click(function() {
        // Toggle the visibility of the social links
        $('.social-links').toggle();
    });
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


$(document).ready(function(){
    var currentIndex = 0;
    var images = [
        "C:\\Users\\minea\\Desktop\\Movie\\Doctor Strange.jpg",
        "C:\\Users\\minea\\Desktop\\Movie\\Captain Marvel.jpg",
        "C:\\Users\\minea\\Desktop\\Movie\\Aquaman.jpg",
        "C:\\Users\\minea\\Desktop\\Movie\\X-Men.jpg",
        "C:\\Users\\minea\\Desktop\\Movie\\Guardians Of the Galaxy.jpg",
        "C:\\Users\\minea\\Desktop\\Movie\\The Dark Knight.jpg"
    ];

    function showImage(index) {
        $('#slideshow').attr('src', images[index]);
    }

    // Show the first image when the page loads
    showImage(currentIndex);

    // Set up click handlers for next and previous buttons
    $('#nextBtn').click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    $('#prevBtn').click(function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
});
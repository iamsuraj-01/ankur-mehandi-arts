(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    /* Modal For Youtube Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    */

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            // This is not required if you're using a local video file, as there's no dynamic URL to load for YouTube.
            $videoSrc = "img/video.mp4"; // Path to your local video
            console.log('Video source set to:', $videoSrc);
        });

        $('#videoModal').on('shown.bs.modal', function (e) {
            // Set the source of the local video
            $("#video").attr('src', $videoSrc);
            // Optional: If you want the video to autoplay, use the 'autoplay' attribute on the <video> tag
            $("#video")[0].play();
        });

        $('#videoModal').on('hide.bs.modal', function (e) {
            // Pause the video when the modal is hidden (optional, depending on behavior you want)
            $("#video")[0].pause();
            $("#video")[0].currentTime = 0; // Reset video to the beginning
        });
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    // Whatsapp Button
    document.addEventListener("DOMContentLoaded", function() {
        var whatsappLink = document.getElementById("whatsapp-link");
        var phoneNumber = "919897036202"; // Your WhatsApp number
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile devices
            whatsappLink.href = "https://wa.me/" + phoneNumber;
        } else {
            // Desktop devices
            whatsappLink.href = "https://web.whatsapp.com/send?phone=" + phoneNumber;
        }
    });

    // Book Us Form Submission
    $(document).ready(function () {
        $("#bookUsForm").on("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const name = $("#name").val();
            const phone = $("#phone").val();
            const email = $("#email").val();
            const city = $("#city option:selected").text();
            const design = $("#design option:selected").text();
            const bookingDate = $("#bookingDate").val();

            // Create the WhatsApp message
            const messageLines = [
                "Hello, I want to book a service.",
                `Name: ${name}`,
                `Phone: ${phone}`,
                `Email: ${email}`,
                `City: ${city}`,
                `Design: ${design}`,
                `Booking Date: ${bookingDate}`
            ];
            const message = messageLines.filter(Boolean).join('\n'); // Remove empty lines

            // Detect if the user is on mobile or desktop
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const whatsappNumber = "919897036202"; // Replace with your WhatsApp number
            const whatsappUrl = isMobile
                ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` // Mobile link
                : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`; // WhatsApp Web link

            // Open WhatsApp link
            window.open(whatsappUrl, '_blank');

            // Show Thank You Modal
            $("#thankYouModal").modal('show');
        });
    });

    // from package section book now connection with book now form section functionaliy
    document.addEventListener('DOMContentLoaded', () => {
        // Attach event listeners to all "Book Now" buttons
        const bookNowButtons = document.querySelectorAll('.book-now-btn');
    
        bookNowButtons.forEach(button => {
            button.addEventListener('click', () => {
                const packageName = button.getAttribute('data-package');
                const formSelect = document.getElementById('design');
    
                // Set the selected value in the dropdown
                for (let option of formSelect.options) {
                    if (option.textContent.trim() === packageName) {
                        formSelect.value = option.value;
                        break;
                    }
                }
    
                // Scroll to the form section
                formSelect.scrollIntoView({ behavior: 'smooth' });
            });
        });
    });
    
})(jQuery);


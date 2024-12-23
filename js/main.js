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


    // Modal Video
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

    // Book Us Form Submission
    $(document).ready(function () {
        $("#bookUsForm").on("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const name = $("#name").val();
            const phone = $("#phone").val();
            const email = $("#email").val();
            const city = $("#city option:selected").text();
            const serviceType = $("#serviceType option:selected").text();
            const design = $("#design option:selected").text();
            const bookingDate = $("#bookingDate").val();

            // Create the WhatsApp message
            const messageLines = [
                "Hello, I want to book a service.",
                `Name: ${name}`,
                `Phone: ${phone}`,
                `Email: ${email}`,
                `City: ${city}`,
                `Service Type: ${serviceType}`,
                design !== "Select Design" ? `Design: ${design}` : "", // Include design only if selected
                `Booking Date: ${bookingDate}`
            ];
            const message = messageLines.filter(Boolean).join('\n'); // Remove empty lines

            // Detect if the user is on mobile or desktop
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const whatsappNumber = "919876543210"; // Replace with your WhatsApp number
            const whatsappUrl = isMobile
                ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` // Mobile link
                : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`; // WhatsApp Web link

            // Open WhatsApp link
            window.open(whatsappUrl, '_blank');

            // Show Thank You Modal
            $("#thankYouModal").modal('show');
        });
    });


})(jQuery);


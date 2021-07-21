$(document).ready(function () {


    let $btns = $('.project-area .button-group li');


    $btns.click(function (e) {

        $('.project-area .button-group li').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .row').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .row .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

   
    // sticky navigation menu

   

});
function copyFunction() {
    var copyText = "snehaktl2000@gmail.com";
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    
  }
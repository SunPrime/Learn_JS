jQuery(document).ready(function($) {

    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabs li:first').addClass('active');

    $('.tabs li').click(function (event) {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var selectTab = $(this).find('a').attr('href');
        $(selectTab).fadeIn();
    });
});

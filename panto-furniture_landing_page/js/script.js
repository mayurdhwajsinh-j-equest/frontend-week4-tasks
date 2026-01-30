$('.selling-product__items li:first-child').addClass('active');
$('.product-group').hide();
$('.product-group:first').show();

$('.selling-product__items li').click(function (e) {
    e.preventDefault();

    $('.selling-product__items li').removeClass('active');
    $(this).addClass('active');

    $('.product-group').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
});

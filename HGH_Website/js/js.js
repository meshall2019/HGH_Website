




$(".navbar-toggler").click(function(){


$(".section_table").toggle()
$(".section_table").css(" width: 100%;")
$(".each_setcion").hide()


})
$('#list-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

new WOW().init();
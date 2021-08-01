
// for the Sections page
$(".navbar-toggler").click(function(){


$(".section_table").toggle()
$(".section_table").css(" width: 100%;")
$(".each_setcion").hide()


})
$('#list-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
// End of the section page

// for the about page
$("#info").click(function(){

$(".addContents h4").text(":مستشفى حائل العام")
$(".addContents .row h6").text("مستشفى حكومي يقدم خدمات صحية مجانية للمواطنين والسكان,افتتح المسشتفى عام ١٣٧٧ هجري خلال حكم الملك سعود بن عبدالعزيز,يقع المستشفى في منتصف مدينة حائل ويخدم حوالي ٦٠٠ مريض كل يوم")
$(".addContents").show()
$("#v").hide()

})

$("#message").click(function(){

  $(".addContents h4").text(":الرسالة")
  $(".addContents .row h6").text("تقديم خدمات صحية امنه وتحسين مستمر لعملائنا,ومنع الأذى والمخاطر من الوصول لهم")
  $(".addContents").show()
  $("#v").hide()
})

$("#vision").click(function(){

  $(".addContents h4").text(":الرؤية")
  $(".addContents .row h6").text("ان تكون خدماتنا الصحية الافضل في المملكة العربية السعودية")
  $(".addContents").show()
  $("#v").hide()
})

$("#value").click(function(){

 $(".addContents").hide()
 $("#v").show()

})
// End of the about page

// For the statisticsPage
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
// End of statisticsPage

// For NewsPage

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

$(".np .justify-content-center p").append(" "+date)

// End

// For SeeNews Page

/* for the sections (healthy - thecnical)*/

$('#list-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });


//for the contact page
$('#customRadio1').click(function(){

if($('#customRadio1').is(':checked')) {$("#label").text("الإقتراح:") }

})

$('#customRadio2').click(function(){

  if($('#customRadio2').is(':checked')){$("#label").text("الشكوى:") }
  
})

// for healthy section
$("#ENT").click(function(){
  $(".addContents").show()
  $("#A").hide()
  $("#B").hide()
  $("#C").hide()
  $("#D").hide()
  $("#E").hide()
  $("#F").hide()
  $("#G").hide()
  $("#H").hide()
  $("#I").hide()
  $("#J").hide()
  $("#K").hide()
  $("#L").hide()
  $("#M").hide()
  $("#N").hide()
  $("#O").hide()
  $("#P").hide()
  $("#S").hide()
  })

  $("#surgical").click(function(){
    $(".addContents").hide()
    $("#A").hide()
    $("#B").hide()
    $("#C").hide()
    $("#D").hide()
    $("#E").hide()
    $("#F").hide()
    $("#G").hide()
    $("#H").hide()
    $("#I").hide()
    $("#J").hide()
    $("#K").hide()
    $("#L").hide()
    $("#M").hide()
    $("#N").hide()
    $("#O").hide()
    $("#P").hide()
    $("#S").show()
    })

    $("#medical").click(function(){
      $(".addContents").hide()
      $("#A").show()
      $("#B").hide()
      $("#C").hide()
      $("#D").hide()
      $("#E").hide()
      $("#F").hide()
      $("#G").hide()
      $("#H").hide()
      $("#I").hide()
      $("#J").hide()
      $("#K").hide()
      $("#L").hide()
      $("#M").hide()
      $("#N").hide()
      $("#O").hide()
      $("#P").hide()
      $("#S").hide()
      })

      $("#medical").click(function(){
        $(".addContents").hide()
        $("#A").show()
        $("#B").hide()
        $("#C").hide()
        $("#D").hide()
        $("#E").hide()
        $("#F").hide()
        $("#G").hide()
        $("#H").hide()
        $("#I").hide()
        $("#J").hide()
        $("#K").hide()
        $("#L").hide()
        $("#M").hide()
        $("#N").hide()
        $("#O").hide()
        $("#P").hide()
        $("#S").hide()
        })

        $("#pediatric").click(function(){
          $(".addContents").hide()
          $("#A").hide()
          $("#B").show()
          $("#C").hide()
          $("#D").hide()
          $("#E").hide()
          $("#F").hide()
          $("#G").hide()
          $("#H").hide()
          $("#I").hide()
          $("#J").hide()
          $("#K").hide()
          $("#L").hide()
          $("#M").hide()
          $("#N").hide()
          $("#O").hide()
          $("#P").hide()
          $("#S").hide()
          })

          $("#OBGYN").click(function(){
            $(".addContents").hide()
            $("#A").hide()
            $("#B").hide()
            $("#C").show()
            $("#D").hide()
            $("#E").hide()
            $("#F").hide()
            $("#G").hide()
            $("#H").hide()
            $("#I").hide()
            $("#J").hide()
            $("#K").hide()
            $("#L").hide()
            $("#M").hide()
            $("#N").hide()
            $("#O").hide()
            $("#P").hide()
            $("#S").hide()
            })

            $("#ICU").click(function(){
              $(".addContents").hide()
              $("#A").hide()
              $("#B").hide()
              $("#C").hide()
              $("#D").show()
              $("#E").hide()
              $("#F").hide()
              $("#G").hide()
              $("#H").hide()
              $("#I").hide()
              $("#J").hide()
              $("#K").hide()
              $("#L").hide()
              $("#M").hide()
              $("#N").hide()
              $("#O").hide()
              $("#P").hide()
              $("#S").hide()
              })

              $("#ER").click(function(){
                $(".addContents").hide()
                $("#A").hide()
                $("#B").hide()
                $("#C").hide()
                $("#D").hide()
                $("#E").show()
                $("#F").hide()
                $("#G").hide()
                $("#H").hide()
                $("#I").hide()
                $("#J").hide()
                $("#K").hide()
                $("#L").hide()
                $("#M").hide()
                $("#N").hide()
                $("#O").hide()
                $("#P").hide()
                $("#S").hide()
                })

                $("#NICU").click(function(){
                  $(".addContents").hide()
                  $("#A").hide()
                  $("#B").hide()
                  $("#C").hide()
                  $("#D").hide()
                  $("#E").hide()
                  $("#F").show()
                  $("#G").hide()
                  $("#H").hide()
                  $("#I").hide()
                  $("#J").hide()
                  $("#K").hide()
                  $("#L").hide()
                  $("#M").hide()
                  $("#N").hide()
                  $("#O").hide()
                  $("#P").hide()
                  $("#S").hide()
                  })

                  $("#XRAY").click(function(){
                    $(".addContents").hide()
                    $("#A").hide()
                    $("#B").hide()
                    $("#C").hide()
                    $("#D").hide()
                    $("#E").hide()
                    $("#F").hide()
                    $("#G").show()
                    $("#H").hide()
                    $("#I").hide()
                    $("#J").hide()
                    $("#K").hide()
                    $("#L").hide()
                    $("#M").hide()
                    $("#N").hide()
                    $("#O").hide()
                    $("#P").hide()
                    $("#S").hide()
                    })
          
                    $("#LAB").click(function(){
                      $(".addContents").hide()
                      $("#A").hide()
                      $("#B").hide()
                      $("#C").hide()
                      $("#D").hide()
                      $("#E").hide()
                      $("#F").hide()
                      $("#G").hide()
                      $("#H").show()
                      $("#I").hide()
                      $("#J").hide()
                      $("#K").hide()
                      $("#L").hide()
                      $("#M").hide()
                      $("#N").hide()
                      $("#O").hide()
                      $("#P").hide()
                      $("#S").hide()
                      })

                      $("#pharmacy").click(function(){
                        $(".addContents").hide()
                        $("#A").hide()
                        $("#B").hide()
                        $("#C").hide()
                        $("#D").hide()
                        $("#E").hide()
                        $("#F").hide()
                        $("#G").hide()
                        $("#H").hide()
                        $("#I").show()
                        $("#J").hide()
                        $("#K").hide()
                        $("#L").hide()
                        $("#M").hide()
                        $("#N").hide()
                        $("#O").hide()
                        $("#P").hide()
                        $("#S").hide()
                        })

                        $("#physiotherapy").click(function(){
                          $(".addContents").hide()
                          $("#A").hide()
                          $("#B").hide()
                          $("#C").hide()
                          $("#D").hide()
                          $("#E").hide()
                          $("#F").hide()
                          $("#G").hide()
                          $("#H").hide()
                          $("#I").hide()
                          $("#J").show()
                          $("#K").hide()
                          $("#L").hide()
                          $("#M").hide()
                          $("#N").hide()
                          $("#O").hide()
                          $("#P").hide()
                          $("#S").hide()
                          })

                          $("#healthedu").click(function(){
                            $(".addContents").hide()
                            $("#A").hide()
                            $("#B").hide()
                            $("#C").hide()
                            $("#D").hide()
                            $("#E").hide()
                            $("#F").hide()
                            $("#G").hide()
                            $("#H").hide()
                            $("#I").hide()
                            $("#J").hide()
                            $("#K").show()
                            $("#L").hide()
                            $("#M").hide()
                            $("#N").hide()
                            $("#O").hide()
                            $("#P").hide()
                            $("#S").hide()
                            })

                            $("#generalneu").click(function(){
                              $(".addContents").hide()
                              $("#A").hide()
                              $("#B").hide()
                              $("#C").hide()
                              $("#D").hide()
                              $("#E").hide()
                              $("#F").hide()
                              $("#G").hide()
                              $("#H").hide()
                              $("#I").hide()
                              $("#J").hide()
                              $("#K").hide()
                              $("#L").show()
                              $("#M").hide()
                              $("#N").hide()
                              $("#O").hide()
                              $("#P").hide()
                              $("#S").hide()
                              })

                              $("#therapeuticneu").click(function(){
                                $(".addContents").hide()
                                $("#A").hide()
                                $("#B").hide()
                                $("#C").hide()
                                $("#D").hide()
                                $("#E").hide()
                                $("#F").hide()
                                $("#G").hide()
                                $("#H").hide()
                                $("#I").hide()
                                $("#J").hide()
                                $("#K").hide()
                                $("#L").hide()
                                $("#M").show()
                                $("#N").hide()
                                $("#O").hide()
                                $("#P").hide()
                                $("#S").hide()
                                })

                                $("#isolation").click(function(){
                                  $(".addContents").hide()
                                  $("#A").hide()
                                  $("#B").hide()
                                  $("#C").hide()
                                  $("#D").hide()
                                  $("#E").hide()
                                  $("#F").hide()
                                  $("#G").hide()
                                  $("#H").hide()
                                  $("#I").hide()
                                  $("#J").hide()
                                  $("#K").hide()
                                  $("#L").hide()
                                  $("#M").hide()
                                  $("#N").show()
                                  $("#O").hide()
                                  $("#P").hide()
                                  $("#S").hide()
                                  })

                                  $("#operations").click(function(){
                                    $(".addContents").hide()
                                    $("#A").hide()
                                    $("#B").hide()
                                    $("#C").hide()
                                    $("#D").hide()
                                    $("#E").hide()
                                    $("#F").hide()
                                    $("#G").hide()
                                    $("#H").hide()
                                    $("#I").hide()
                                    $("#J").hide()
                                    $("#K").hide()
                                    $("#L").hide()
                                    $("#M").hide()
                                    $("#N").hide()
                                    $("#O").show()
                                    $("#P").hide()
                                    $("#S").hide()
                                    })

                                      $("#outp").click(function(){
                                        $(".addContents").hide()
                                        $("#A").hide()
                                        $("#B").hide()
                                        $("#C").hide()
                                        $("#D").hide()
                                        $("#E").hide()
                                        $("#F").hide()
                                        $("#G").hide()
                                        $("#H").hide()
                                        $("#I").hide()
                                        $("#J").hide()
                                        $("#K").hide()
                                        $("#L").hide()
                                        $("#M").hide()
                                        $("#N").hide()
                                        $("#O").hide()
                                        $("#P").show()
                                        $("#S").hide()
                                        })

   // Technicalsections

   $("#QUAL").click(function(){
    $(".addContents").show()
    $("#Q").hide()
    $("#R").hide()
   })

   $("#messagee").click(function(){
    $(".addContents").hide()
    $("#Q").show()
    $("#R").hide()
   })

   $("#visionn").click(function(){
    $(".addContents").hide()
    $("#Q").hide()
    $("#R").show()
   })

   

                                  


new WOW().init();
















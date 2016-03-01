$(function () {
  console.log("Let's Do This!");

  // Generate Option Boxes
  // var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  //
  // var today = new Date();
  // var day = $("#day");
  // var month = $('#month')
  // var thisDate = (today.getDate())-1;
  // var thisMonth = (today.getMonth());
  //
  // for (var d = 0; d < 31; d++) {
  //   day.append($('<option>').attr("value",(d+1)).text(d+1));
  // };
  // // Default to Current Date
  // $(day.children()[thisDate]).attr('selected', true);
  //
  // for (var m = 0; m < 12; m++) {
  //   month.append($('<option>').attr('value', (m+1)).text(monthNames[m]));
  // };
  // // Default to Current Month
  // $(month.children()[thisMonth]).attr('selected', true);

  // Nav Animation
  $('#about-button').on('click', function (event) {
    event.preventDefault();
    $('.about').toggle();
    $('.help, .pull-list').hide();
  });

  $('#help-button').on('click', function (event) {
    event.preventDefault();
    $('.help').toggle();
    $('.about, .pull-list').hide();
  });

  $('#pull-list-button').on('click', function (event) {
    event.preventDefault();
    $('.pull-list').toggle();
    $('.help, .about').hide();
  });

  $('.hide').on('click', function(event){
    event.preventDefault();
    $(this).parent().hide();
  })

  // Fake Search Button
  $('#fake-search-button').on('click', function (event){
    event.preventDefault();
    $('.about, .help, .pull-list').hide();
    $('.age').show();
  })

  // Pull List Buttons
  $('.pull-button').on('click', function () {
    $(this).hide()
    $(this).next('.unpull-button').css('display', 'inline-block')
  })

  $('.unpull-button').on('click', function () {
    $(this).hide()
    $(this).prev('.pull-button').show()
  })

  // Toggle Result Panes
  $('.label').on('mouseenter', function(){
    $(this).parent().children('h5').css('display', 'inline-block');
  })

  $('.label').on('mouseleave', function(){
    $(this).parent().children('h5').hide();
  })
  $('.label').on('click', function(){
    $(this).parent().children('.results').toggle();
  })


}) // Close Doc Ready Function

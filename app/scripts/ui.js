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
    // Sort Modern Age Results by Year


    // $('.modern').empty();
    // Manual Modern Sort
    // var modernIssues = $('.modern .issue')
    // console.log(modernIssues);
    // modernIssues.sort(function(low, high) {
    // return $(high).data("year") - $(low).data("year")
    // });
    // console.log(modernIssues);
    // $('.modern').html(modernIssues)

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
    console.log('YOU HAVE DONE IT NOW, JACK');
    $('.age').show();
    $('.container').empty();
    $('.container').append('<div class="error"><h1>Aw, Internet, no.</h1><img src="app/images/errorClint.png"><p>Uh-oh! Looks like something did not go as planned! Please try again!</p><p>If this message appears <strong>every</strong> time you search, that means the limit for daily searches has been reached.</p><p>Sorry! Please come back tomorrow!</p></div> ');
  })

  $('.container').on('mouseenter', function(event) {
    // Toggle Result Panes
    $('.tally').on('mouseenter', function() {
      $(this).parent().children('h5').css('display', 'inline-block');
    })
    $('.tally').on('mouseleave', function() {
      $(this).parent().children('h5').hide();
    })
  })


  $('.container').on('click', function (event) {
    var targ = event.target;
    var targClass = ($(targ).attr('class'))
    console.log(targClass);
    if (targClass ==='pull-button') {
      console.log("YOU CLICKED, DAWG");
      $(targ).hide()
      $(targ).next('.unpull-button').css('display', 'inline-block')
    }

    if (targClass === 'unpull-button') {
      $(targ).hide()
      $(targ).prev('.pull-button').show()
    }

    if (targClass === 'label tally') {
        $(targ).parent().children('.results, footer').toggle();
    }
  })


}) // Close Doc Ready Function

$(function () {
  console.log("Let's Do This!");

  if (localStorage.book1 === undefined) localStorage.book1 = "Empty!";
  if (localStorage.book2 === undefined) localStorage.book2 = "Empty!";
  if (localStorage.book3 === undefined) localStorage.book3 = "Empty!";
  if (localStorage.book4 === undefined) localStorage.book4 = "Empty!";
  if (localStorage.book5 === undefined) localStorage.book5 = "Empty!";

  $('#slot01').append('<h3>Slot 01: '+localStorage.book1+'</h3>');
  $('#slot02').append('<h3>Slot 02: '+localStorage.book2+'</h3>');
  $('#slot03').append('<h3>Slot 03: '+localStorage.book3+'</h3>');
  $('#slot04').append('<h3>Slot 04: '+localStorage.book4+'</h3>');
  $('#slot05').append('<h3>Slot 05: '+localStorage.book5+'</h3>');

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
    if (localStorage.book1 === "Empty!") {
      $('#del01').hide();
      } else {
      $('#del01').show();
    }
    if (localStorage.book2 === "Empty!") {
      $('#del02').hide();
    } else {
      $('#del02').show();
    }
    if (localStorage.book3 === "Empty!") {
      $('#del03').hide();
    } else {
      $('#del03').show();
    }
    if (localStorage.book4 === "Empty!") {
      $('#del04').hide();
    } else {
      $('#del04').show();
    }
    if (localStorage.book5 === "Empty!") {
      $('#del05').hide();
    } else {
      $('#del05').show();
    }
  });


  $('#clear-pull-list').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book1');
    $('#slot01').empty();
    $('#slot01').append('<h3>Slot 01: Empty!</h3>')
    $('#del01').hide();
    localStorage.removeItem('book2');
    $('#slot02').empty();
    $('#slot02').append('<h3>Slot 02: Empty!</h3>')
    $('#del02').hide();
    localStorage.removeItem('book3');
    $('#slot03').empty();
    $('#slot03').append('<h3>Slot 03: Empty!</h3>')
    $('#del03').hide();
    localStorage.removeItem('book4');
    $('#slot04').empty();
    $('#slot04').append('<h3>Slot 04: Empty!</h3>')
    $('#del04').hide();
    localStorage.removeItem('book5');
    $('#slot05').empty();
    $('#slot05').append('<h3>Slot 05: Empty!</h3>')
    $('#del05').hide();
    $(this).hide();

  })

  $('#del01').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book1');
    $('#slot01').empty();
    $('#slot01').append('<h3>Slot 01: Empty!</h3>')
    $(this).hide();
  })

  $('#del02').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book2');
    $('#slot02').empty();
    $('#slot02').append('<h3>Slot 02: Empty!</h3>')
    $(this).hide();
  })

  $('#del03').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book3');
    $('#slot03').empty();
    $('#slot03').append('<h3>Slot 03: Empty!</h3>')
    $(this).hide();
  })

  $('#del04').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book4');
    $('#slot04').empty();
    $('#slot04').append('<h3>Slot 04: Empty!</h3>')
    $(this).hide();
  })

  $('#del05').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book5');
    $('#slot05').empty();
    $('#slot05').append('<h3>Slot 05: Empty!</h3>')
    $(this).hide();
  })

  $('.hide').on('click', function(event){
    event.preventDefault();
    $(this).parent().hide();
  })

  // Fake Search Button
  // $('#fake-search-button').on('click', function (event){
  //   event.preventDefault();
  //   $('.about, .help, .pull-list').hide();
  //   $('.age').show();
  // })

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
      console.log($(targ).parent().children('.issue-title').text());
        if (localStorage.book1 === undefined || localStorage.book1 === "Empty!") {
          localStorage.book1 = $(targ).parent().children('.issue-title').text();
          $('#slot01').empty();
          $('#slot01').append('<h3>Slot 01: '+localStorage.book1+'</h3>');
          $('#clear-pull-list').show();
          $('#del01').show();
          alert("Added Comic to Slot 01!\nClick 'My Pull List!' to edit titles you've pulled.");
        } else if (localStorage.book2 === undefined || localStorage.book2 === "Empty!") {
            localStorage.book2 = $(targ).parent().children('.issue-title').text();
            $('#slot02').empty();
            $('#slot02').append('<h3>Slot 02: '+localStorage.book2+'</h3>');
            $('#clear-pull-list').show();
            $('#del02').show();
            alert("Added Comic to Slot 02!\nClick 'My Pull List!' to edit titles you've pulled.");
          }  else if (localStorage.book3 === undefined || localStorage.book3 === "Empty!") {
              localStorage.book3 = $(targ).parent().children('.issue-title').text();
              $('#slot03').empty();
              $('#slot03').append('<h3>Slot 03: '+localStorage.book3+'</h3>');
              $('#clear-pull-list').show();
              $('#del03').show();
              alert("Added Comic to Slot 03!\nClick 'My Pull List!' to edit titles you've pulled.");
            } else if (localStorage.book4 === undefined || localStorage.book4 === "Empty!") {
                localStorage.book4 = $(targ).parent().children('.issue-title').text()
                $('#slot04').empty();
                $('#slot04').append('<h3>Slot 04: '+localStorage.book4+'</h3>');
                $('#clear-pull-list').show();
                $('#del04').show();
                alert("Added Comic to Slot 04!\nClick 'My Pull List!' to edit titles you've pulled.");
              } else if (localStorage.book5 === undefined || localStorage.book5 === "Empty!") {
                  localStorage.book5 = $(targ).parent().children('.issue-title').text()
                  $('#slot05').empty();
                  $('#slot05').append('<h3>Slot 05: '+localStorage.book5+'</h3>');
                  $('#clear-pull-list').show();
                  $('#del05').show();
                  alert("Added Comic to Slot 05!\nClick 'My Pull List!' to edit titles you've pulled.");
                } else {
                  alert("All Pull List Slots are full!\nClick 'My Pull List!' to edit titles you've pulled.")
                }



    }

    // if (targClass === 'unpull-button') {
    //   $(targ).hide()
    //   $(targ).prev('.pull-button').show()
    // }

    if (targClass === 'label tally') {
        $(targ).parent().children('.results, footer').toggle();
    }
  })


}) // Close Doc Ready Function

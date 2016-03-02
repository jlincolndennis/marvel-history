$(function () {
  console.log("Let's Do This!");

  if (localStorage.book1 === undefined) localStorage.book1 = "Empty!";
  if (localStorage.book2 === undefined) localStorage.book2 = "Empty!";
  if (localStorage.book3 === undefined) localStorage.book3 = "Empty!";
  if (localStorage.book4 === undefined) localStorage.book4 = "Empty!";
  if (localStorage.book5 === undefined) localStorage.book5 = "Empty!";

  if (localStorage.url1 !== undefined) {
    $('#slot01').append('<h3>Slot 01: <a href="'+localStorage.url1+'" target="_blank">'+localStorage.book1+'</a></h3>');
  } else {
    $('#slot01').append('<h3>Slot 01: '+localStorage.book1+'</h3>');
  }

  if (localStorage.url2 !== undefined) {
    $('#slot02').append('<h3>Slot 02: <a href="'+localStorage.url2+'" target="_blank">'+localStorage.book2+'</a></h3>');
  } else {
    $('#slot02').append('<h3>Slot 02: '+localStorage.book2+'</h3>');
  }

  if (localStorage.url3 !== undefined) {
    $('#slot03').append('<h3>Slot 03: <a href="'+localStorage.url3+'" target="_blank">'+localStorage.book3+'</a></h3>');
  } else {
    $('#slot03').append('<h3>Slot 03: '+localStorage.book3+'</h3>');
  }

  if (localStorage.url4 !== undefined) {
    $('#slot04').append('<h3>Slot 04: <a href="'+localStorage.url4+'" target="_blank">'+localStorage.book4+'</a></h3>');
  } else {
    $('#slot04').append('<h3>Slot 04: '+localStorage.book4+'</h3>');
  }

  if (localStorage.url5 !== undefined) {
    $('#slot05').append('<h3>Slot 05: <a href="'+localStorage.url5+'" target="_blank">'+localStorage.book5+'</a></h3>');
  } else {
    $('#slot05').append('<h3>Slot 05: '+localStorage.book5+'</h3>');
  }

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

  // Clear Pull List (and all Local Data)
  $('#clear-pull-list').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book1');
    localStorage.removeItem('url1');
    $('#slot01').empty();
    $('#slot01').append('<h3>Slot 01: Empty!</h3>')
    $('#del01').hide();
    localStorage.removeItem('book2');
    localStorage.removeItem('url2');
    $('#slot02').empty();
    $('#slot02').append('<h3>Slot 02: Empty!</h3>')
    $('#del02').hide();
    localStorage.removeItem('book3');
    localStorage.removeItem('url3');
    $('#slot03').empty();
    $('#slot03').append('<h3>Slot 03: Empty!</h3>')
    $('#del03').hide();
    localStorage.removeItem('book4');
    localStorage.removeItem('url4');
    $('#slot04').empty();
    $('#slot04').append('<h3>Slot 04: Empty!</h3>')
    $('#del04').hide();
    localStorage.removeItem('book5');
    localStorage.removeItem('url5');
    $('#slot05').empty();
    $('#slot05').append('<h3>Slot 05: Empty!</h3>')
    $('#del05').hide();
    $(this).hide();
  })

  // Remove Individual Pull List Items
  $('#del01').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book1');
    localStorage.removeItem('url1');
    $('#slot01').empty();
    $('#slot01').append('<h3>Slot 01: Empty!</h3>')
    $(this).hide();
  })

  $('#del02').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book2');
    localStorage.removeItem('url2');
    $('#slot02').empty();
    $('#slot02').append('<h3>Slot 02: Empty!</h3>')
    $(this).hide();
  })

  $('#del03').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book3');
    localStorage.removeItem('url3');
    $('#slot03').empty();
    $('#slot03').append('<h3>Slot 03: Empty!</h3>')
    $(this).hide();
  })

  $('#del04').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book4');
    localStorage.removeItem('url4');
    $('#slot04').empty();
    $('#slot04').append('<h3>Slot 04: Empty!</h3>')
    $(this).hide();
  })

  $('#del05').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem('book5');
    localStorage.removeItem('url5');
    $('#slot05').empty();
    $('#slot05').append('<h3>Slot 05: Empty!</h3>')
    $(this).hide();
  })

  // Close Panes
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
    var targUrl = $(targ).parent().find('.issue-url').attr('href');
    var targTitle = $(targ).parent().children('.issue-title').text();

    // Add Times To Pull List
    if (targClass ==='pull-button') {
      console.log("YOU CLICKED, DAWG");
        if (localStorage.book1 === undefined || localStorage.book1 === "Empty!") {
          localStorage.book1 = targTitle
          localStorage.url1= targUrl
          $('#slot01').empty();
          $('#slot01').append('<h3>Slot 01: <a href="'+localStorage.url1+'" target="_blank">'+localStorage.book1+'</a></h3>');
          $('#clear-pull-list').show();
          $('#del01').show();
          alert("Added Comic to Slot 01!\nClick 'My Pull List!' to edit titles you've pulled.");
        } else if (localStorage.book2 === undefined || localStorage.book2 === "Empty!") {
            localStorage.book2 = targTitle;
            localStorage.url2 = targUrl
            $('#slot02').empty();
            $('#slot02').append('<h3>Slot 02: <a href="'+localStorage.url2+'" target="_blank">'+localStorage.book2+'</a></h3>');
            $('#clear-pull-list').show();
            $('#del02').show();
            alert("Added Comic to Slot 02!\nClick 'My Pull List!' to edit titles you've pulled.");
          }  else if (localStorage.book3 === undefined || localStorage.book3 === "Empty!") {
              localStorage.book3 = targTitle;
              localStorage.url3 = targUrl;
              $('#slot03').empty();
              $('#slot03').append('<h3>Slot 03: <a href="'+localStorage.url3+'" target="_blank">'+localStorage.book3+'</a></h3>');
              $('#clear-pull-list').show();
              $('#del03').show();
              alert("Added Comic to Slot 03!\nClick 'My Pull List!' to edit titles you've pulled.");
            } else if (localStorage.book4 === undefined || localStorage.book4 === "Empty!") {
                localStorage.book4 = targTitle;
                localStorage.url4 = targUrl;
                $('#slot04').empty();
                $('#slot04').append('<h3>Slot 04: <a href="'+localStorage.url4+'" target="_blank">'+localStorage.book4+'</a></h3>');
                $('#clear-pull-list').show();
                $('#del04').show();
                alert("Added Comic to Slot 04!\nClick 'My Pull List!' to edit titles you've pulled.");
              } else if (localStorage.book5 === undefined || localStorage.book5 === "Empty!") {
                  localStorage.book5 = targTitle;
                  localStorage.url5 = targUrl;
                  $('#slot05').empty();
                  $('#slot05').append('<h3>Slot 05: <a href="'+localStorage.url5+'" target="_blank">'+localStorage.book5+'</a></h3>');
                  $('#clear-pull-list').show();
                  $('#del05').show();
                  alert("Added Comic to Slot 05!\nClick 'My Pull List!' to edit titles you've pulled.");
                } else {
                  alert("All Pull List Slots are full!\nClick 'My Pull List!' to edit titles you've pulled.")
                }



    }

    if (targClass === 'pull-list-jump') {
      $('.pull-list').show();
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
    }

    if (targClass === 'label tally') {
        $(targ).parent().children('.results, footer').toggle();
    }
  })


}) // Close Doc Ready Function

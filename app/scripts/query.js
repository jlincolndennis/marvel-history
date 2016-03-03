$(function() {
  /*
  CryptoJS v3.1.2
  code.google.com/p/crypto-js
  (c) 2009-2013 by Jeff Mott. All rights reserved.
  code.google.com/p/crypto-js/wiki/License
  */
  var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
  q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
  32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
  2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
  g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
  b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
  g)).finalize(a)}}});var k=m.algo={};return m}(Math);
  (function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
  _doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
  c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
  d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
  C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
  4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);


  // Generate Option Boxes
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var today = new Date();
  var day = $("#day");
  var month = $('#month')
  var thisDate = (today.getDate()) - 1;
  var thisMonth = (today.getMonth());
  var selectedMonth
  var selectedDate

  for (var d = 0; d < 31; d++) {
    day.append($('<option>').attr("value", (d + 1)).text(d + 1));
  };
  // Select Current Date
  $(day.children()[thisDate]).attr('selected', true);

  for (var m = 0; m < 12; m++) {
    month.append($('<option>').attr('value', (m + 1)).text(monthNames[m]));
  };
  // Select Current Month
  $(month.children()[thisMonth]).attr('selected', true);


  // On Form Submit
  $("#history-date").on("submit", function(event) {
    event.preventDefault();
    selectedMonth = +$('#month option:selected').attr('value');
    selectedDate = +$('#day option:selected').attr('value');

    // Date Validation
    if (selectedMonth === 2 && selectedDate > 29) {
      selectedMonth = undefined;
      selectedDate = undefined;
      alert("Nice try, buddy. That's not a real date! Please select a date that actually exists!");
      return false;
    };

    if ((selectedMonth === 4 || selectedMonth === 6 || selectedMonth === 9 || selectedMonth === 11) && selectedDate > 30) {
      alert("Nice try, buddy. That's not a real date! Please select a date that actually exists!");
      selectedMonth = undefined;
      selectedDate = undefined;
      return false;
    };

    if (selectedMonth === 12 && selectedDate > 25 ){
        alert("Selecting a date after Christmas really confuses the gnomes that live in the computer that generate the search results. Please select a different date.")
        selectedMonth = undefined;
        selectedDate = undefined;
        return false;
    }

    // Generate Issue Template
    $('.about, .help, .pull-list').hide();

    //  Create date One Week from selected
    var startDate = pad(selectedMonth) + "-" + pad(selectedDate);
    var oneWeekLater = weekify(selectedMonth, selectedDate);

    function pad(num) {
      var s = num + "";
      while (s.length < 2) s = "0" + s;
      return s;
    }

    function weekify(month, day) {
      day += 6;

      if (month === 2) {
        if (day > 28) {
            month += 1;
            day -= 28
          }
      } else

      if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day > 30) {
          month += 1;
          day -= 30;
        }
      } else

      if (day > 31) {
        month += 1;
        day -= 31;
      }
      if (month === 13) {
        month = 1;
      }
      return (pad(month) + "-" + pad(day));
    }
    var textStartMonth = monthNames[(startDate.substr(0,2)-1)];
    var textStartDay = startDate.substr(3,2);
    var textEndMonth = monthNames[(oneWeekLater.substr(0,2)-1)];
    var textEndDay = oneWeekLater.substr(3, 2);

    $('.container').empty();
    $('.container').append('<div class="summary"><h2>Titles Released between '+textStartMonth+'  '+textStartDay+' and '+textEndMonth+' '+textEndDay+'</h2><p>Click an age to jump to those results!</p><a href="#modernresult"><h4 class="label sum" id="modern-summary">Modern Age (0)</h4></a><a href="#bronzeresult"><h4 class="label sum" id="bronze-summary">Bronze Age (0)</h4></a><a href="#silverresult"><h4 class="label sum" id="silver-summary">Silver Age (0)</h4></a><a href="#goldenresult"><h4 class="label sum" id="golden-summary">Golden Age (0)</h4></a></div><div class="age" id="modern"><a name="modernresult"><h4 class="label">Modern Age: 1986 - Now!</h4></a><h4 class="label tally" id="modern-tally">No Results!</h4><h5 class="collapse">-Click Box To Show/Hide Results-</h5><div class="modern results"></div></div><div class="age" id="bronze"><a name="bronzeresult"><h4 class="label">Bronze Age: 1971 - 1985</h4></a><h4 id ="bronze-tally" class="label tally">No Results!</h4><h5 class="collapse">-Click To Show/Hide Results-</h5><div class="bronze results"></div></div><div class="age" id="silver"><a name="silverresult"><h4 class="label">Silver Age: 1956 - 1970</h4></a><h4 class="label tally" id="silver-tally">No Results!</h4><h5 class="collapse">-Click To Show/Hide Results-</h5><div class="silver results"></div></div><div class="age" id="golden"><a name="goldenresult"><h4 class="label">Golden Age: 1930 - 1955</h4></a><h4 class="label tally" id="golden-tally">No Results!</h4><h5 class="collapse">-Click To Show/Hide Results-</h5><div class="golden results"></div></div>');
    $('.age').show();

    // Call Generation
    var privateKey = "8b4c043b0bdca8eb69f8896595cd3b9ee9bf6673"
    var publicKey = "ccb933046a395a5a0acc8f00cfb1d821"

    //Golden Age Call 1939 1955
    var goldenLow = "1939"
    var goldenHigh = "1955"
    //Silver Age Call 1956 1970
    var silverLow = "1956"
    var silverHigh = "1970"
    //Bronze Age Call 1971 1985
    var bronzeLow = "1971"
    var bronzeHigh = "1985"
    // Modern Age Group A 1986 1995
    var modernALow = "1986"
    var modernAHigh = "1995"
    //Modern Age Group B 1996 1999
    var modernBLow = "1996"
    var modernBHigh = "1999"
    //Modern Age Group C 2000 2002
    var modernCLow = "2000"
    var modernCHigh = "2002"
    //Modern Age Group D 2003 2004
    var modernDLow = "2003"
    var modernDHigh = "2004"
    //Modern Age Group E 2005
    var modernELow = '2005'
    var modernEHigh = "2005"
    //Modern Age Group F 2006
    var modernFLow = '2006'
    var modernFHigh = "2006"
    //Modern Age Group G 2007
    var modernGLow = '2007'
    var modernGHigh = "2007"
    //Modern Age Group H 2008
    var modernHLow = '2008'
    var modernHHigh = "2008"
    //Modern Age Group I 2009
    var modernILow = '2009'
    var modernIHigh = "2009"
    //Modern Age Group J 2010
    var modernJLow = '2010'
    var modernJHigh = "2010"
    //Modern Age Group K 2011
    var modernKLow = '2011'
    var modernKHigh = "2011"
    //Modern Age Group L 2012
    var modernLLow = '2012'
    var modernLHigh = "2012"
    //Modern Age Group M 2013
    var modernMLow = '2013'
    var modernMHigh = "2013"
    //Modern Age Group N 2014
    var modernNLow = '2014'
    var modernNHigh = "2014"
    //Modern Age Group O 2015
    var modernOLow = '2015'
    var modernOHigh = "2015"
    //Modern Age Group P 2016
    var modernPLow = '2016'
    var modernPHigh = "2016"


    function marvelCall (low, high, age) {
      // Generate call url
      var url = 'http://gateway.marvel.com:80/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateRange='+low+'-' + startDate + '%2C%20'+high+'-' + oneWeekLater + '&issueNumber=1&orderBy=-onsaleDate%2Ctitle&limit=100&apikey=' + publicKey;

      var timeStamp = new Date().getTime();
      var hash = CryptoJS.MD5(timeStamp + privateKey + publicKey);

      url += "&ts=" + timeStamp + "&hash=" + hash;

      // Call
      $.get(url, function(response) {
        var issues = response.data.results
        // console.log(response.code);
        if (response.code === 200) {
          buildIssue(issues);
        } else {
          errorMessage();
        }
      })

      function  buildIssue (issues) {
        for (var i = 0; i < issues.length; i++) {

          var pubCode = issues[i].dates[0].date;
          var pubYear = pubCode.substr(0, 4);
          var pubDate = pubCode.substr(5, 5);
          // var sortDate = pubCode.substr(0, 10)
          var textMonth = monthNames[+(pubDate.substr(0,2)-1)];
          var textDay = pubDate.substr(3, 2);
          var issueTitle = issues[i].title;
          var imageArray = issues[i].images;
          var issueUrl = issues[i].urls[0].url;
          var imagePath

          if (issues[i].images.length === 0 ){
            imagePath = "app/images/coverunavailable.png"
          } else {
            imagePath = issues[i].images[0].path + "/portrait_incredible." + issues[i].images[0].extension;
          }

          if (pubDate >= startDate && pubDate <= oneWeekLater) {
            var plotDescription = issues[i].description;

            if (plotDescription === null) {
              plotDescription = "Description unavailable, but I bet some Super Rad comics stuff happens! Bad guys doing bad things! Only our Heroes can stop them! Fisticuffs! That sort of thing. Also, the older this particular comic is, the more likely it is to have problematic representations of women, people of color, and LGBTQ folks. So... yeah.";
            }

            $("."+age).append("<article class='issue' data-year='"+pubYear+"' data-title='"+issueTitle+"' id='"+issues[i].id+"'><div class='cover'><img src='"+imagePath+"' alt='Issue Cover'></div><div class='details'><h2 class='issue-title'><a href='"+issueUrl+"' target='_blank' class='issue-url'>"+issueTitle+"</a></h2><h3 class='release-date'>Originally released on: "+textMonth+" "+textDay+" "+pubYear+"</h3><h4 class='pull-button'>Add to Pull List!</h4><p class='issue-summary'>"+plotDescription+"</p><p><a href='#'>Back to top!</a> | <a class='pull-list-jump' href='#pull'>Jump To Pull List!</a></p></div></article>");

            // Sort Modern Age Issues
            var modernIssues = $('.modern .issue');

            modernIssues.sort(function(low, high) {
              var x = $(high).data("year") - $(low).data("year");
             if (x === 0)  {
                return $(low).data("title") > $(high).data("title") ? 1 : -1
              } else {
                return x
              };
            });

            $('.modern').html(modernIssues);

            // Generage Result Tally Boxes
            var modernResults = $('.modern article').length;

            if (modernResults === 0) {
              $("#modern").hide();
            }

            if (modernResults === 1) {
              $('#modern-tally').html(modernResults+ " Result!");
              $('#modern-summary').html("Modern Age ("+modernResults+")");
            } else {
              $('#modern-tally').html(modernResults+" Results!");
              $('#modern-summary').html("Modern Age ("+modernResults+")");
            }

            var bronzeResults = $('.bronze article').length;

            if (bronzeResults === 0) {
              $("#bronze").hide();
            }

            if (bronzeResults === 1){
              $("#bronze").show();
              $('#bronze-tally').html(bronzeResults+" Result!");
              $('#bronze-summary').html("Bronze Age ("+bronzeResults+")");

            } else {
              // $("#bronze").show();
              $('#bronze-tally').html(bronzeResults+" Results!");
              $('#bronze-summary').html("Bronze Age ("+bronzeResults+")");
            }

            var silverResults = $('.silver article').length;

            if (silverResults === 0) {
              $("#silver").hide()
            }

            if (silverResults === 1) {
              $("#silver").show();
              $('#silver-tally').html(silverResults+" Result!");
              $('#silver-summary').html("Silver Age ("+silverResults+")");
            } else {
              // $("#silver").show();
              $('#silver-tally').html(silverResults+" Results!");
              $('#silver-summary').html("Silver Age ("+silverResults+")");
            }

            var goldenResults = $('.golden article').length;

            if (goldenResults === 0) {
              $("#golden").hide()
            }

            if (goldenResults === 1){
              $("#golden").show()
              $('#golden-tally').html(goldenResults+" Result!");
              $('#golden-summary').html("Golden Age ("+goldenResults+")");
            } else {
              // $("#golden").show()
              $('#golden-tally').html(goldenResults+" Results!");
              $('#golden-summary').html("Golden Age ("+goldenResults+")");
            }
        } // close if (pubDate....)
        } // close for loop
      } // close buildIssue

      function errorMessage () {
        $('.container').empty();
        $('.container').append('<div class="error"><h1>Aw, Internet, no.</h1><img src="app/images/errorClint.png"><p>Uh-oh! Looks like something did not go as planned! Please try again!</p><p>If this message appears <strong>every</strong> time you search, that means the limit for daily searches has been reached.</p><p>Sorry! Please come back tomorrow!</p></div> ');
      }
    } // close marvelCall

    function modernCall (){
      marvelCall(modernPLow, modernPHigh, "modern");
      marvelCall(modernOLow, modernOHigh, "modern");
      marvelCall(modernNLow, modernNHigh, "modern");
      marvelCall(modernMLow, modernMHigh, "modern");
      marvelCall(modernLLow, modernLHigh, "modern");
      marvelCall(modernKLow, modernKHigh, "modern");
      marvelCall(modernJLow, modernJHigh, "modern");
      marvelCall(modernILow, modernIHigh, "modern");
      marvelCall(modernHLow, modernHHigh, "modern");
      marvelCall(modernGLow, modernGHigh, "modern");
      marvelCall(modernFLow, modernFHigh, "modern");
      marvelCall(modernELow, modernEHigh, "modern");
      marvelCall(modernDLow, modernDHigh, "modern");
      marvelCall(modernCLow, modernCHigh, "modern");
      marvelCall(modernBLow, modernBHigh, "modern");
      marvelCall(modernALow, modernAHigh, "modern");
    }
    modernCall();

    marvelCall(bronzeLow, bronzeHigh, "bronze");
    marvelCall(silverLow, silverHigh, "silver");
    marvelCall(goldenLow, goldenHigh, "golden");
  }) // close on form submit
}) // close document ready

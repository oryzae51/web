function setClickAll(ndhndlr){
  //var targetClickList = document.querySelectorAll('input');
  //var j = 0;
  //while(j < targetClickList.length){
  //  targetClickList[j].value = ndhndlr;
  //  j+=1;
  //}
  $(':button').prop('value', ndhndlr)
}

var Body = {
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }
}

var Link = {
  setColor:function(color){
    /*var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i+=1;
    }*/
    $('a').css('color', color)
  }
}

function nightDayHandler(self){
  var targetBody = document.querySelector('body')
  if(self.value === 'night'){
    Body.setBackgroundColor('#212F3C');
    Body.setColor('khaki');
    setClickAll('day');
    Link.setColor('powderblue');
  }else{
    Body.setBackgroundColor('#FEF9E7');
    Body.setColor('black');
    setClickAll('night');
    Link.setColor('blue');
  }
}

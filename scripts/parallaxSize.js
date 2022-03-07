// window.addEventListener('scroll',function(){
//     if (document.body.scrollTop >= 300) {
//         document.querySelector('.even-icon').style.opacity=(-(document.body.scrollTop*2.5)+100)+'%';
//     } else if (document.body.scrollTop >= 500) {
//         document.querySelector('.bigger-icon').style.display = 'none';
//     } else {
//         document.querySelector('.bigger-icon').style.display = 'inline';
//         document.querySelector('.bigger-icon').style.fontSize=((document.body.scrollTop*.05)+3)+'rem';
//     }
//   });

//   window.addEventListener('scroll',function(){
//     document.querySelector('.lighter-icon').style.opacity=((document.body.scrollTop*.5)+1)+'%';
//   });

  window.addEventListener('scroll',function(){
    if (document.body.scrollTop < 120) {
        document.querySelector('.biggerY').style.fontSize = 0+'rem';
    } else {
        document.querySelector('.biggerY').style.display = 'inline';
        document.querySelector('.biggerY').style.fontSize=((document.body.scrollTop*.05)+8)+'rem';
    }
  });

  window.addEventListener('scroll',function(){
    if (document.body.scrollTop < 120) {
        document.querySelector('.biggerO').style.fontSize = 0+'rem';
    } else {
        document.querySelector('.biggerO').style.display = 'inline';
        document.querySelector('.biggerO').style.fontSize=((document.body.scrollTop*.05)+8)+'rem';
    }
  });

  window.addEventListener('scroll',function(){
    if (document.body.scrollTop >= 500) {
        document.querySelector('.biggerU').style.fontSize = 0+'rem';
    } else {
        document.querySelector('.biggerU').style.display = 'inline';
        document.querySelector('.biggerU').style.fontSize=((document.body.scrollTop*.05)+8)+'rem';
    }
  });

  window.addEventListener('scroll',function(){
    if (document.body.scrollTop < 120) {
        document.querySelector('.biggerS').style.fontSize = 0+'rem';
    } else {
        document.querySelector('.biggerS').style.display = 'inline';
        document.querySelector('.biggerS').style.fontSize=((document.body.scrollTop*.05)+8)+'rem';
    }
  });

  window.addEventListener('scroll',function(){
    if (document.body.scrollTop < 120) {
        document.querySelector('.biggerSS').style.fontSize = 0+'rem';
    } else {
        document.querySelector('.biggerSS').style.display = 'inline';
        document.querySelector('.biggerSS').style.fontSize=((document.body.scrollTop*.05)+8)+'rem';
    }
  });

  window.addEventListener('scroll',function(){
    if (document.body.scrollTop < 120) {
        document.querySelector('.biggerE').style.fontSize = 0+'rem';
    } else {
        document.querySelector('.biggerE').style.display = 'inline';
        document.querySelector('.biggerE').style.fontSize=((document.body.scrollTop*.05)+8)+'rem';
    }
  });

  window.addEventListener('scroll',function(){
    if (document.body.scrollTop < 120) {
        document.querySelector('.biggerF').style.fontSize = 0+'rem';
    } else {
        document.querySelector('.biggerF').style.display = 'inline';
        document.querySelector('.biggerF').style.fontSize=((document.body.scrollTop*.05)+8)+'rem';
    }
  });
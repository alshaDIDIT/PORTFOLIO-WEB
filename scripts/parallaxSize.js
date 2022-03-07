window.addEventListener('scroll',function(){
    if (document.body.scrollTop >= 300) {
        document.querySelector('.even-icon').style.opacity=(-(document.body.scrollTop*2.5)+100)+'%';
    } else if (document.body.scrollTop >= 500) {
        document.querySelector('.bigger-icon').style.display = 'none';
    } else {
        document.querySelector('.bigger-icon').style.display = 'inline';
        document.querySelector('.bigger-icon').style.fontSize=((document.body.scrollTop*.05)+3)+'rem';
    }
  });

  window.addEventListener('scroll',function(){
    document.querySelector('.lighter-icon').style.opacity=((document.body.scrollTop*.5)+1)+'%';
  });

  window.addEventListener('scroll',function(){
    document.querySelector('.bigger').style.fontSize=((document.body.scrollTop*.1)+8)+'rem';
  });

  window.addEventListener('scroll',function(){
    document.querySelector('.lighter').style.opacity=(-(document.body.scrollTop*2.5)+100)+'%';
  });

  window.addEventListener('scroll',function(){
    document.querySelector('.lighter2').style.opacity=(-(document.body.scrollTop*0.2)+100)+'%';
  });
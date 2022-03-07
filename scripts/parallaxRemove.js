window.addEventListener('scroll',function(r){

  const target = this.document.querySelectorAll('.remF');

    var index = 0, length = target.length;

    for (index; index < length; index++) {
      if (document.body.scrollTop >= 300) {
        target[index].style.fontSize = 0+'rem';
      } else {
        target[index].style.fontSize = 8+'rem';
      }
    }
});

window.addEventListener('scroll',function(re){

  const target = this.document.querySelectorAll('.remY');

    var index = 0, length = target.length;

    for (index; index < length; index++) {
      if (document.body.scrollTop >= 500) {
        target[index].style.fontSize = 0+'rem';
      } else {
        document.querySelector('.biggerU').style.fontSize=((document.body.scrollTop*.05)+8)+'rem';
      }
    }
});
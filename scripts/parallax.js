window.addEventListener('scroll', function(e) {

    const target = this.document.querySelectorAll('.scroll');

    var index = 0, length = target.length;

    for (index; index < length; index++) {
        var pos = this.window.pageYOffset * target[index].dataset.rate;
        var fs = target[index].style.fontSize;

        if (target[index].dataset.size === 'big') {
            // target[index].style.transition = 'all .2s ease-in-out';
            // target[index].style.transform = 'scale(5)';
            target[index].style.fontSize = fs;
        }

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0rem,'+pos+'rem, 0rem)';
        }

        if (target[index].dataset.direction === 'horizontal') {
            target[index].style.transform = 'translate3d('+pos+'rem, 0rem, 0rem)';
        } else {
            var posX = this.window.pageYOffset * target[index].dataset.ratex;
            var posY = this.window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = 'translate3d('+posY+'rem, '+posY+'rem, 0rem)';
        }
    }


});
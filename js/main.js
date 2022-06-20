$(function(){
    var indicator = document.querySelector('.indicator button');
    var lightbox = document.querySelector('#lightbox');
    var block = document.querySelector('#block');

    function lightbox_open(num){
        lightbox.setAttribute('class','active');
        block.setAttribute('class','active');
        change_img(num);
        indicator[nim-1].focus();
    }

    function lightbox_close(){
        lightbox.removeAttribute('class');
    }


    function change_img(val){
        var imgs=document.querySelectorAll('figure>img');

        for(var i=0; i<imgs.length; i++){
            imgs[i].removeAttribute('class');
        }
        imgs[val-1].setAttribute('class','active');
    }
});


/*$(function(){
    var $indicator = $('.indicator button');
    var $lightbox = $('#lightbox');
    var $block = $('#block');

    function lightbox_open(num){
        $lightbox.addClass('active');
        $block.addClass('active');
        change_img(num);
        $indicator.eq(num).focus();
    }

    function lightbox_close(){
        $lightbox.removeAttr('class');
        $block.removeAttr('class');
    }


    function change_img(val){
        var $imgs=$('figure>img');

        for(var i=0; i<$imgs.length; i++){
            $imgs.eq(i).removeAttr('class');
        }
        $imgs.eq(val).attr('class','active');
    }
});
*/
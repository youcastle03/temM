var heart_value=0;
var star_value=0;
function heartchange(){
    var heart=document.getElementById("heart");
    if(heart_value==0){
        heart.src="/media/heart/heart2.png"
        heart_value=1;
        like();
            
    }
    else{
        heart.src="/media/heart/heart.png"
        heart_value=0;
    }
}
function starchange(){
    var star=document.getElementById("star");
    
    if(star_value==0){
        star.src="/media/star/star2.png"
        star_value=1;
            
    }
    else{
        star.src="/media/star/star.png"
        star_value=0;
    }
}
function like()  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('likenumber');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    number=parseInt(number)+1;
    
    // 결과 출력
    resultElement.innerText = number;
}

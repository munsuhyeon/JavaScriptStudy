function interestRat(){
var nowPrice = 60000; //예금액
var featPrice = 0; //미래예금액

if(nowPrice >= 50000){
    featPrice = (nowPrice * 0.2) + nowPrice;
    featPrice = (featPrice * 0.2) + featPrice;
}else{
    featPrice = (nowPrice * 0.15) + nowPrice;
    featPrice = (featPrice * 0.15) + featPrice;
}

console.log("미래예상금액 : "+featPrice);
}
function coffee(){
    var first = 360;
    var second = (first/3) * 2
    var third = (second/3) * 2
    var result = first + second + third;
    console.log("결과 : "+result)
}

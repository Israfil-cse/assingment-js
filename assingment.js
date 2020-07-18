// warnig: please remove the function aria comments 

// 1.convert feet to mile

/*
function feetToMile(feet){
    var remainder = feet / 5280;
    return remainder;
}
var result = feetToMile(12);
console.log(result, 'mile');
*/



// 2.calculate wood 
/*
function woodCalculator(chair, table, bed){
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var sum = chair + table + bed;
    return sum;
}
var result = woodCalculator(1, 2, 3);
console.log('you need ', result, 'cft wood');
*/


// 3.calculate brick
/*
  function brickCalculator (floor){
    if (floor <= 10 && floor > 0) {
        var result = floor*15*1000;

    }else if (floor <= 20 && floor >=11) {

        var resultForDefaultTen = 10*15*1000;

        var extrafloor = floor - 10;
        var result = extrafloor*12*1000;
        var total = resultForDefaultTen + result;

    }else if (floor > 20 ) {
        var resultForDefaultTen = 10*15*1000;

        var resultForDefaultExtraTen = 10*12*1000;

        var extrafloor = floor - 20;
        var result = extrafloor*10*1000;

        var total = resultForDefaultTen + resultForDefaultExtraTen + result;

    }
    return total;
  }
  var brickResult = brickCalculator(30);
  console.log(brickResult);
  */


// 4.tinyFriend
/*
function tinyFriend (name){
    var smallName = name[0];
    for(var i = 0; i < name.length; i++){
        var currentValu = smallName[i];
        if(currentValu < smallName){
            smallName = currentValu;
        }
    }
    return smallName;
    }
    var result = tinyFriend(['tanmoy', 'sabbir ahmed', 'israfil', 'prity zinta', 'akhi']);
    console.log('lowest number', result);
    */
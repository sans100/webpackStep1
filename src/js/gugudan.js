var gugu = document.getElementById('gugu');
function gugudan() {
    var returnValue = '';
    var danMax = 9;
    for (var i = 1; i <= danMax; i++){
        for (var j = 1; j <= danMax; j++){
            returnValue += `${i} X ${j} = ${i*j}`;
            //returnValue += i + ' X ' + j + ' = ' + i*j;
            returnValue += '\n';
        }
        returnValue += '\n';
    }
    return returnValue;
}
gugu.value = gugudan();

/*
1x1=1     2x1=2      3x1=3
1x2=2     2x2=4      3x2=6
1x3=3     2x3=6      3x3=9
1x4=4     2x4=8      3x4=12
1x5=5     2x5=10     3x5=15
1x6=6     2x6=12     3x6=18
1x7=7     2x7=14     3x7=21
1x8=8     2x8=16     3x8=24
*/
var guguup = document.getElementById('guguup');
function gugudanup() {
    var danRepeat = '';
    for (var i = 1; i <= 9; i = i + 3) {
        for (var j = 1; j <= 9; j++) {
            for (var k = 0; k < 3; k++) {
                danRepeat += `${(i+k)} X ${j} = ${(i+k)*j}`;
                danRepeat += '\t';
            }
            danRepeat += '\n';
        }
        danRepeat += '\n';
    }
    return danRepeat;
}
guguup.value = gugudanup();



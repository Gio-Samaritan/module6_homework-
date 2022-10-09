/* Задание 1*/
function count(){
    var arr = [8, 3, 6, null, 2, 0, 67 ];
    var zerocount = 0;
    var numbercount = 0;
    var evencount = 0;
    var oddcount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            numbercount += 1;
            } else if (arr[i] === 0) {
                zerocount += 1;
            } else if (arr[i] % 2 === 0) {
                evencount += 1;
            } else {
                oddcount += 1;
            }
        }
    console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
    }
    count();
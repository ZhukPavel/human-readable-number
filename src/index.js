module.exports = function toReadable (number) {
    let units={
        '0' : 'zero',
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : 'eight',
        '9' : 'nine'
    }
    let dozens={
        '0' : 'ten',
        '1': 'eleven',
        '2': 'twelve',
        '3' : 'thirteen',
        '4' : 'fourteen',
        '5' : 'fifteen',
        '6' : 'sixteen',
        '7' : 'seventeen',
        '8' : 'eighteen',
        '9' : 'nineteen'
        }
    let dozens2={
        '2' : 'twenty',
        '3' : 'thirty',
        '4' : 'forty',
        '5' : 'fifty',
        '6' : 'sixty',
        '7' : 'seventy',
        '8' : 'eighty',
        '9' : 'ninety'
    }
    let str=String(number);
    let array={};
    for (i=0; i<=str.length-1; i++){
        array[i]=str[i];
    }
    if (str.length==1){
        result=(units[String(array[0])]);
        return result;
    }
    if (str.length==2 && array[0]==1)
        {
        result=(dozens[String(array[1])]);
        return result;
        }
    if (str.length==2 && array[0]!==1 && array[1]==0){
        result=(dozens2[String(array[0])])
        return result;
    }
    if (str.length==2 && array[0]!==1 && array[1]!==0){
        result=(dozens2[String(array[0])] + " " + units[String(array[1])] )
        return result;
    }
    if (str.length==3 &&  array[1]==0 && array[2]==0) {
        result=(units[String(array[0])]) + ' ' + 'hundred';
        return result
    }
    if (str.length==3 &&  array[1]==0 && array[2]>=0){
        result = ((units[String(array[0])]) + ' ' + 'hundred' + ' ' + units[String(array[2])]) ;
        return result;
    }
    if (str.length==3 &&  array[1]==1 && array[2]>=0){
        result = ((units[String(array[0])]) + ' ' + 'hundred' + ' ' + dozens[String(array[2])]);
        return result;
    }
    if (str.length==3 &&  array[1]>=0 && array[2]==0){
        result = ((units[String(array[0])]) + ' ' + 'hundred' + ' ' + dozens2[String(array[1])]);
        return result;
    }
    if (str.length==3 &&  array[1]>=0 && array[2]>=0){
        result = ((units[String(array[0])]) + ' ' + 'hundred' + ' ' + dozens2[String(array[1])] + ' ' + units[String(array[2])]);
        return result;
    }

}
  


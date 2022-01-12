module.exports = function toReadable (number) {
    let resArr = [];
    const numberArr = String (number).split('');
    const lengthArr = numberArr.length;
    const hundred = 'hundred';

    if (number === 0) {
        return 'zero'
      }
  
    if (numberArr[lengthArr - 2] != '1') {
    switch (numberArr[lengthArr - 1]) {
      case '1' : resArr.push ('one');
        break;
      case '2' : resArr.push ('two');
        break;
      case '3' : resArr.push ('three');
        break;
      case '4' : resArr.push ('four');
        break;
      case '5' : resArr.push ('five');
        break;
      case '6' : resArr.push ('six');
        break;
      case '7' : resArr.push ('seven');
        break;
      case '8' : resArr.push ('eight');
        break;
      case '9' : resArr.push ('nine');
        break;
    }
    }
  
    if (numberArr[lengthArr - 1] === '0') {
      resArr.push('');
    }
  
    if(numberArr[lengthArr - 2] === '1') {
      switch (numberArr[lengthArr - 1]) {
        case '0' : resArr.push ('ten');
          break;
        case '1' : resArr.push ('eleven');
        break;
        case '2' : resArr.push ('twelve');
        break;
        case '3' : resArr.push ('thirteen');
        break;
        case '4' : resArr.push ('fourteen');
        break;
        case '5' : resArr.push ('fifteen');
        break;
        case '6' : resArr.push ('sixteen');
        break;
        case '7' : resArr.push ('seventeen');
        break;
        case '8' : resArr.push ('eighteen');
        break;
        case '9' : resArr.push ('nineteen');
        break;
      }
    }
  
    switch (numberArr[lengthArr - 2]) {
      case '2' : resArr.push ('twenty');
        break;
      case '3' : resArr.push ('thirty');
        break;
      case '4' : resArr.push ('forty');
        break;
      case '5' : resArr.push ('fifty');
        break;
      case '6' : resArr.push ('sixty');
        break;
      case '7' : resArr.push ('seventy');
        break;
      case '8' : resArr.push ('eighty');
        break;
      case '9' : resArr.push ('ninety');
        break;
    }
  
    switch (numberArr[lengthArr - 3]) {
      case '1' : resArr.push ('one ' + hundred);
        break;
      case '2' : resArr.push ('two ' + hundred);
        break;
      case '3' : resArr.push ('three ' + hundred);
        break;
      case '4' : resArr.push ('four ' + hundred);
        break;
      case '5' : resArr.push ('five ' + hundred);
        break;
      case '6' : resArr.push ('six ' + hundred);
        break;
      case '7' : resArr.push ('seven ' + hundred);
        break;
      case '8' : resArr.push ('eight ' + hundred);
        break;
      case '9' : resArr.push ('nine ' + hundred);
        break;
    }
  
    return (resArr.reverse().join(' ')).trim();
}

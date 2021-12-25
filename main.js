function palindrome(str) {
    const regex = /[\W_]+/g;
    let newStr = str.replace(regex ,"");
    let text = newStr.toLowerCase();
    let n = text.length;
    let arrayOne = [];
    let arrayTwo = [];
    for (let i = 0; i < n; i++) {
      arrayOne.push(text[i]);
      arrayTwo.unshift(text[i]);
    }
    console.log(arrayOne)
    console.log(arrayTwo)
    if (arrayOne.toString() == arrayTwo.toString()){
      return true;
    }
    else
    {
      return false;
    }
  }
palindrome("eye");

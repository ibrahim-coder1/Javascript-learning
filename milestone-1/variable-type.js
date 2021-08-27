var eggPrice = 200;
console.log(typeof eggPrice);

// typeof ব্যবহার করে কি ধরনের ভ্যারিয়েবল সেটা বঝা যায় ।

// অনেক ধরনের ভ্যারিয়েবল টাইপ আছে । 


var today = new Date();
console.log(typeof today);

//Object ভ্যারিয়েবল

var firstNumber = 0.2;
var secondNumber = 0.3;

var total = firstNumber + secondNumber;

console.log(parseFloat(total.toFixed(2)));

// another way -

total = total.toFixed(2);
total = parseFloat(total);
console.log(total);

//দুইটা দশমিক সংখ্যা যোগ করার সময় যদি string হয়ে যায় তাহলে parseFloat ব্যবহার করতে হবে ।

//দশমিকের পর কয়টা সংখ্যা দেখাবে সেটা নির্ধারন করার জন্য toFixed(যে কয়টা সংখ্যা দেখাতে চাই সেটা দিতে হবে) ।
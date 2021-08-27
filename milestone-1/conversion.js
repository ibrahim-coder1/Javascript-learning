var firstName = jeni;
var lastName = khan;

var fullName = firstName + ' ' + lastName;

console.log(fullName);

//দুইটা string যোগ করার সময় খালি জায়গার প্রয়োজন হলে whitespace ব্যবহার করা হয় ।

var onionPrice = "42";
var eggPrice = "45";

var total = onionPrice + eggPrice;

console.log(total);

//কোটেশনের মাঝে কিছু রাখলে সেটা string এর মত আচারন করে এবং সেটা যোগ করলে পাশাপাশি অবস্থান করবে ।

// integer
var price = 3;

// float 
var price = 99.99;


//parseInt - কোন string কে integer এ পরিবর্তন করার জন্য ব্যবহার করা হয় ।

// ঊদাহরন -
var price = '42';
var priceNumber = parseInt(price);

console.log(priceNumber);

//parseFloat - দশমিক সংখ্যা রাখার জন্য ব্যবহার করা হয় । এবং কোন string কে integer এ পরিবর্তন করার জন্য ব্যবহার করা হয় ।

var egg = 8.99;
var mango = 9.62;

var eggNumber = parseFloat(egg);
var mangoNumber = parseFloat(mango);
var total = eggNumber + mangoNumber;

console.log(total);
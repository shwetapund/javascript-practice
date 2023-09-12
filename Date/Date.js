const date = new Date(); //new is the keyword it is used to create a Date()
console.log(date); //date is variable name which is pass in the console.log console.log used to print console output

//output : 2023-09-12T05:46:49.115Z it returns UTC (Universal Time Coordinated) time .
const time = new Date();
console.log(time);
console.log(time +" 5:30"); //if you return IST (Indian Standard Time) then you can add UTC time + 5:30 minutes

const IstTime = new Date();
console.log(IstTime.toLocaleString());

const date2 = new Date();
console.log(date2.getDate());

const day = new Date();
console.log(day.getDay());

const month = new Date();
console.log(month.getMonth());

const hour = new Date();
console.log(hour.getHours());

const minute = new Date();
console.log(minute.getMinutes());

const s = new Date();
console.log(s.getSeconds());

const fullyear = new Date();
console.log(fullyear.getFullYear());



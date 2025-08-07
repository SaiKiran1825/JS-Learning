
console.log('start');

setTimeout(function cb(){
    console.log('call back');
},1000)


console.log('end');

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate +10000){
    endDate = new Date().getTime();
}

console.log('While expries');

setTimeout (function(){
    console.log('setTimeout');
},1000);

console.log('finish');
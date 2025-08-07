const users =[
    {firstName: "Sai",lastName: "Kiran", age: 18},
    {firstName: "Mani",lastName: "Kanta" ,age: 20},
    {firstName: "Rohit",lastName:"Kumar" ,age: 19},
    {firstName: "Siva",lastName: "Nagaraju",age: 25},
]


const output = users.filter((x) => x.age < 20).map((x) => x.firstName);
console.log(output);

// const outputs = users.reduce(function(acc, curr){
//     if(curr.age < 30){
//         acc.push(curr.firstName);  //if age of current user is < 30, push there firstName into the acc array
//     }
//     return acc;
// }, [ ]);  //initially, the acc will be an empty array

// console.log(outputs);
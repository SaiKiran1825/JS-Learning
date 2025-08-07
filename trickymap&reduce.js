const users =[
    {firstName: "Sai",lastName: "Kiran", age: 18},
    {firstName: "Mani",lastName: "Kanta" ,age: 20},
    {firstName: "Rohit",lastName:"Kumar" ,age: 19},
    {firstName: "Siva",lastName: "Nagaraju",age: 25},
]

const output = users.map(x => x.firstName + " " + x.lastName + " is " + x.age + " years old");
console.log(output)

// acc{ 20 : 1, 21 : 2, 22 : 1 }

const outputs = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }
    else{
        acc[curr.age]=1
    }
    return acc
},{})
console.log(outputs)



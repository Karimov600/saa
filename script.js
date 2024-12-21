let arr = [
    [115,50,25],
    [75,12,99],
    [34,36,55],
];

let result = arr.map(Arr => Arr.reduce((num1, num2) => num1 + num2)); 
console.log(result);

// нужно сложить числа внутри вложенных массивов
// ответ должен выглядить так - [190,186,125]

let prices = [15000,3200,10200,455000,123000,7000];
let min = Math.min(...prices)
let max = Math.max(...prices)

console.log(
    "min " + min
);

console.log(
    "max " + min
);

// нужно найти макс и мин price 
// reduce применять нельза!

let nums = [12,3,57,34,90,1,10,9];
let { odd, even } = nums.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.even.push(num);
    } else {
      acc.odd.push(num);
    }
    return acc;

}, {odd: [] , even:[]});
console.log(even);
console.log(odd);

// в odd сохранить нечетные числа 
// в even сохранить четные числа 
// filter использовать нельзя





const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((i) => {
    arr.forEach((j) => {
        console.log(`${i} * ${j} = ${i * j}`);
    });
});





let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed":
            true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]
let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}

arr.forEach(item => {
    if(item.completed === true){
        a.count++
        a.arr.push(item)
    } else {
        b.count++
        b.arr.push(item)
    }
});

console.log(a);
console.log(b);

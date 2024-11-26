// let count = 1;

// while (count <= 10) {
//     console.log(count);
//     count += 1;
// }

// let number = 10;

// for (let i = 2; i <= number; i += 1){
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }
//  const numbe = 7;
 

// for (let i = 1; i <= 10; i++) {
//     let table = '';
//     table += `${numbe * i}`;
//     console.log(table);
// }

// const numbers = [1, 2, 3, 4, 5];

// let i = 0;

// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// const massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < massive.length; i++) {
//     if (massive[i] === 7) {
//         break;
//     }
//     console.log(massive[i]);
// }

// let n = 20;

// for (let i = 0; i < n; i++) {
//     if (i >= n) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }

//Додаткове завдання
let total = 0;

while (true) {
    let input = prompt("Введіть число чи натисніть Cancel для завершення");
    if (input === null) {
        break;
    }

    total += Number(input); 
}

alert(`Сума чисел ${total}`);
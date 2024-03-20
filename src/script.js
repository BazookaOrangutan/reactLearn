// let user = ['Aboba', 'Amogusovna'];
// let name = user[0];
// let surname = user[1];
// let [name, surname] = user;
// let [name, surname, ...rest] = 'Aboba Amogusovna Epuchivna'.split(' ');
// console.log(name, surname)
// console.log(rest)

// let user ={
//     name: 'Aboba',
//     surname: 'Amogusovna'
// }

// let {name, surname} = user;
//  console.log(name, surname);

// let users = [
//     {
//         name: 'Aboba',
//         surname: 'Amogusovna',
//         age: 25
//     },
//     {
//         name: 'Jessie',
//         surname: 'Pinkman',
//         age: 21
//     }
// ]

// users.map((x) => x.age += 4);
// let student = [...users];
// console.log(student);

// let arr = [1, 8, 5, 3, 12, 6];
// let brr = [...arr] ;
// brr.push(0, 1, 5);
// console.log(...brr);

// let arr = [1, 8, 5, 3, 12, 6];
// let brr = [...arr, 0, 1, 5];
// let pages=[
//     {page: 201, author: 'Pita'},
//     {page: 40, author: 'Waltuh'},
//     {page: 20, author: 'Mike'}
// ]
// brr.sort((a, b) => { return a-b});
// console.log(...brr);
// pages.sort((a, b)=>{return a.page - b.page});
// console.log(...pages);

// let str = ['aaa', 'aAbc', 'cdw', 'aa'];
// str.sort((a, b) => a.localeCompare(b));
// console.log(...str);
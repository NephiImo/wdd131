const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


// array.forEach(element => {
//     if(studentReport < 30) {
        
//     }
// });

const fullName = function fullName (first, last) {
    return '${first} ${last}';
}
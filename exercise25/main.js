// exercise 25

// spread oper

const arr1 = [1,2,3];
const allArays= [...arr1, 4, 5, 6];

console.log(allArays)

// rest opera

function multiplay(...numbers){
    return numbers.reduce((total, num)=> total * num,1)
}
console.log(multiplay(30,2,5))


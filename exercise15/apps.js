
const people = [
    {
        name: "ahmed",
        age: 30,
        city: 'muqdisho'
    },
    {
        name: "ali",
        age: 30,
        city: 'kismaayo'
    },
    {
        name: "bashir",
        age: 30,
        city: 'cadaado'
    },

]




for (let person of people){
    for(let key in person){
        console.log(key, ":", person[key]);
    }
    console.log('----------')
}

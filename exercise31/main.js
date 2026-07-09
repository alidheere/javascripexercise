

async function getUser() {
    
    try{

const response = await fetch('https://jsonplaceholder.typicode.com/users')
if(!response.ok){
    throw new Error(`http error ! status :${response.status} `);
    
}
console.log(response)

const data = await response.json()
console.log(data)

    }catch(error){
        console.log('response data  error')
    }
}
getUser()
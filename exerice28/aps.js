

// exercise28

function fetchUserData(){
  return  new Promise((resolve, reject) => {
        setTimeout(()=>{
            const user = true
            if (user) {
                resolve({id:234, name: 'khaliil', age: 20,})
            } else{
                reject("faild data user")
            }
        },2000)
    })
}

async function displayData() {
    try{
        const user = await fetchUserData();
        console.log(user)
    } catch(error){
        console.log(error)
    }
}
displayData()



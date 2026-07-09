

async function fetchUserData() {
    
    console.log("starting data ....")

    const response = await fetch('./data.json');
    const data = await response.json();
    console.log("response", data);
}

fetchUserData();


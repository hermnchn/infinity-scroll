const imageContainer = doucment.getElementById("image-container");
const loader = document.getElementById("loader");


// Unsplash API
const count = 10;
const apiKey = "ztwGKXCCnXKMSDt-1u_tXIzNZ3XF6mIYALdeLXx6FVA";
const apiUrl = "https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}";

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
    // Catch Error Here
    }
}

// On Load
getPhotos();
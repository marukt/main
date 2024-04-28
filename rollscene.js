



const images = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png', 'image7.png', 'image8.png', 'image9.png'];

function startRoll() {
    const rollSpeeds = [0.5, 0.7, 0.8, 0.9, 1.0, 1.5, 1.7, 1.9];
    
    images.forEach((image, index) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            console.log(`Image ${index + 1}: ${images[randomIndex]}`);
        }, rollSpeeds[index] * 1000);
    });
}

// Call startRoll() when the button is clicked
document.getElementById('startButton').addEventListener('click', startRoll);

function rollImages() {
    images.forEach((image, index) => {
        setTimeout(function () {
            const randomIndex = Math.floor(Math.random() * 9) + 1;
            image.src = `image${randomIndex}.png`;
        }, index * 1000);
    });
}

startButton.addEventListener('click', rollImages);

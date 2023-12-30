const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflake() {
    const x = Math.random() * canvas.width;
    const y = 0;
    const size = Math.random() * 1 + 2;
    const speed = Math.random() * 1 + 0.5;
    snowflakes.push({ x, y, size, speed });
}

function drawSnowflake(flake) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
}

function updateSnowflake(flake) {
    flake.y += flake.speed;
    if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(flake => {
        drawSnowflake(flake);
        updateSnowflake(flake);
    });
    requestAnimationFrame(animate);
}

setInterval(createSnowflake, 500);
animate();

// Получаем элемент canvas и контекст
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d');

// Устанавливаем размер canvas равным размеру окна браузера
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Функция для создания случайного цвета
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Класс для круга
class Circle {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx; // Скорость по горизонтали
        this.dy = dy; // Скорость по вертикали
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

// Создание массива кругов
let circles = [];
for (let i = 0; i < 50; i++) {
    const radius = Math.random() * 30;
    const x = Math.random() * (innerWidth - radius * 2) + radius;
    const y = Math.random() * (innerHeight - radius * 2) + radius;
    const dx = (Math.random() - 0.5) * 4;
    const dy = (Math.random() - 0.5) * 4;
    circles.push(new Circle(x, y, radius, dx, dy, getRandomColor()));
}

// Анимация кругов
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
    }
}

animate();

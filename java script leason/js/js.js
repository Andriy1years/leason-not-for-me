const canvac = document.querySelector("canvas")
const context = canvac.getContext("2d")

canvac.width = 500;
canvac.height = 700;

context.beginPath()

for (let i = 0; i <= 8; i++) {
    context.moveTo(100 * i, 0);
    context.lineTo(0, 200 * i);
};

context.moveTo(0, 20);
context.lineTo(500, 20);


context.moveTo(0, 50);
context.lineTo(500, 50);

context.moveTo(0, 60);
context.lineTo(500, 60);

for (let y = 2; y <= 13; y++) {
    context.moveTo(0, 50 * y);
    context.lineTo(500, 50 * y); 
    context.moveTo(0, (60 - 10) * y + 10);
    context.lineTo(500, (60 - 10) * y + 10);
    
};
context.strokeStyle = '#10ffff';
context.stroke();


context.beginPath()
context.moveTo(440, 0);
context.lineTo(440, 700);
context.lineWidth = 2;
context.strokeStyle = 'red';
context.stroke();
const canvac = document.querySelector("canvas")
const context = canvac.getContext("2d")

canvac.width = 500;
canvac.height = 500;

function drawCubicBezierCurve(startPoint, controlPoint1, controlPoint2, endPoint) {
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    context.bezierCurveTo(controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y);
    context.stroke();
} 

// Define the points
const startPoint = { x: 0, y: 500 };
const controlPoint1 = { x: 500, y: 250 };
const controlPoint2 = { x: 0, y: 250 };
const endPoint = { x: 500, y: 0 };

// Draw the cubic Bezier curve
drawCubicBezierCurve(startPoint, controlPoint1, controlPoint2, endPoint);






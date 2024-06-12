const canvas = document.getElementById('carCanvas');
const ctx = canvas.getContext('2d');

let carX = 0;

function drawCar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 車の本体を描く
    ctx.fillStyle = 'blue';
    ctx.fillRect(carX, 100, 100, 50);

    // 車のタイヤを描く
    ctx.fillStyle = 'black';
    
    // 正しい座標
    /*
    ctx.beginPath();
    ctx.arc(carX + 20, 160, 10, 0, Math.PI * 2, true); // 前のタイヤ
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(carX + 80, 160, 10, 0, Math.PI * 2, true); // 後ろのタイヤ
    ctx.closePath();
    ctx.fill();
    */

    // 間違った座標 (これをコメントアウト)
    ctx.beginPath();
    ctx.arc(carX + 20, 170, 10, 0, Math.PI * 2, true); // 前のタイヤ
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(carX + 80, 170, 10, 0, Math.PI * 2, true); // 後ろのタイヤ
    ctx.closePath();
    ctx.fill();
    
    carX += 2;
    if (carX > canvas.width) {
        carX = -100;
    }
}

function animate() {
    drawCar();
    requestAnimationFrame(animate);
}

// アニメーションを開始
animate();

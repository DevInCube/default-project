import { t } from "./utils/misc";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

function drawCell() { 
    ctx.strokeStyle = "#bbb";
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.7;
    // palette borders
    ctx.strokeRect(10, 10, 100, 100);
}

drawCell();
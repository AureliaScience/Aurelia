export function drawRiskHeatmap(ctx, data) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  data.forEach((point, index) => {
    const color = point.risk > 70 ? 'red' : point.risk > 40 ? 'orange' : 'green';
    ctx.fillStyle = color;
    ctx.fillRect(index * 20, 0, 18, point.risk);
  });
}
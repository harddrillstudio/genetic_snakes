import Config from "./Config"
import Individual from "./Individual"

// DRAW SNAKE
export function drawIndividual(
  ctx: CanvasRenderingContext2D,
  individual: Individual
) {
  let x = Config.globals.origin.x,
    y = Config.globals.origin.y

  ctx.beginPath()
  ctx.moveTo(x, y)

  let points = individual.getPhenotype()
  for (var i = 0; i < individual.segmentCnt; i++) {
    ctx.lineTo(points[i].x, points[i].y)
  }
  ctx.stroke()
}

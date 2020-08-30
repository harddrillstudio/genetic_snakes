import Population from "./Population"
import Individual from "./Individual"

// DRAW SNAKE
function drawIndividual(ctx: CanvasRenderingContext2D, individual: Individual) {
  let x = globals.origin.x,
    y = globals.origin.y

  ctx.beginPath()
  ctx.moveTo(x, y)

  const points = individual.phenotype
  for (var i = 0; i < individual.segment_cnt; i++) {
    ctx.lineTo(points[i].x, points[i].y)
  }
  // ctx.closePath()
  ctx.stroke()
}

let globals = {
  origin: {
    x: 100,
    y: 100,
  },
  target: {
    x: 500,
    y: 200,
  },
}

// Generate population
let population = new Population(globals)
population.print()

function evolution() {
  // for every Individual
  // - select parents
  // - breed them
  // - mutate them
}

// ========= Render

let cv: any = document.getElementById("canvas")
let ctx: CanvasRenderingContext2D = cv.getContext("2d")
// console.log(ctx)
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight

ctx.strokeStyle = "#FF0000"
ctx.lineWidth = 2

// ctx.clearRect()

// origin
ctx.strokeRect(globals.origin.x - 5, globals.origin.y - 5, 10, 10)
// target
ctx.strokeRect(globals.target.x - 5, globals.target.y - 5, 10, 10)

// population
for (let i = 0; i < population.size; i++) {
  drawIndividual(ctx, population.individuals[i])
}

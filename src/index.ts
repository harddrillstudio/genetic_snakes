import Population from "./Population"

var cv: any = document.getElementById("canvas")
var ctx: CanvasRenderingContext2D = cv.getContext("2d")
console.log(ctx)
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight

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

ctx.strokeStyle = "#FF0000"
ctx.lineWidth = 2

// ctx.clearRect()

// origin
ctx.strokeRect(globals.origin.x - 5, globals.origin.y - 5, 10, 10)

ctx.strokeRect(globals.target.x - 5, globals.target.y - 5, 10, 10)

// Generate population
let population = new Population(globals)
population.print()

population.individuals[0].print()

// DRAW SNAKE
let x = globals.origin.x,
  y = globals.origin.y

ctx.beginPath()
ctx.moveTo(x, y)

for (var i = 0; i < population.individuals[0].segment_cnt; i++) {
  let dx =
    Math.cos(population.individuals[0].genes[i]) *
    population.individuals[0].segment_length
  let dy =
    Math.sin(population.individuals[0].genes[i]) *
    population.individuals[0].segment_length

  x += dx
  y += dy

  let nextX = population.individuals[0].genes[i] * 100
  let nextY = population.individuals[0].genes[i] * 50 * Math.random()
  ctx.lineTo(x, y)
}
// ctx.closePath()
ctx.stroke()

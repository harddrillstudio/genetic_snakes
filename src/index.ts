import Population from "./Population"
import Individual from "./Individual"

// DRAW SNAKE
function drawIndividual(ctx: CanvasRenderingContext2D, individual: Individual) {
  let x = globals.origin.x,
    y = globals.origin.y

  ctx.beginPath()
  ctx.moveTo(x, y)

  let points = individual.getPhenotype()
  // console.log(points)
  for (var i = 0; i < individual.segmentCnt; i++) {
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
  mutationRate: 0.1,
  mutationStrength: 50,
  populationSize: 20,
  tournamentSelectSize: 5,
}

// Generate population
let population: any = new Population(globals)

function evolution() {
  for (let i = 0; i < population.size; i++) {
    // Selection
    const parent1 = population.tournamentSelect()
    const parent2 = population.tournamentSelect()

    // Crossover
    population.individuals[i] = population.crossover(parent1, parent2)

    // Mutation
    population.individuals[i].mutate()
  }
  population.computeFitness()
  population.print()
}

// ========= Render
function render() {
  let cv: any = document.getElementById("canvas")
  let ctx: CanvasRenderingContext2D = cv.getContext("2d")
  // console.log(ctx)
  ctx.canvas.width = window.innerWidth
  ctx.canvas.height = window.innerHeight

  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.strokeStyle = "#FF5555"
  ctx.lineWidth = 2

  // ctx.clearRect()

  // origin
  ctx.strokeRect(globals.origin.x - 5, globals.origin.y - 5, 10, 10)
  // target
  ctx.strokeRect(globals.target.x - 5, globals.target.y - 5, 10, 10)
  // Best fitness
  ctx.fillText("BestFit: " + population.getBestFitness().fitness, 500, 50)
  // population
  for (let i = 0; i < population.size; i++) {
    drawIndividual(ctx, population.individuals[i])
  }
}

const fps = 30
function animate() {
  evolution()
  render()

  setTimeout(() => {
    requestAnimationFrame(animate)
  }, 1000 / fps)
}
animate()

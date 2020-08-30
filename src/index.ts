import Population from "./Population"
import Individual from "./Individual"
import Config from "./Config"
import { drawIndividual } from "./RenderUtils"

// Generate population
let population: any = new Population()

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
}

// ========= Render
function render() {
  let fpsLabel: any = document.getElementById("fps-label")
  fpsLabel.innerText = "FPS: " + Config.globals.fps

  let cv: any = document.getElementById("canvas")
  let ctx: CanvasRenderingContext2D = cv.getContext("2d")

  ctx.canvas.width = 640
  ctx.canvas.height = 480

  ctx.strokeStyle = "#FF5555"
  ctx.lineWidth = 2

  // ctx.clearRect()

  // origin
  ctx.strokeRect(
    Config.globals.origin.x - 5,
    Config.globals.origin.y - 5,
    10,
    10
  )
  // target
  ctx.strokeRect(
    Config.globals.target.x - 5,
    Config.globals.target.y - 5,
    10,
    10
  )
  // Best fitness
  ctx.fillText("BestFit: " + population.getBestFitness().fitness, 500, 50)

  // population
  for (let i = 0; i < population.size; i++) {
    drawIndividual(ctx, population.individuals[i])
  }
}

let cv: any = document.getElementById("canvas")
cv.addEventListener("mousemove", (e: any) => {
  if (e.buttons == 1) {
    Config.globals.origin.x = e.offsetX
    Config.globals.origin.y = e.offsetY
  }
  if (e.buttons == 2) {
    Config.globals.target.x = e.offsetX
    Config.globals.target.y = e.offsetY
  }
})

function loop() {
  let rangeInput: any = document.getElementById("fps")
  Config.globals.fps = rangeInput.value
  evolution()
  render()

  setTimeout(() => {
    requestAnimationFrame(loop)
  }, 1000 / Config.globals.fps)
}
loop()

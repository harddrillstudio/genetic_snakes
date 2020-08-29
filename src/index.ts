import Population from "./Population"
import Individual from "./Individual"

var cv: any = document.getElementById("canvas")
var ctx: any = cv.getContext("2d")

ctx.fillStyle = "#FF0000"
ctx.fillRect(0, 0, 150, 75)


let i1 = new Individual()
i1.print()

// Generate population
let population = new Population()
population.print()

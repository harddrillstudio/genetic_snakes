import { random } from "lodash"
import Config from "./Config"

const distance = (x1: number, x2: number, y1: number, y2: number) => {
  const dist = Math.sqrt((x1 - y1) ** 2 + (x2 - y2) ** 2)
  return dist
}

class Individual {
  genes: Array<number>
  phenotype: Array<any>
  fitness: number
  segmentCnt: number
  segmentLength: number
  lastX: number
  lastY: number

  constructor() {
    this.genes = []
    this.phenotype = []
    this.fitness = 0
    this.segmentCnt = 20
    this.segmentLength = 20

    this.generateGenes()
    this.getPhenotype()
    this.getFitness()
  }

  generateGenes() {
    for (var i = 0; i < this.segmentCnt; i++) {
      this.genes.push(Math.random() * Math.PI * 3)
    }
  }

  getPhenotype() {
    this.phenotype = []
    let x = Config.globals.origin.x,
      y = Config.globals.origin.y

    let dx, dy
    for (var i = 0; i < this.segmentCnt - 1; i++) {
      dx = Math.cos(this.genes[i]) * this.segmentLength
      dy = Math.sin(this.genes[i]) * this.segmentLength

      x += dx
      y += dy

      this.phenotype.push({ x: x, y: y })
    }
    dx = Math.cos(this.genes[i]) * this.segmentLength
    dy = Math.sin(this.genes[i]) * this.segmentLength

    x += dx
    y += dy

    this.phenotype.push({ x: x, y: y })
    this.lastX = x
    this.lastY = y

    return this.phenotype
  }

  getFitness() {
    this.getPhenotype()
    this.fitness = distance(
      this.lastX,
      this.lastY,
      Config.globals.target.x,
      Config.globals.target.y
    )
    return this.fitness
  }

  mutate() {
    for (var i = 0; i < this.segmentCnt; i++) {
      if (Math.random() <= Config.globals.mutationRate) {
        this.genes[i] += random(
          -3.14 / Config.globals.mutationStrength,
          3.14 / Config.globals.mutationStrength,
          true
        )
      }
    }
  }

  print() {
    console.log("[Genotype]")
    for (var i = 0; i < this.segmentCnt; i++) {
      console.log(this.genes[i])
    }
    console.log("[Phenotype]")
    for (var i = 0; i < this.segmentCnt; i++) {
      console.log(this.phenotype[i])
    }
    console.log("lastX: " + this.lastX)
    console.log("lastY: " + this.lastY)
    console.log("Fitness: " + this.fitness)
  }
}

export default Individual

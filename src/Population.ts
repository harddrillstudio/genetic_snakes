import Individual from "./Individual"
import { sampleSize, minBy } from "lodash"
import Config from "./Config"

class Population {
  individuals: any
  size: number

  constructor() {
    this.individuals = []
    this.size = Config.globals.populationSize

    for (let i = 0; i < this.size; i++) {
      this.individuals.push(new Individual())
    }
  }

  print() {
    // console.log("Individuals: " + this.individuals)
    // console.log("Size: " + this.size)
    // console.log(this.globals)
    console.log("[Pop] Best fit: " + this.getBestFitness().fitness)
    // console.log("[Pop] Best fit: " + this.getBestFitness().genes)
  }

  getBestFitness() {
    return minBy(this.individuals, function (indiv: Individual) {
      return indiv.fitness
    })
  }

  computeFitness() {
    for (let i = 0; i < this.size; i++) {
      this.individuals[i].getFitness()
    }
  }

  tournamentSelect() {
    let players = sampleSize(
      this.individuals,
      Config.globals.tournamentSelectSize
    )

    let bestPlayer = minBy(players, function (indiv: Individual) {
      return indiv.fitness
    })
    return bestPlayer
  }

  crossover(parent1: Individual, parent2: Individual) {
    let child = new Individual()
    for (let i = 0; i < parent1.segmentCnt; i++) {
      child.genes[i] = (parent1.genes[i] + parent2.genes[i]) / 2
    }
    return child
  }
}

export default Population

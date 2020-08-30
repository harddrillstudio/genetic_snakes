import Individual from "./Individual"

class Population {
  individuals: any
  size: number
  globals: object

  constructor(globals: object) {
    this.individuals = []
    this.size = 20
    this.globals = globals

    for (let i = 0; i < this.size; i++) {
      this.individuals.push(new Individual(globals))
    }
  }

  print() {
    console.log("Individuals: " + this.individuals)
    console.log("Size: " + this.size)
    console.log(this.globals)
  }

  getBestFitness() {}

  computeFitness() {}

  tournamentSelect() {}

  crossover() {}
}

export default Population

class Population {
  individuals: any
  size: number

  constructor() {
    this.individuals = []
    this.size = 20
  }

  print() {
    console.log("Individuals: " + this.individuals)
    console.log("Size: " + this.size)
  }
}

export default Population

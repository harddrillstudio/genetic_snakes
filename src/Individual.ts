const distance = (x1: number, x2: number, y1: number, y2: number) => {
  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

class Individual {
  genes: any
  fitness: number
  segment_cnt: number
  segment_length: number
  globals: object

  constructor(globals: object) {
    this.genes = []
    this.fitness = 0
    this.segment_cnt = 20
    this.segment_length = 20
    this.globals = globals

    this.generateGenes()
  }

  generateGenes() {
    for (var i = 0; i < this.segment_cnt; i++) {
      this.genes.push(Math.random() * Math.PI * 3)
    }
  }

  getPoints() {}

  getFitness() {}

  print() {
    console.log("[Genes]")
    for (var i = 0; i < this.segment_cnt; i++) {
      console.log(this.genes[i])
    }
    console.log("Fitness: " + this.fitness)
  }
}

export default Individual

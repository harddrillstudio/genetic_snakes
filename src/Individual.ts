class Individual {
  genes: any
  fitness: number
  segment_cnt: number
  segment_length: number

  constructor() {
    this.genes = []
    this.fitness = 0
    this.segment_cnt = 20
    this.segment_length = 20

    this.generate_genes()
  }

  generate_genes() {
    for (var i = 0; i < this.segment_cnt; i++) {
      this.genes.push(0.7)
    }
  }

  print() {
    console.log("Genes: " + this.genes)
    console.log("Fitness: " + this.fitness)
  }
}

export default Individual

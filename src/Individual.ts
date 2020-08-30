const distance = (x1: number, x2: number, y1: number, y2: number) => {
  const dist = Math.sqrt((x1 - y1) ** 2 + (x2 - y2) ** 2)
  return dist
}

class Individual {
  genes: Array<number>
  phenotype: Array<any>
  fitness: number
  segment_cnt: number
  segment_length: number
  globals: any
  lastX: number
  lastY: number

  constructor(globals: object) {
    this.genes = []
    this.phenotype = []
    this.fitness = 0
    this.segment_cnt = 20
    this.segment_length = 20
    this.globals = globals

    this.generateGenes()
    this.getPhenotype()
    this.getFitness()
  }


  generateGenes() {
    for (var i = 0; i < this.segment_cnt; i++) {
      this.genes.push(Math.random() * Math.PI * 3)
    }
  }


  getPhenotype() {
    let x = this.globals.origin.x,
      y = this.globals.origin.y

    let dx, dy
    for (var i = 0; i < this.segment_cnt - 1; i++) {
      dx = Math.cos(this.genes[i]) * this.segment_length
      dy = Math.sin(this.genes[i]) * this.segment_length

      x += dx
      y += dy

      this.phenotype.push({ x: x, y: y })
    }
    dx = Math.cos(this.genes[i]) * this.segment_length
    dy = Math.sin(this.genes[i]) * this.segment_length

    x += dx
    y += dy

    this.phenotype.push({ x: x, y: y })
    this.lastX = x
    this.lastY = y
  }


  getFitness() {
    this.fitness = distance(
      this.lastX,
      this.lastY,
      this.globals.target.x,
      this.globals.target.y
    )
    return this.fitness
  }


  mutate() {}


  print() {
    console.log("[Genotype]")
    for (var i = 0; i < this.segment_cnt; i++) {
      console.log(this.genes[i])
    }
    console.log("[Phenotype]")
    for (var i = 0; i < this.segment_cnt; i++) {
      console.log(this.phenotype[i])
    }
    console.log("lastX: " + this.lastX)
    console.log("lastY: " + this.lastY)
    console.log("Fitness: " + this.fitness)
  }
}

export default Individual

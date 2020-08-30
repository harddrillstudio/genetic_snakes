class Config {
  public static globals = {
    fps: 30,
    origin: {
      x: 100,
      y: 100,
    },
    target: {
      x: 500,
      y: 200,
    },
    mutationRate: 0.1,
    mutationStrength: 10,
    populationSize: 20,
    tournamentSelectSize: 5,
  }
}

export default Config

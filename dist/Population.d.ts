import Individual from "./Individual";
declare class Population {
    individuals: any;
    size: number;
    constructor();
    print(): void;
    getBestFitness(): Individual;
    computeFitness(): void;
    tournamentSelect(): any;
    crossover(parent1: Individual, parent2: Individual): Individual;
}
export default Population;

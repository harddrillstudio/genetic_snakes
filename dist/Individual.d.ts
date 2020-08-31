declare class Individual {
    genes: Array<number>;
    phenotype: Array<any>;
    fitness: number;
    segmentCnt: number;
    segmentLength: number;
    lastX: number;
    lastY: number;
    constructor();
    generateGenes(): void;
    getPhenotype(): any[];
    getFitness(): number;
    mutate(): void;
    print(): void;
}
export default Individual;

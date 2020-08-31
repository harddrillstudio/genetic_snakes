declare class Config {
    static globals: {
        origin: {
            x: number;
            y: number;
        };
        target: {
            x: number;
            y: number;
        };
        mutationRate: number;
        mutationStrength: number;
        populationSize: number;
        tournamentSelectSize: number;
    };
}
export default Config;

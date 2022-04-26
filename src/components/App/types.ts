/* The shape of the ChipsPositions object: a dictionary containing in each position one of
these values of Player type: purple, blue, or blank. The shape of the App's Props and State, the former
tells us that we need to provide the number of columns and rows for the app comp to init, while the latter
tells us all the info that will be stored byt eh component. */

export interface ChipsPositions {
    [key: string]: Player;
}

export type Player = 'purple' | 'blue' | '';

export interface Props {
    columns: number;
    rows: number;
}

export interface State {
    chipsPositions: ChipsPositions;
    gameStatus: string;
    playerTurn: Player;
}
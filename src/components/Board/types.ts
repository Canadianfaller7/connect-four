/* This code tells the components consumer that it has to proivde the number of columns and rows
the board will have. Send the chipsPositions object, but this info is used by the Column compenent,
not the Board. To provide an onTileClick function, that will be used by the Tile component to signal when
it is clicked. */
import { ChipsPositions } from '../App/types'

export interface Props {
    columns: number;
    rows: number;
    chipPostitions: ChipsPositions;
    onTileClick: (id: string) => any;
}
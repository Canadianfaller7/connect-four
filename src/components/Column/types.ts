/* This code needs to provide a column number, this value acts as the ID of the element.
It needs to define how many rows the Column compenent will have. The chipsPositions prop
is an object that knows the position of each chip. We will see how this object
is built later. The onTitleClick function is used to let the parent know when the user clicks on a 
specific tile.*/
import { ChipsPositions } from '../App/types'

export interface Props {
    column: number;
    rows: number;
    chipsPositions: ChipsPositions;
    onTileClick: (id: string) => any;
}
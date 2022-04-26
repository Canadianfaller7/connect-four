/* This code tells us it needs to provide a column number. 
This value acts as the ID of the element. It needs to define how many rows the Column component will have.
The chipsPositions prop is an object that knows the position of each chip. 
We will see how this object is built later. For now, you only need to know that it can tell us if there is a chip inside of a Tile or not.
Last, the onTileClick function is used to let the parent know when the user clicks on a specific tile. */
import React from 'react'
import Tile from '../Tile/Tile'
import styles from './Column.module.css'
import { Props } from './types'

export default class Column extends React.PureComponent<Props> {
    render() {
        const { column, rows, chipsPositions, onTileClick } = this.props;
        const tiles = [];

        for (let row = 0; row < rows; row++) {
            const tileId = `${row}:${column}`;
            const chipType = chipsPositions[tileId];
            tiles.push(
                <Tile
                    key={tileId}
                    id={tileId}
                    chipType={chipType}
                    onClick={onTileClick}
                />
            )
        }
        return <div className={styles.column}>{tiles}</div>
    }
}
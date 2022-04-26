/* This code is similar to the Column component’s code, but instead of creating Tiles, 
we create multiple columns, passing the required information to them, and then we render the result. 
The this.renderColumns() method encapsulates this logic. */
import React from 'react'
import Column from '../Column/Column'
import styles from './Board.module.css'
import { Props } from './types'

export default class Board extends React.PureComponent<Props> {
    renderColumns() {
        const { columns, rows, chipPostitions, onTileClick } = this.props;
        const columnsComponents = [];

        for (let column = 0; column < columns; column++) {
            columnsComponents.push(
                <Column
                    key={column}
                    column={column}
                    rows={rows}
                    chipsPositions={chipPostitions}
                    onTileClick={onTileClick}
                />
            )
        }
        return <>{columnsComponents}</>
    }
    render() {
        return <div className={styles.board}>{this.renderColumns()}</div>
    }
}
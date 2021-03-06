/* This is the basic structure of the component: presentational logic to draw/render the 
Board and the Status message,and a default App’s state. 
*/
import React from 'react'
import Board from '../Board/Board'
import { Props, State, ChipsPositions } from './types'
import styles from './App.module.css'

export default class App extends React.PureComponent<Props, State> {
    state: State = {
        chipsPositions: {},
        playerTurn: 'purple',
        gameStatus: "It's purple's turn"
    };

    calculateGameStatus = (playerTurn: string, chipsPositions: ChipsPositions): string => {
        const { columns, rows } = this.props;

        // Check four in a row horizontally
        for (let row = 0; row < rows; row++) {
            let repetitionCountStatus = { playerChip: '', count: 0 };

            for (let column = 0; column < columns; column++) {
                const chip = chipsPositions[`${row}:${column}`];

                /* If there is a chip in that position, and belongs to a player, count
                that chip for that player (either inclrease the count or start over) */
                if (chip && chip === repetitionCountStatus.playerChip) {
                    repetitionCountStatus.count++;
                } else {
                    repetitionCountStatus = { playerChip: chip, count: 1};
                }

                // If the count for a player is 4, that player won
                if (repetitionCountStatus.count === 4) {
                    return `Player ${repetitionCountStatus.playerChip} won!`;
                }
            }
        }
        // check four in a row vertically 
        for (let column = 0; column < columns; column++) {
            let repetitionCountStatus = { playerChip: '', count: 0};

            for (let row = 0; row < rows; row++) {
                const chip = chipsPositions[`${row}:${column}`];
                /* If there is a chip in that position, and belongs to a player, count that chip
                for that player (either increase the count or start over) */
                if (chip && chip === repetitionCountStatus.playerChip) {
                    repetitionCountStatus.count++;
                } else {
                    repetitionCountStatus = { playerChip: chip, count: 1};
                }

                // If the count for a player is 4, that player won
                if (repetitionCountStatus.count === 4) {
                    return `Player ${repetitionCountStatus.playerChip} won!`
                }
            }
        }

        // TODO: Check four in a row diagonally

        return `It's ${playerTurn}'s turn`;
    };

    /* First, it needs the last empty Tile of the column that was clicked. And it gets the column number by parsing the tileId.
Then, it adds a chip to the selected tile depending on the player’s turn, known by the App component alone. And it recalculates the game status.
Last, it stores all the new information in the component’s state, re-rendering the entire application if something changes. React will decide this for us.*/
    handleTileClick = (tileId: string) => {
        const { chipsPositions, playerTurn } = this.state;

        // Get the last empty tile of the column
        const column = parseInt(tileId.split(":")[1]);
        let lastEmptyTileId = this.getLastEmptyTile(column);

        // If there is no empty tile in the column, do nothing
        if (!lastEmptyTileId) {
            return;
        }

        // Add chip to empty tile
        const newChipsPositions = {
            ...chipsPositions,
            [lastEmptyTileId]: playerTurn
        };

        
        // Change player turn 
        const newPlayerTurn = playerTurn === 'purple' ? 'blue' : 'purple';

        // Calculate game status
        const gameStatus = this.calculateGameStatus(newPlayerTurn, newChipsPositions);

        // Save new state
        this.setState({ chipsPositions: newChipsPositions, playerTurn: newPlayerTurn, gameStatus });
    };
    getLastEmptyTile(column: number) {
        const { rows } = this.props;
        const { chipsPositions } = this.state;

        for (let row = rows - 1; row >= 0; row--) {
            const tileId = `${row}:${column}`;

            if (!chipsPositions[tileId]) {
                return tileId;
            }
        }
    }

    renderBoard() {
        const { columns, rows } = this.props;
        const { chipsPositions } = this.state;
        return (
            <Board
                columns={columns}
                rows={rows}
                chipPostitions={chipsPositions}
                onTileClick={this.handleTileClick}
            />
        )
    }
    renderStatusMessage() {
        const { gameStatus } = this.state;
        return <div className={styles.statusMessage}>{gameStatus}</div>
    }

    render() {
        return (
            <div className={styles.app}>
                {this.renderBoard()}
                {this.renderStatusMessage()}
            </div>
        )
    }
}
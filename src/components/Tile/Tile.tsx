/* the Tile component is a presentational component in charge of drawing tiles on your board. 
It decides if a Chip is present by checking the value of the chipType prop, and it sets 
the CSS class based on its value. Last, when clicked, it triggers the function set to the onClick 
prop, sending the Tile’s id as parameter. */

import React from 'react'
import classNames from 'classnames'
import styles from './Tile.module.css'
import { Props } from './types'

export default class Tile extends React.PureComponent<Props> { /* notice that we attached the Props interface to the React.PureComponent definition? 
This is how you type React class. The IDE will understand this and will tell you the type of each 
of the props in the compoennt. You can see this by hovering you your mouse over this.props value in the first line of the render() method. */
    render() {
        const { id, chipType, onClick = () => {} } = this.props
        const chipCssClass = classNames(styles.chip, chipType === 'purple' ? styles.purple : styles.blue)

        return (
            <div className={styles.tile} onClick={() => onClick(id)}>
                {chipType && <div className={chipCssClass} />}
            </div>
        )
    }
}
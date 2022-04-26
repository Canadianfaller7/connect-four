/* by tpying the title components props, we define its interface, or contract. 
It tells the component consumer it has to provide an id through the components props, 
it could send a chipType to the component. Tiles can have a Chip or not. It has to attach a function
to the onClick prop, that will be triggered when the user clicks on a Tile*/
export interface Props {
    id: string;
    chipType?: string;
    onClick: (id: string) => any;
}
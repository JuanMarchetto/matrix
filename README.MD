you can install this as a npm module:

npm i matrix-component

The Matrix component expect two arguments:

- list: is a two dimentional array that contains the definition of each cell. Each cell can contain styles, classes and html content, also you can pass an onClick: property for setup the onClick event for that element

for example, this whill produce a 3x3 grid whith the center square pinted in red whit a bold X inside:
const Html = () => <strong onClick = {()=>{handleClick()}}>X</strong>
list = [
	[{}, {}, {}],
	[
		{},
		{
			styles: { background: 'red' },
			classes: 'class-for-this-cell',
			childs: <Component handleClick = {()=>{handleClick()}} />
		},
		{}
	],
	[{}, {}, {}]
];

- params: allows to stablish classes and styles for the container, rows and childs level, also onClick events for all childs

for example this whill add the "container" class to the matrix container, and a class "row" for each row, and a "child" class for each clid, also the color:red property is added to each child:

let params = {
	container: {
		styles: {},
		classes: "cont"
		},
	rows: {
		styles: {},
		classes: "row"
		},
	cells: {
		styles: {color:"red"},
		classes: "child",
		onClick: ()=>{}
		}
};

The cell definition will owerryde any collitioned property

## Helpers

Also we have helpers, the toGrid helper returns a two dimentional array from a regular array
usage:
import Matrix, { toGrid } from "matrix-component";
const list = toGrid(
      shuffle([...Array.from(Array(2).keys()), ...Array.from(Array(2).keys())])
    );

you can find a more real example here: https://github.com/JuanMarchetto/memo
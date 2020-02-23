The Matrix component expect two arguments:

- list: is a two dimentional array that contains the definition of each cell. Each cell can contain styles, classes and html content

for example, this whill produce a 3x3 grid whith the center square pinted in red whit a bold X inside:
list = [
[{}, {}, {}],
[{},
{ styles: { background: "red" }, classes:"class-for-this-cell", html: "<strong>X</strong>" },
{}],
[{}, {}, {}]
];

- params: allows to stablish classes and styles for the container, rows and childs level

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
childs: {
styles: {color:"red"},
classes: "child"
}
};

The cell definition will owerryde any collitioned property

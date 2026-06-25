// console.log(window);
// console.log(React);

// let h1 = document.createElement("h1");
// h1.textContent = "World";
// document.body.append(h1);



/*let rh1 = React.createElement("h1",{},"React Element ")

let RealElem = document.querySelector("#root");
let RootOfDom = ReactDOM.createRoot(RealElem);

RootOfDom.render(rh1)  */

// console.log("Real dom ->", h1);
// console.log("Virtual Dom",rh1);

// import {a, sum} from './page.js'

// console.log(a);


// let re = sum(10,20);
// console.log(re);


let div = React.createElement('div',{},
    React.createElement('h1',{},
        React.createElement('span',{},"i m span")
    )
)

let root = document.querySelector("#root");

let RootOfDom = ReactDOM.createRoot(root);
RootOfDom.render(div);

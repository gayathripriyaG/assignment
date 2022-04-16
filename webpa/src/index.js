import "./index.css"
import React from "react"
import ReactDOM  from "react-dom"

// const h1 = document.createElement("h1")
// h1.innerText = "Hello Webpack.."
// h1.classList.add("colorforh1") //creates class called colorforh1.
// document.getElementById("root").appendChild(h1);

ReactDOM.render(
    <h1 className="colorforh1">
      Hello Webpack
      <i>Italic text</i>
    </h1>,
    document.getElementById("root")
  )
// import React from 'react';
import './Playground.css';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

import './App.css';  // contains .diagram-component CSS

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is discussed below.
 */

const initDiagram = () => {
  const diagram = new go.Diagram();

  const node = new go.Node("Auto").add(
    new go.Shape("RoundedRectangle",
        { fill: "lightblue", strokeWidth: 3 }),
    new go.TextBlock("test!",
        { margin: 5 })
  )
  const shape = new go.Shape();
  shape.figure = "RoundedRectangle";
  shape.fill = "lightblue";
  shape.strokeWidth = 3;
  node.add(shape);
  const textblock = new go.TextBlock();
  textblock.text = "This is a test!";
  textblock.margin = 5;
  node.add(textblock);
  diagram.add(node);
  return diagram;
}

// render function...
const Playground = ()  => {
  return (
    <div>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
      />
    </div>
  );
}


Playground.propTypes = {

};


export default Playground;

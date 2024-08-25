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
  const diagram = new go.Diagram({
    // Un écouteur d'événement pour l'événement `InitialLayoutCompleted`
  
    // Configuration du comportement de la molette de la souris pour zoomer
    "toolManager.mouseWheelBehavior": go.WheelMode.Zoom,
  
    // Définir les données d'un nœud type à créer en cliquant
    "clickCreatingTool.archetypeNodeData": { text: "new node" },

    "isReadOnly": true
  });

  diagram.nodeTemplate =
    new go.Node("Auto")
      .add(
        new go.Shape("RoundedRectangle", { fill: "lightgray" ,stroke: "black",        // Couleur de la bordure
          strokeWidth: 2,         // Épaisseur de la bordure
          parameter1: 1,
          width: 100,
          height: 50,
          }, ),
        new go.TextBlock()
          .bind("text", "key")
      )
  const nodeDataArray = [
    { key: "Alpha" },
    { key: "Beta", parent: "Alpha" },
    { key: "Gamma", parent: "Beta" },
    { key: "Delta", parent: "Beta" },
    { key: "Epsilon", parent: "Alpha" },
    { key: "Zeta", parent: "Epsilon" },
    { key: "Eta", parent: "Epsilon" },
    { key: "Theta", parent: "Epsilon" }
  ];
  diagram.model = new go.TreeModel(nodeDataArray);

  const linkDataArray = [
    { from: "Alpha", to: "Beta" },
    { from: "Beta", to: "Gamma" },
    { from: "Beta", to: "Delta" },
    { from: "Alpha", to: "Epsilon" },
    { from: "Epsilon", to: "Zeta" },
    { from: "Epsilon", to: "Eta" },
    { from: "Epsilon", to: "Theta" }
  ];
  
diagram.linkTemplate =
  new go.Link({ routing: go.Routing.Orthogonal, corner: 5 })
    .add(
      new go.Shape()
    );
    diagram.layout = new go.TreeLayout({ angle: 90 });


diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    return diagram;
}

// render function...
const Playground = ()  => {
  return (
    <div id='MyDiagram'>
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

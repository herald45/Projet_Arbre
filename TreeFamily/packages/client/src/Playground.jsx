// import React from 'react';
import './Playground.css';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

import './App.css';  // contains .diagram-component CSS

// ...

/**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
 */
function initDiagram() {
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram =
    new go.Diagram(
      {
        'undoManager.isEnabled': true,  // must be set to allow for model change listening
        // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
        model: new go.GraphLinksModel(
          {
            linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
          })
      });

  // define a simple Node template
  diagram.nodeTemplate =
    new go.Node('Auto')  // the Shape will go around the TextBlock
      .bindTwoWay('location', 'loc', go.Point.parse, go.Point.stringify)
      .add(
        new go.Shape('RoundedRectangle',
            { name: 'SHAPE', fill: 'white', strokeWidth: 0 })
          // Shape.fill is bound to Node.data.color
          .bind('fill', 'color'),
        new go.TextBlock({ margin: 8, editable: true })  // some room around the text
          .bindTwoWay('text')
      );

  return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is discussed below.
 */
function handleModelChange() {
  alert('GoJS model changed!');
}


// render function...
const Playground = ()  => {
  return (
    <div>
      ...
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
        nodeDataArray={[
          { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
          { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
          { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
          { key: 3, text: 'Delta', color: 'pink', loc: '150 150' }
        ]}
        linkDataArray={[
          { key: -1, from: 0, to: 1 },
          { key: -2, from: 0, to: 2 },
          { key: -3, from: 1, to: 1 },
          { key: -4, from: 2, to: 3 },
          { key: -5, from: 3, to: 0 }
        ]}
        onModelChange={handleModelChange}
      />
      ...
    </div>
  );
}


Playground.propTypes = {

};


export default Playground;

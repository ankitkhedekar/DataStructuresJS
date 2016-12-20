//

let MakeGraph = () =>{
  let graph = {};


  graph.contains = (node) =>{
    return !!graph[node]; //double !! to return only true/false and not the value
  }

  graph.addVertex = (node) => {
    if(!graph.contains(node)){
      graph[node] = {edges: {}};
    }
  }

  graph.removeVertex = (node) => {
    if(graph.contains(node)){
      for(let connectedNode in graph[node].edges) {
        graph.removeEdge(node, connectedNode);
      }
      delete graph[node];
    }
  }

  graph.addEdge = (startNode, endNode) => {
    if(graph.contains(startNode) && graph.contains(endNode)){
      graph[startNode].edges[endNode] = true;
      graph[endNode].edges[startNode] = true;
    }
  }

  graph.removeEdge = (startNode, endNode) => {
    if(graph.contains(startNode) && graph.contains(endNode)){
      delete graph[startNode].edges[endNode];
      delete graph[endNode].edges[startNode];
    }
  }

  graph.hasEdge = (startNode, endNode) => {
    return graph.contains(startNode) && graph.contains(endNode) && graph[startNode].edges[endNode] === true
  }

  return graph;
}

/*let devBook = MakeGraph();

devBook.addVertex('James Gosling');
devBook.addVertex('Guido Rossum');
devBook.addVertex('Linus Torvalds');
devBook.addVertex('Michael Olorunnisola');

console.log("added nodes", devBook);

devBook.addEdge('James Gosling', 'Guido Rossum');
devBook.addEdge('Linus Torvalds', 'Michael Olorunnisola');

console.log("added edges", devBook);

devBook.removeEdge('Linus Torvalds', 'Michael Olorunnisola');
console.log("removed edge", devBook);

devBook.removeVertex('Linus Torvalds');
console.log("removed vertex", devBook);

console.log(devBook.hasEdge('James Gosling', 'Guido Rossum'));
console.log(devBook.hasEdge('James Gosling', 'Michael Olorunnisola'));*/
//addNode is O(1)

//addEdge is O(1)

//removeNode is O(n)

//removeEdge is O(1)

//contains is O(1)

//hasEdge is O(1)
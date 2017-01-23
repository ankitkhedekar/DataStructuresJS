//https://mgechev.github.io/javascript-algorithms/graphs_searching_bfs.js.html
const queue = require('./queue');

function buildPath(path, targetNode){
  path.push(targetNode);
  var oPath = [];
  var tmp;
  for(var i=0; i<=path.length-1; i++){
    if(path[i] != tmp){
      tmp = path[i];
      oPath.push(tmp);
    }
  }
  return oPath;
}

function bfs(graph, startNode, targetNode){
  debugger;
  var path = [];
  var visited = [];
  var current, previous;
  var nodeQueue = new queue();
  nodeQueue.enqueue(startNode);
  visited[startNode] = true;
  path.push(startNode);
  while(nodeQueue.size()){
    previous = current;
    current = nodeQueue.dequeue();
    if(current === targetNode){
      return console.log("path found", buildPath(path, targetNode));
    }

    for(var i=0; i<graph.length ; i++){
      if(i!== current && graph[current][i] && !visited[i]){
        visited[i] = true;
        path.push(current);
        nodeQueue.enqueue(i);
      }
    }
  }
  return console.log("path not found");
}

//sample graph
const graph = [[1, 1, 0, 0, 1, 0],
             [1, 0, 1, 0, 1, 0],
             [0, 1, 0, 1, 0, 0],
             [0, 0, 1, 0, 1, 1],
             [1, 1, 0, 1, 0, 0],
             [0, 0, 0, 1, 0, 0]];

//check if there exists a path in graph between start and end
bfs(graph, 1, 5);
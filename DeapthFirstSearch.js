const stack = require('./stack');

function dfs(graph, start, end){
  let nodeStack = new stack();
  let visited = [];

  nodeStack.push(start);
  visited[start] = true;

  while(nodeStack.top() >= 0){
    let tmpNode = nodeStack.pop();

    if(end === tmpNode){
      console.log("path found");
      return true;
    }

    for(let i=0; i<=graph[tmpNode].length - 1; i++){
      if(graph[tmpNode][i] === 1 && !visited[i]){
        nodeStack.push(i);
      }
    }

    visited[tmpNode] = true;

    console.log("path does not exists");
    return false;

  }

}


//sample graph
const graph = [[1, 1, 0, 0, 1, 0],
             [1, 0, 1, 0, 1, 0],
             [0, 1, 0, 1, 0, 0],
             [0, 0, 1, 0, 1, 1],
             [1, 1, 0, 1, 0, 0],
             [0, 0, 0, 1, 0, 0]];

//check if there exists a path in graph between start and end
dfs(graph, 1, 5);
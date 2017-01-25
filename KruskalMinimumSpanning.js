
function getEdgeList(graph){
  var edgeList = [];
  for(var i=0; i<= graph.length-1; i++){
    for(var j=0; j<=graph.length-1; j++){
      if(graph[i][j] > 0){
        edgeList.push({
          start: i,
          end: j,
          weight: graph[i][j]
        });
        graph[j][i] = 0;
      }
    }
  }

  return edgeList;
}

function KruskalMST(graph){
  var edges = getEdgeList(graph);
  var visited = [];
  var MST = [];
  var cost = 0;
  var pointer = 0;

  edges.sort(function(a, b){
    return a.weight - b.weight;
  });

  while(visited.length < graph.length){
    var edge = edges[pointer];
    if(visited.indexOf(edge.start) === -1 || visited.indexOf(edge.end) === -1){
      if(visited.indexOf(edge.start) === -1 ){
        visited.push(edge.start);
      }

      if(visited.indexOf(edge.end) === -1 ){
        visited.push(edge.end);
      }
      MST.push(edge);
      cost += edge.weight;
      pointer++;
    }
  };

  //console.log("visited", visited);
  //console.log("MST", MST);
  //console.log("total cost", cost);
}

//sample graph
const graph = [[0, 1, 0, 0, 5, 0],
             [1, 0, 1, 0, 1, 0],
             [0, 1, 0, 3, 0, 0],
             [0, 0, 3, 0, 1, 2],
             [5, 1, 0, 1, 0, 0],
             [0, 0, 0, 2, 0, 0]];

KruskalMST(graph);
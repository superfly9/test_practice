// A -- B -- C
// |    |
// D -- E -- F

//      A
//   D      B
//      E     C
//      F

export const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

// 방문 순서 :  ['A', 'B', 'D', 'C', 'E', 'F']
export const result = ["A", "B", "D", "C", "E", "F"];
export const BFS = (graph, startNode) => {
  let queue = [startNode]; // 탐색할 경로
  let path = []; // 이미 탐색한 경로
  const visited = new Set();

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      path.push(currentNode);
      queue = [...queue, ...graph[currentNode]];
    }
  }
  return path;
};

BFS(graph, "A");

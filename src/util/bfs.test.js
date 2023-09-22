import { BFS, graph, result } from "./bfs";

describe("BFS의 동작을 체크한다.", () => {
  test("지나온 경로를 확인할 수 있다.", () => {
    expect(BFS(graph, "A")).toEqual(result);
  });
});

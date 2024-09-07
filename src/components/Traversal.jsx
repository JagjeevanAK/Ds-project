import { useEffect } from "react";
import scrollreveal from "scrollreveal";
import Code from "./Code";
import './line.css';

export default function Traversal(){
    useEffect(() => {
        scrollreveal().reveal(".reveal", {
          origin: "bottom",
          distance: "50px",
          duration: 1000,
          delay: 200,
          reset: true, 
        });
    }, []);

    return(
        <div>
            <div className="base">
                <h4 id="GT" className="reveal headline">Graph Traversal Techniques</h4>
                <div className="reveal line"></div>
            </div>
            <div className="reveal">
                Graph traversal means visiting all the nodes
                of the graph. A structured system is required
                by many applications of graphs to examine
                the vertices and edges of a graph.
            </div>
            <div className="reveal mt-4">
                There are two graph traversal methods as follows:
                <ol className="list-decimal list-inside">
                    <li>
                        Breadth First Search (BFS)
                    </li>
                    <li>
                        Depth First Search (DFS)
                    </li>
                </ol>
            </div>
            <div className="mt-14">
                <div id="bfs" className="reveal subh mb-2">Breadth First Search:</div>
                <div className="reveal">
                    <p>
                    Given an input graph G = (V, E) and a source
                    vertex S, from where the searching starts. We
                    mark the vertex S as visited and then visit all
                    of its adjacent nodes. Now one of the adjacent
                    nodes is selected for exploration. The
                    procedure is repeated until all the nodes are
                    visited. Thus, BFS systematically traverses
                    the edges of G to explore every vertex that is
                    reachable from S. A queue is used to keep a
                    track of the progress of traversing the
                    neighbour nodes. Implementation of BFS is as
                    shown in Fig. 7.
                    </p>
                </div>
                <div className="reveal fig">Fig.7 Implementation of BFS</div>
                <div className="mt-6 text-xl font-semibold reveal">Algorithm:</div>
                <div>
                    <ol className="reveal list-inside list-decimal ml-8">
                        <li>
                            Input the vertices of the graph and its
                            edges G = (V, E)
                        </li>
                        <li>
                            Input the source vertex and assign it to the
                            variable S.
                        </li>
                        <li>
                            Add or push the source vertex to the
                            queue.
                        </li>
                        <li>
                            Repeat the steps 5 and 6 until the queue is
                            empty (i.e., front {">"} rear)
                        </li>
                        <li>
                            Pop the front element of the queue and
                            mark it as visited.
                        </li>
                        <li>
                            Push the vertices, which are neighbours to
                            just popped elements, if it is not in the queue
                            and is not visited.
                        </li>
                    </ol>
                </div>
                <div>
                    <div className="flex justify-center mt-6 text-xl font-semibold reveal">Code (BFS):</div>
                    <div className="reveal">
                        <Code codeSnippets={bfs} />
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <div id="dfs" className="reveal subh mb-2">Depth First Search:</div>
                <div className="reveal">
                    <p>
                        Given an input graph G = (V, E) and a source
                        vertex S, from where the searching starts. We
                        mark the vertex S as visited and then visit one
                        of its adjacent nodes. We will mark this
                        adjacent node as visited. The procedure is
                        repeated until all the vertices of the graph are
                        visited recursively. A stack is used in the
                        implementation of DFS. Implementation of
                        DFS is as shown in Fig. 8.
                    </p>
                    <div className="fig reveal">Fig. 8 Implementation of DFS</div>
                </div>
                <div className="mt-6 text-xl font-semibold reveal">Algorithm:</div>
                <div>
                    <p>
                        <ol className="reveal list-inside list-decimal ml-8">
                            <li>
                                Input the vertices and edges of the graph G = (V, E).
                            </li>
                            <li>
                                Input the source vertex and assign it to the
                                variable S.
                            </li>
                            <li>
                                Push the source vertex to the stack.
                            </li>
                            <li>
                                Repeat the steps 5 and 6 until the stack is
                                empty.
                            </li>
                            <li>
                                Pop the top element of the stack and mark
                                it is visited.
                            </li>
                            <li>
                                Push the vertices which are neighbours to
                                just popped elements, if it is not in the stack
                                and is not visited.
                            </li>
                            <li>
                                Exit.
                            </li>
                        </ol>
                    </p>
                </div>
                <div>
                    <div className="flex justify-center mt-6 text-xl font-semibold reveal">Code (DFS):</div>
                    <div className="reveal">
                        <Code codeSnippets={dfs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const bfs={
    cpp:`
    #include <iostream>
    #include <unordered_map>
    #include <unordered_set>
    #include <queue>
    #include <vector>
    using namespace std;

    // BFS function using a queue
    unordered_set<int> bfs(const unordered_map<int, vector<int>>& graph, int start_node) {
        unordered_set<int> visited;
        queue<int> q;
        q.push(start_node);
        
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            if (visited.find(node) == visited.end()) {
                cout << node << " ";  // Process the node
                visited.insert(node);
                for (int neighbor : graph.at(node)) {
                    if (visited.find(neighbor) == visited.end()) {
                        q.push(neighbor);  // Enqueue neighbors
                    }
                }
            }
        }
        return visited;
    }

    int main() {
        // Example graph representation
        unordered_map<int, vector<int>> graph = {
            {0, {1, 4}},
            {1, {0, 2}},
            {2, {1, 3}},
            {3, {2, 4}},
            {4, {0, 3}}
        };
        bfs(graph, 0);
        return 0;
    }`,
    python:`
    from collections import deque

    def bfs(graph, start_node):
        visited = set()
        queue = deque([start_node])
        
        while queue:
            node = queue.popleft()
            if node not in visited:
                print(node, end=' ')  # Process the node
                visited.add(node)
                queue.extend(neighbor for neighbor in graph[node] if neighbor not in visited)
        
        return visited

    # Example usage
    graph = {
        0: [1, 4],
        1: [0, 2],
        2: [1, 3],
        3: [2, 4],
        4: [0, 3]
    }
    bfs(graph, 0)`
}

const dfs={
    cpp:`
    #include <iostream>
    #include <unordered_map>
    #include <unordered_set>
    #include <queue>
    #include <vector>
    using namespace std;

    // BFS function using a queue
    unordered_set<int> bfs(const unordered_map<int, vector<int>>& graph, int start_node) {
        unordered_set<int> visited;
        queue<int> q;
        q.push(start_node);
        
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            if (visited.find(node) == visited.end()) {
                cout << node << " ";  // Process the node
                visited.insert(node);
                for (int neighbor : graph.at(node)) {
                    if (visited.find(neighbor) == visited.end()) {
                        q.push(neighbor);  // Enqueue neighbors
                    }
                }
            }
        }
        return visited;
    }

    int main() {
        // Example graph representation
        unordered_map<int, vector<int>> graph = {
            {0, {1, 4}},
            {1, {0, 2}},
            {2, {1, 3}},
            {3, {2, 4}},
            {4, {0, 3}}
        };
        bfs(graph, 0);
        return 0;
    }`,
    python:`
    from collections import deque

    def bfs(graph, start_node):
        visited = set()
        queue = deque([start_node])
        
        while queue:
            node = queue.popleft()
            if node not in visited:
                print(node, end=' ')  # Process the node
                visited.add(node)
                queue.extend(neighbor for neighbor in graph[node] if neighbor not in visited)
        
        return visited

    # Example usage
    graph = {
        0: [1, 4],
        1: [0, 2],
        2: [1, 3],
        3: [2, 4],
        4: [0, 3]
    }
    bfs(graph, 0)`
}
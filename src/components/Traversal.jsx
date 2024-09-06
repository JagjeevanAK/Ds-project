import { useEffect } from "react";
import scrollreveal from "scrollreveal";

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
            <div id="GT" className="reveal text-2xl my-8 font-semibold">Graph traversal techniques</div>
            <div>
                Graph traversal means visiting all the nodes
                of the graph. A structured system is required
                by many applications of graphs to examine
                the vertices and edges of a graph.
            </div>
            <div className="reveal">
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
            <div>
                <div id="bfs" className="reveal font-semibold">Breadth First Search:</div>
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
                <div className="reveal flex justify-center font-semibold my-8">Fig.7 Implementation of BFS</div>
                <div className="reveal font-semibold">Algorithm:</div>
                <div>
                    <ol className="reveal list-inside list-decimal">
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
                <div className="reveal my-6 font-semibold">Code:</div>
            </div>
            <div>
                <div id="dfs" className="reveal font-semibold text-2xl">Depth First Search:</div>
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
                    <div className="flex justify-center font-semibold my-7">Fig. 8 Implementation of DFS</div>
                </div>
                <div className="reveal font-semibold">Algorithm:</div>
                <div>
                    <p>
                        <ol className="reveal list-inside list-decimal">
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
                <div className="reveal my-6 font-semibold">Code:</div>
            </div>
        </div>
    )
}
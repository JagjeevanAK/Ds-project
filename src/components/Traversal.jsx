export default function Traversal(){
    return(
        <div>
            <div className="text-2xl my-8 font-semibold">Graph traversal techniques</div>
            <div>
                Graph traversal means visiting all the nodes
                of the graph. A structured system is required
                by many applications of graphs to examine
                the vertices and edges of a graph.
            </div>
            <div>
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
        </div>
    )
}
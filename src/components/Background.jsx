export default function Background(){
    return(
        <div>
            <div className="my-10 text-2xl">Background</div>
            <div>
                What is a Graph?
            </div>
            <div>
                <p>
                    Graph is a pictorial representation of a set of
                    objects, where the object pairs are connected
                    by links. The interconnected objects are called
                    vertices or nodes of a graph whereas the links
                    connecting these vertices are known as edges.
                </p>
                <p>
                    It is an ordered pair of sets (V, E) where V=
                    set of vertices and E = set of edges joining the
                    vertex pairs. E is a subset of V x V. Simply
                    speaking, each edge connects two vertices,
                    including a case, when a vertex is connected
                    to itself (such an edge is called a loop). Graph
                    structure is shown in Fig. 1.
                </p>
                <p>
                    From the graph shown in Fig. 1, we can write that, <br />
                    V = {"{a, b, c, d, e}"} <br />
                    E = {"{ab, ac, bd, cd, de}"}
                </p>
                <p className="flex justify-center mt-10">Fig.1 Graph Structure</p>
                <p className="pt-4">
                    Adjacency relation: Node B is adjacent to A if
                    there is an edge from A to B. <br />
                    Paths and reachability: A path from A to B is a
                    sequence of vertices A1… A such that there is
                    an edge from A to A1, from A1 to A2… from A
                    to B. Vertex B is said to be reachable from A if
                    there is a path from A to B.
                </p>
            </div>
            <div>
                Graph Operations
            </div>
            <div className="pt-4">
                The basic primary operations provided by a
                graph data structure are as follows:
                <ul className="pt-4 ml-8 list-disc list-inside">
                    <li>
                        Addition of a vertex: adding a vertex to
                        a graph when needed.
                    </li>
                    <li>
                        Removal of a vertex: removing an
                        existing vertex from the graph.
                    </li>
                    <li>
                        Get vertex value: returns the value
                        linked with a particular vertex.
                    </li>
                    <li>
                        Set vertex value: assigns the value for
                        a particular vertex.
                    </li>
                    <li>
                        Addition of an edge: adding an edge
                        between two vertices of a graph.
                    </li>
                    <li>
                        Removal of an edge: removing an
                        edge that exists between two vertices
                        as required.
                    </li>
                    <li>
                        Get edge value: returns the value
                        linked with the edge joining any two
                        vertices.
                    </li>
                    <li>
                        Set edge value: assigns the value to
                        an edge connecting the given vertices.
                    </li>
                    <li>
                        &#8226; Displaying a vertex: display required
                        vertex of a graph.
                    </li>
                    <li>
                        Finding all the neighbouring vertices Y
                        such that there exists an edge from
                        the vertex X to vertex Y.
                    </li>
                    <li>
                        Testing whether vertex X is adjacent to
                        vertex Y which means confirming the
                        existence of an edge from X to Y.
                    </li>
                    <li>
                        Counting the number of vertices and
                        number of edges present in the given
                        graph.
                    </li>
                </ul>
            </div>
            <div className="mt-5">Types of Graphs :</div>
            <span>1{")"} Directed Graph: </span>
            <span>
                A directed graph is a graph where all the edges are directed from
                one vertex to another. The order of vertices in
                the pairs in the edge set matters in this type of
                graph. Thus, a is adjacent to b only if the edge
                set consists of a pair {"(a, b)"}. In directed graphs
                edges are drawn as arrows indicating the
                direction. A directed graph is sometimes
                called a digraph or a directed network.
                Directed graphs can be cyclic or acyclic.
                Cycle is a path along the directed edges from
                a vertex to itself. Example of a directed graph
                is shown in Fig. 2.
            </span>
            <div className="flex justify-center my-10">Fig. 2 Directed graph</div>
            <span>2{")"} Undirected Graph: </span>
            <span>
                A directed graph is a
                graph where all the edges are bidirectional.
                The order of vertices in the pairs in the edge
                set doesn‟t matter in this type of graph. In
                undirected graphs edges are drawn as
                straight lines. Example of an undirected graph
                is shown in Fig.
            </span>
            <div className="my-10 flex justify-center">Fig. 3Undirected graph</div>
            <span>3{")"} Weighted Graph: </span>
            <span> A weighted graph is a
                graph where each edge has an associated
                numerical value, called weight. Weighted
                graphs may be either directed or undirected.
                The weight of the edge is often referred to as
                the “cost” of the edge. Example of a weighted
                graph is shown in Fig. 4.
            </span>
            <div className="my-10 flex justify-center">Fig. 4 Weighted graph</div>
            <span>4{")"} Space Graphs and Dense Graphs:</span>
            <span>
                Consider a graph having n nodes. A graph is
                said to be a sparse graph if it has less than n2
                edges. For example, a graph with n nodes
                and n edges or even 2n edges is said to be
                sparse. Whereas, a graph with a close to
                maximum number of edges is said to be dense.
            </span>
        </div>
    )
}
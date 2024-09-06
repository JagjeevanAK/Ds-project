export default function Representation(){
    return(
        <div>
            <div className="my-10 text-2xl">Graph Representation</div>
            <div>
                Graph is a mathematical structure and finds
                its applications in various Computer fields.
                The graph problems should be represented in
                computer memory using suitable data
                structures. The choice of graph representation
                is said to be situation specific. It totally
                depends on the type of operations to be
                performed and ease of use. Simple way to
                represent a graph is using Edge List.
            </div>
            <div className="mt-6">
                <span className="font-semibold">Edge List: </span>
                <span>
                    This structure simply maintains
                    and stores the vertices and the edges into
                    unsorted sequences. Advantage: Easy to
                    implement and iterate over small edges.
                </span>
                <p>
                    Disadvantage: Finding the edges incident on
                    a given vertex is inefficient since it requires
                    examining the entire edge sequence. That
                    means -
                    <ul className="ml-8 list-disc list-inside">
                        <li>
                            Difficult to tell how many edges a
                            vertex touches.
                        </li>
                        <li>
                            Difficult to tell if an edge exists, say
                            from A to B.
                        </li>
                    </ul>
                    Further, Adjacency list and Adjacency matrix
                    are the two standard and widely used ways
                    for the representation of a graph.
                </p>
                <div className="flex justify-center text-2xl font-bold my-8">Code{"(Edge list)"}</div>
            </div>
            <div>
                <span className="font-semibold">Adjacency List: </span>
                <span>
                    This list structure extends
                    the edge list structure by adding incidence
                    containers to each vertex. Here an array of
                    linked lists is used. Array size will be equal to
                    the number of vertices. Consider an array A[ ].
                    An entry A[i] represents the linked list of
                    vertices adjacent to the ith vertex. In these,
                    vertices are stored as objects. Each vertex
                    further contains a list of neighbouring vertices.
                    This type of representation allows additional
                    data of the vertices to be stored. But this
                    additional data is stored only if edges are
                    stored as objects, which means every vertex
                    stores its incident edges and edge stores its
                    incident vertices.
                </span>
                <p>
                    Another representation could be maintaining
                    two lists. First list stores indices
                    corresponding to each vertex in the graph and
                    each of these refer to the second list storing
                    the index of each adjacent vertex to this one.
                    It would be good if we associate the weight of
                    each edge with the adjacent vertex in this list.
                    These lists of all the vertices in the graph
                    would be useful if stored in a hash table.
                </p>
                <p>
                    It is also used to represent a weighted graph.
                    The nodes of linked lists will be storing
                    weights of edges. Each node has precisely as
                    many nodes in its adjacency list as it has
                    neighbours. Therefore, an adjacency list is a
                    very space efficient representation of a graph.
                    You would not store more information than
                    actually required.
                </p>
                <p>
                    If a graph has V vertices and E edges then a
                    graph represented using adjacency list will
                    need -
                    <ul className="list-disc list-inside">
                        <li>
                            V+E node instances for a directed
                            graph
                        </li>
                        <li>
                            V+2E node instances for an
                            undirected graph
                        </li>
                    </ul>
                    This is generally recommended if it efficiently
                    represents sparse graphs.
                </p>
                <p>
                    Advantages of using adjacency list are as
                    follows:
                    <ul className="list-disc list-inside">
                        <li>
                            Addition of a vertex and connecting
                            new vertices with the existing ones is
                            easier.
                        </li>
                        <li>
                            Has a space complexity of O(|V|+|E|).
                        </li>
                        <li>
                            It allows us to store graphs in more
                            compact form and to get the list of
                            adjacent vertices in O(1) time which is
                            a big benefit for some algorithms.

                        </li>
                    </ul>
                </p>
                <p>
                    Disadvantages of using adjacency list are as
                    follows:
                    <ul className="list-disc list-inside">
                        <li>
                            Queries like whether there is an edge
                            from vertex u to vertex v are not
                            efficient and require time complexity,
                            O(V).

                        </li>
                        <li>
                            It does not allow us to make an
                            efficient implementation, if dynamic
                            change of vertex number is required.
                        </li>
                    </ul>
                    Example of adjacency list representation is as
                    shown in Fig. 5.
                </p>
                <div className="flex justify-center my-5">Fig. 5. Adjacency List Representation of a given graph C.</div>
                <div className="flex justify-center text-2xl font-bold my-8">Code(Adjacency List)</div>
            </div>
            <div>
                
            </div>
        </div>
    )
}
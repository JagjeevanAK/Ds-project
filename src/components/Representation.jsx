export default function Representation(){
    return(
        <div>
            <div id="GR" className="my-10 text-2xl">Graph Representation</div>
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
                <span id="EL" className="font-semibold">Edge List: </span>
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
                <span id="AL" className="font-semibold">Adjacency List: </span>
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
                <span id="AM" className="font-semibold">Adjacency Matrix:</span>
                <span>
                    The adjacency matrix
                    structure augments the edge list structure with
                    a matrix where each row and column
                    corresponds to a vertex. It is a two
                    dimensional matrix form where the rows
                    represent source vertices and columns
                    represent destination vertices. Data on edges
                    and vertices is stored externally. Between
                    each pair of vertices, the cost of one edge is
                    to be stored. This shows which vertices are
                    adjacent to one another. We know that two
                    vertices are said to be adjacent if there is an
                    edge connecting them. For a graph of n
                    vertices, the dimensions of adjacency matrix
                    will be n*n.
                </span>
                <p>
                    In the case of directed graphs, suppose if
                    vertex j is adjacent to vertex i then there will
                    be an edge from i to j and vice versa. For a
                    given vertex i, its adjacent vertices will be
                    determined by looking at the row entry (i,
                    [1…n]) of the matrix. If the value is true then it
                    indicates that there exists an edge from i to j
                    and false indicates no edge exists.
                </p>
                <p>
                    In case of an undirected graph, the matrix
                    values will be populated with Boolean values.
                    The values of (i, j) and (j, i) are equal which
                    means the adjacency matrix for an undirected
                    graph is always symmetric along the diagonal.
                </p>
                <p>
                    In a weighted graph, the Boolean values will
                    be the costs of the edges connecting two
                    vertices of a graph. Generally an adjacency
                    matrix is used to represent weighted graphs. If
                    adj[i][j] = w , then we will say that there is an
                    edge from vertex i to vertex j with weight w
                    (can be any positive number). There are some
                    cases where zero can also be the possible
                    weight of the edge, then we have to store
                    some sentinel value for non-existent edge,
                    which can be a negative value; since the
                    weight of the edge is always a positive
                    number.
                </p>
                <p>
                    An adjacency matrix requires an n2 element
                    array so for parse graphs much of the matrix
                    will be empty. Also, for undirected graphs half
                    of the graph is repeated information. Hence
                    these matrices are said to be space
                    inefficient.
                </p>
                <p className="my-6">
                    The memory use of an adjacency matrix is
                    O(n2 ) where n = number of vertices.
                </p>
                <p>
                    Advantages of using adjacency matrix are as follows:
                    <ul className="list-disc list-inside">
                        <li>
                            Easy to understand, implement and
                            convenient to work with.
                        </li>
                        <li>
                            Removing an edge involves time
                            complexity of O(1).
                        </li>
                        <li>
                            Queries like whether there is an edge
                            from vertex „u‟ to vertex „v‟ are
                            efficient and require time complexity,
                            O(1).
                        </li>
                    </ul>
                </p>
                <p>
                    Disadvantages of using adjacency matrix are as follows:
                    <ul className="list-disc list-inside">
                        <li>
                            Space complexity is of the O(V2 )
                            where V = number of vertices.
                        </li>
                        <li>
                            Sparse matrix has fewer edges but the
                            space complexity is still the same.
                        </li>
                        <li>
                            Adding an edge involves time
                            complexity of O(V2 ).
                        </li>
                        <li>
                            If the number of nodes in the graph
                            may change, matrix representation is
                            too inflexible (especially if we don't
                            know the maximal size of the graph).
                        </li>
                    </ul>
                    This is preferred if the graph is of dense type
                    where |E| ~ V 2 .
                </p>
                <div className="flex justify-center my-6">Fig. 6. Adjacency Matrix Representation of a given Graph</div>
                <div className="flex justify-center my-6 text-2xl font-semibold">Code(Adjacency Matrix)</div>
            </div>
            <p>
                Although the linked list representation
                requires very less memory as compared to
                the adjacency matrix, the simplicity of the
                adjacency matrix makes it preferable when
                graphs are reasonably small.
            </p>
            <p>
                Adjacency information in an array can be
                viewed as a function.
                <ol  className="list-decimal list-inside">
                    <li>
                        Merits of representing graphs as functions
                        are as follows:
                        <ul  className="list-disc list-inside">
                            <li>
                                Simple and easy to understand.
                            </li>
                            <li>
                                Easily adaptable to different types of
                                graphs.
                            </li>
                        </ul>
                    </li>
                    <li>    
                        Demerits of representing graphs as
                        functions are as follows:
                        <ul  className="list-disc list-inside">
                            <li>
                                Graph must be known statistically at
                                compile time.
                            </li>
                            <li>
                                Cannot be extended to accommodate
                                queries about the set of Vertices or the
                                set of Edges.
                            </li>
                        </ul>
                    </li>
                </ol>
            </p>
            <p>
                One way to overcome the cons of using
                functions to represent graphs is to use arrays
                instead.
                <ol className="list-decimal list-inside">
                    <li>
                        Merits of representing graphs as arrays are
                        as follows:
                        <ul className="list-disc list-inside">
                            Simple and easy to understand and
                            easily adaptable to different types of
                            graphs.
                        </ul>
                        <ul>
                            Can be accessed efficiently and
                            constructed at runtime.
                        </ul>
                    </li>
                    <li>
                        Demerits of representing graphs as arrays
                        are as follows:
                        <ul className="list-disc list-inside">
                            <li>
                                The domain of Vertices must be a type
                                that can be used as an index into an
                                array.
                            </li>
                            <li>
                                Requires that graph access be a
                                Command rather than a computation
                            </li>
                        </ul>
                    </li>
                </ol>
            </p>
        </div>
    )
}
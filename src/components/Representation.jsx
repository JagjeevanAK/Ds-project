import { useEffect } from "react";
import scrollreveal from "scrollreveal";
import Code from "./Code";
import './line.css';
import AdjacencyList from "./fig/Al";

export default function Representation(){
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
                <h4 id="GR" className="reveal headline">Graph Representation</h4>
                <div className="line reveal"></div>
            </div>
            <div className="reveal">
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
            <div className="reveal mt-8">
                <span id="EL" className="reveal subhead">Edge List: </span>
                <span>
                    This structure simply maintains
                    and stores the vertices and the edges into
                    unsorted sequences. Advantage: Easy to
                    implement and iterate over small edges.
                </span>
                <p className="mt-6">
                    Disadvantage: Finding the edges incident on
                    a given vertex is inefficient since it requires
                    examining the entire edge sequence. That
                    means -
                    <ul className="reveal ml-6 list-disc list-inside mb-4">
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
                <div>
                    <div className="flex justify-center mt-6 text-xl font-semibold reveal">
                        Code{" (Edge list)"}
                    </div>
                    <div className="reveal">
                        <Code codeSnippets={edgelist}/>
                    </div>
                </div>
            </div>
            <div className="reveal mt-12">
                <span id="AL" className="reveal subhead ">Adjacency List: </span>
                <span className="reveal">
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
                <p className="reveal pt-4">
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
                <p className="reveal"> 
                    It is also used to represent a weighted graph.
                    The nodes of linked lists will be storing
                    weights of edges. Each node has precisely as
                    many nodes in its adjacency list as it has
                    neighbours. Therefore, an adjacency list is a
                    very space efficient representation of a graph.
                    You would not store more information than
                    actually required.
                </p>
                <p className="mt-6">
                    If a graph has V vertices and E edges then a
                    graph represented using adjacency list will
                    need -
                    <ul className="reveal list-disc list-inside ml-4 mb-6">
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
                <p className="reveal mt-4">
                    Advantages of using adjacency list are as
                    follows:
                    <ul className="list-disc list-inside ml-4 mb-4">
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
                <p className="reveal" >
                    Disadvantages of using adjacency list are as
                    follows:
                    <ul className="reveal list-disc list-inside ml-4 mb-4">
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
                <div className="flex justify-center my-8"> 
                    <div className="rounded-xl reveal bg-[#F5F5F5] px-4 w-[50%]" >
                        <img src="/Graph_Adjacency_List-removebg.png" alt="Adjacency List" />
                        <div className="reveal text-black fig">Fig. 6. Adjacency List Representation of a given graph C.</div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mt-6 text-xl font-semibold reveal">Code (Adjacency List)</div>
                    <div className="reveal">
                        <Code codeSnippets={ad_list}/>
                    </div>
                </div>
            </div>
            <div className="reveal mt-12">
                <span id="AM" className="reveal subhead">Adjacency Matrix: </span>
                <span className="reveal">
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
                <p className="reveal pt-6">
                    In the case of directed graphs, suppose if
                    vertex j is adjacent to vertex i then there will
                    be an edge from i to j and vice versa. For a
                    given vertex i, its adjacent vertices will be
                    determined by looking at the row entry (i,
                    [1…n]) of the matrix. If the value is true then it
                    indicates that there exists an edge from i to j
                    and false indicates no edge exists.
                </p>
                <p className="reveal pt-6">
                    In case of an undirected graph, the matrix
                    values will be populated with Boolean values.
                    The values of (i, j) and (j, i) are equal which
                    means the adjacency matrix for an undirected
                    graph is always symmetric along the diagonal.
                </p>
                <p className="reveal pt-6">
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
                <p className="reveal pt-6" >
                    An adjacency matrix requires an n2 element
                    array so for parse graphs much of the matrix
                    will be empty. Also, for undirected graphs half
                    of the graph is repeated information. Hence
                    these matrices are said to be space
                    inefficient.
                </p>
                <p className="my-6 reveal">
                    The memory use of an adjacency matrix is
                    O(n2 ) where n = number of vertices.
                </p>
                <p className="reveal mt-4" >
                    Advantages of using adjacency matrix are as follows:
                    <ul className="list-disc list-inside ml-4">
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
                <p className="reveal my-4">
                    Disadvantages of using adjacency matrix are as follows:
                    <ul className="reveal list-disc list-inside ml-4 mb-4">
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
                <div className="flex justify-center my-8"> 
                    <div className="reveal rounded-xl bg-[#F5F5F5] px-4 w-[50%]" >
                        <img src="/al-removebg-preview.png" alt="Adjacency Matrix " />
                        <div className="reveal text-black fig">Fig. 6. Adjacency Matrix Representation of a given graph C.</div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mt-6 text-xl font-semibold reveal">Code (Adjacency Matrix)</div>
                    <div className="reveal">
                        <Code codeSnippets={ad_matrix}/>
                    </div>
                </div>
            </div>
            <p className="reveal">
                Although the linked list representation
                requires very less memory as compared to
                the adjacency matrix, the simplicity of the
                adjacency matrix makes it preferable when
                graphs are reasonably small.
            </p>
            <p className="reveal mt-4">
                Adjacency information in an array can be
                viewed as a function.
                <ol  className="reveal list-decimal list-inside ml-2">
                    <li>
                        Merits of representing graphs as functions
                        are as follows:
                        <ul  className="reveal list-disc list-inside ml-4">
                            <li>
                                Simple and easy to understand.
                            </li>
                            <li>
                                Easily adaptable to different types of
                                graphs.
                            </li>
                        </ul>
                    </li>
                    <li className="reveal">    
                        Demerits of representing graphs as
                        functions are as follows:
                        <ul  className="reveal list-disc list-inside ml-4">
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
            <p className="reveal mt-4">
                One way to overcome the cons of using
                functions to represent graphs is to use arrays
                instead.
                <ol className="reveal list-decimal list-inside ml-2">
                    <li>
                        Merits of representing graphs as arrays are
                        as follows:
                        <ul className=" reveal list-disc list-inside ml-4">
                            <li>
                                Simple and easy to understand and
                                easily adaptable to different types of
                                graphs.
                            </li>
                            <li>
                                Can be accessed efficiently and
                                constructed at runtime.
                            </li>
                        </ul>
                    </li>
                    <li className="reveal">
                        Demerits of representing graphs as arrays
                        are as follows:
                        <ul className="list-disc list-inside ml-4">
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

const edgelist={
    cpp:`
        #include <iostream>
        #include <vector>
        using namespace std;

        class GraphEdgeList {
        public:
            // Constructor initializes an empty vector to store edges
            GraphEdgeList() {}

            // Add an edge to the list (u, v, weight)
            void add_edge(int u, int v, int weight = 1) {
                edges.push_back({u, v, weight});
            }

            // Display all edges with their weights
            void display() const {
                for (const auto& edge : edges) {
                    cout << "Edge: " << edge[0] << " - " << edge[1] 
                        << ", Weight: " << edge[2] << endl;
                }
            }

        private:
            vector<vector<int>> edges; // Vector of edges where each edge is represented as {u, v, weight}
        };

        int main() {
            GraphEdgeList graph_edge_list;
            graph_edge_list.add_edge(0, 1);
            graph_edge_list.add_edge(1, 2);
            graph_edge_list.add_edge(2, 3);
            graph_edge_list.add_edge(3, 4);
            graph_edge_list.add_edge(4, 0);
            graph_edge_list.display();
            return 0;
        }`,
    python:`
        class GraphEdgeList:
            def __init__(self):
                # Initialize an empty list to store edges
                self.edges = []

            def add_edge(self, u, v, weight=1):
                # Add an edge to the list (u, v, weight)
                self.edges.append((u, v, weight))

            def display(self):
                # Display all edges with their weights
                for edge in self.edges:
                    print(f"Edge: {edge[0]} - {edge[1]}, Weight: {edge[2]}")

        # Example usage
        graph_edge_list = GraphEdgeList()
        graph_edge_list.add_edge(0, 1)
        graph_edge_list.add_edge(1, 2)
        graph_edge_list.add_edge(2, 3)
        graph_edge_list.add_edge(3, 4)
        graph_edge_list.add_edge(4, 0)
        graph_edge_list.display()
    `
}

const ad_list={
    cpp:`
    #include <iostream>
    #include <unordered_map>
    #include <vector>
    using namespace std;

    class GraphList {
    public:
        GraphList() {}

        void add_edge(int u, int v) {
            // Add node u if it is not already present
            if (graph.find(u) == graph.end()) {
                graph[u] = vector<int>();
            }
            // Add node v if it is not already present
            if (graph.find(v) == graph.end()) {
                graph[v] = vector<int>();
            }
            // Add edge from u to v (undirected)
            graph[u].push_back(v);
            graph[v].push_back(u);
        }

        void display() {
            // Display the adjacency list
            for (const auto& pair : graph) {
                cout << pair.first << ": ";
                for (int neighbor : pair.second) {
                    cout << neighbor << " ";
                }
                cout << endl;
            }
        }

    private:
        unordered_map<int, vector<int>> graph;
    };

    int main() {
        GraphList graph_list;
        graph_list.add_edge(0, 1);
        graph_list.add_edge(1, 2);
        graph_list.add_edge(2, 3);
        graph_list.add_edge(3, 4);
        graph_list.add_edge(4, 0);
        graph_list.display();
        return 0;
    }
    `,
    python:`
    class GraphList:
        def __init__(self):
            # Initialize an empty dictionary to represent the graph
            self.graph = {}

        def add_edge(self, u, v):
            # Add node u if it is not already present
            if u not in self.graph:
                self.graph[u] = []
            # Add node v if it is not already present
            if v not in self.graph:
                self.graph[v] = []
            # Add edge from u to v (undirected)
            self.graph[u].append(v)
            self.graph[v].append(u)

        def display(self):
            # Display the adjacency list
            for node, neighbours in self.graph.items():
                print(f"{node}: {neighbours}")

    # Example usage
    graph_list = GraphList()
    graph_list.add_edge(0, 1)
    graph_list.add_edge(1, 2)
    graph_list.add_edge(2, 3)
    graph_list.add_edge(3, 4)
    graph_list.add_edge(4, 0)
    graph_list.display()`
}

const ad_matrix={
    cpp:`
    #include <iostream>
    #include <vector>
    using namespace std;

    class GraphMatrix {
    public:
        // Constructor initializes the number of nodes and matrix with zeros
        GraphMatrix(int num_nodes) : num_nodes(num_nodes), matrix(num_nodes, vector<int>(num_nodes, 0)) {}

        // Add edge to the matrix (undirected)
        void add_edge(int u, int v, int weight = 1) {
            matrix[u][v] = weight;
            matrix[v][u] = weight;
        }

        // Display the adjacency matrix
        void display() {
            for (const auto& row : matrix) {
                for (int value : row) {
                    cout << value << " ";
                }
                cout << endl;
            }
        }

    private:
        int num_nodes;
        vector<vector<int>> matrix;
    };

    int main() {
        GraphMatrix graph_matrix(5);
        graph_matrix.add_edge(0, 1);
        graph_matrix.add_edge(1, 2);
        graph_matrix.add_edge(2, 3);
        graph_matrix.add_edge(3, 4);
        graph_matrix.add_edge(4, 0);
        graph_matrix.display();
        return 0;
    }

    `,
    python:`
    class GraphMatrix:
        def __init__(self, num_nodes):
            # Initialize the number of nodes and create a matrix with zeros
            self.num_nodes = num_nodes
            self.matrix = [[0] * num_nodes for _ in range(num_nodes)]

        def add_edge(self, u, v, weight=1):
            # Add edge to the matrix (undirected)
            self.matrix[u][v] = weight
            self.matrix[v][u] = weight

        def display(self):
            # Display the adjacency matrix
            for row in self.matrix:
                print(row)

    # Example usage
    graph_matrix = GraphMatrix(5)
    graph_matrix.add_edge(0, 1)
    graph_matrix.add_edge(1, 2)
    graph_matrix.add_edge(2, 3)
    graph_matrix.add_edge(3, 4)
    graph_matrix.add_edge(4, 0)
    graph_matrix.display()
    `
}
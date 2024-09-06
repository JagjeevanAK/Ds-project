export default function Sidebar(){
    return(
        <div className="sticky top-0">
            <div className="float-right mt-5 mr-6 bg-[#f5f9fbf2] p-4 rounded-lg ">
                <div className="mb-4">Table of contents</div>
                <ul>
                    <li className="mb-1">
                        <button>1.  Abstract</button>
                    </li>
                    <li>
                        <button>2.  Introduction</button>
                    </li>
                    <li>
                        <button>3.  Background</button>
                        <ul>
                            <li className="ml-5">
                                <button>3.1 What is a Graph ?</button>
                            </li>
                            <li className="ml-5">
                                <button>3.2 Graph Operations</button>
                            </li>
                            <li className="ml-">
                                <button>3.3 Types of Graphs</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>4. Graph Representation</button>
                        <ul>
                            <li className="ml-5">
                                <button>4.1 Edge list</button>
                            </li>
                            <li className="ml-5"> 
                                <button>4.2 Adjacency list</button>
                            </li>
                            <li className="ml-5">
                                <button>4.3 Adjacency Matrix</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>5. Graphh Traversal</button>
                        <ul>
                            <li className="ml-5">
                                <button>5.2 Breadth First Search</button>
                            </li>
                            <li className="ml-5">
                                <button>5.2 Depth First Search</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>6. Application</button>
                    </li>
                    <li>
                        <button>7. Conclusion</button>
                    </li>
                    <li>
                        <button>8. Referances</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
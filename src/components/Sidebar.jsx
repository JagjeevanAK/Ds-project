export default function Sidebar(){
    return(
        <div className="sticky top-0">
            <div className="float-right mt-5 mr-6 bg-[#f5f9fbf2] p-4 rounded-lg ">
                <div className="mb-4">Table of contents</div>
                <ul>
                    <li className="mb-1">
                        <a href="">1.  Abstract</a>
                    </li>
                    <li>
                        <a>2.  Introduction</a>
                    </li>
                    <li>
                        <a>3.  Background</a>
                        <ul>
                            <li className="ml-5">
                                <a>3.1 What is a Graph ?</a>
                            </li>
                            <li className="ml-5">
                                <a>3.2 Graph Operations</a>
                            </li>
                            <li className="ml-">
                                <a>3.3 Types of Graphs</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>4. Graph Representation</a>
                        <ul>
                            <li className="ml-5">
                                <a>4.1 Edge list</a>
                            </li>
                            <li className="ml-5"> 
                                <a>4.2 Adjacency list</a>
                            </li>
                            <li className="ml-5">
                                <a>4.3 Adjacency Matrix</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>5. Graphh Traversal</a>
                        <ul>
                            <li className="ml-5">
                                <a>5.2 Breadth First Search</a>
                            </li>
                            <li className="ml-5">
                                <a>5.2 Depth First Search</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>6. Application</a>
                    </li>
                    <li>
                        <a>7. Conclusion</a>
                    </li>
                    <li>
                        <a>8. Referances</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
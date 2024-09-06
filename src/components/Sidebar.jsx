export default function Sidebar(){
    return(
        <div className="sticky top-0">
            <div className="float-right mt-5 mr-6 bg-[#f5f9fbf2] p-4 rounded-lg ">
                <div className="mb-4">Table of contents</div>
                <ul>
                    <li className="mb-1">
                        <a href="#abs">1.  Abstract</a>
                    </li>
                    <li>
                        <a href="#Intro">2.  Introduction</a>
                    </li>
                    <li>
                        <a href="#back">3.  Background</a>
                        <ul>
                            <li className="ml-5">
                                <a href="#Bg">3.1 What is a Graph ?</a>
                            </li>
                            <li className="ml-5">
                                <a href="#BO">3.2 Graph Operations</a>
                            </li>
                            <li className="ml-">
                                <a href="#Bgraph">3.3 Types of Graphs</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="GR">4. Graph Representation</a>
                        <ul>
                            <li className="ml-5">
                                <a href="#EL">4.1 Edge list</a>
                            </li>
                            <li className="ml-5"> 
                                <a href="#AL">4.2 Adjacency list</a>
                            </li>
                            <li className="ml-5">
                                <a href="#AM">4.3 Adjacency Matrix</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#GT">5. Graphh Traversal</a>
                        <ul>
                            <li className="ml-5">
                                <a href="#bfs">5.2 Breadth First Search</a>
                            </li>
                            <li className="ml-5">
                                <a href="#dfs">5.2 Depth First Search</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#application">6. Application</a>
                    </li>
                    <li>
                        <a href="#conclusion">7. Conclusion</a>
                    </li>
                    <li>
                        <a href="#refe">8. Referances</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
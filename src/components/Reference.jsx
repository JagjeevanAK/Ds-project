import { useEffect } from "react";
import scrollreveal from "scrollreveal";
import './line.css';

export default function Referance(){
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
                <h4 id="refe" className="reveal headline">Reference</h4>
                <div className="line reveal"></div>
            </div>
            <div className="reveal">
                <ol className="list-decimal list-inside">
                    <li>
                        IJARCCE
                    </li>
                    <li>
                        Danny Sleator, “Parallel and Sequential
                        Data Structures and Algorithms,15-210 {"(fall2013)"} ”,
                        Sept. 24 , 2013.
                    </li>
                    <li>
                        < a href="http://mathinsight.org/definition/undirected_graph">Nykamp DQ, “Undirected graph definition” on Math Insight.</a>
                    </li>
                    <li>
                        <a href="https://en.m.wikipedia.org/wiki/Graph_(abstract_data_type)">Wikipedia contributors</a>
                    </li>
                    <li>
                        <a href="https://en.m.wikibooks.org/wiki/Data_Structures/Graphs">Wiki books contributors</a>
                    </li>
                    <li>
                        <a href="http://www.tutorialspoint.com/data_structures_algorithms/graph_data_structure.htm">Tutorialspoint contributors</a>
                    </li>
                    <li>
                        <a href="https://web.cecs.pdx.edu/~sheard/course/Cs163/Doc/Graphs.html">Graphs in computer science</a>
                    </li>
                    <li>
                        <a href="http://stackoverflow.com/questions/703999/what-are-good-examples-of-problems-that-graphs-can-solve-better-than-the-alterna">Stackoverflow contributors</a>
                    </li>
                    <li>
                        <a href="https://chatgpt.com/">Chatgpt </a>
                    </li>
                </ol>
            </div>
        </div>
    )
}
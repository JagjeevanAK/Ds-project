import './line.css';
import Graph from "./fig/Exgraph";

export default function Example(){
    return(
        <div>
            <div className="base">
                <h4 id="application" className="reveal headline">
                    Graph Usage Example
                </h4>
                <div className="line reveal"></div>
            </div>
            <div>
                <Graph/>
            </div>
        </div>
    )
}
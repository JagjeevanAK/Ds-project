import { useEffect } from "react";
import scrollreveal from "scrollreveal";
import './line.css';
import Graph from "./fig/Exgraph";

export default function Example(){
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
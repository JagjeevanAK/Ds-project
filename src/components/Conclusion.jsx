import { useEffect } from "react";
import scrollreveal from "scrollreveal";
import './line.css';

export default function Conclusion(){
    useEffect(() => {
        scrollreveal().reveal(".reveal", {
          origin: "bottom",
          distance: "50px",
          duration: 1000,
          delay: 200,
          reset: true, 
          viewOffset: { bottom: 50 },
        });
    }, []);

    return(
        <div>
            <div className="base">
                <h4 id="conclusion" className="reveal headline">Conclusion</h4>
                <div className="reveal line"></div>
            </div>
            <div className="reveal">
                Graphs are a commonly used data structure
                because they can be used to model many
                real-world problems. The graph makes large
                data quite simpler to work with. Graphs are a
                very effective visual tool because they have
                the capacity to present the information quickly
                as well as easily. Graphs have the ability to
                reveal a trend or comparison. That is the main
                reason why the graphs are commonly used by
                different media and also in business. Thus
                various representations of a graph,
                advantages and disadvantages and their
                applications have been studied.
            </div>
        </div>
    )
}
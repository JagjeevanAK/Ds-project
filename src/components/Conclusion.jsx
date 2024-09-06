import { useEffect } from "react";
import scrollreveal from "scrollreveal";

export default function Conclusion(){
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
            <div id="conclusion" className="reveal text-2xl font-semibold my-8">Conclusion</div>
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
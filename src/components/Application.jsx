import { useEffect } from "react";
import scrollreveal from "scrollreveal";
import './line.css';

export default function Application(){
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
                <h4 id="application" className="reveal headline">
                    Application of Graphs
                </h4>
                <div className="line reveal"></div>
            </div>
            <div>
                <ul className=" list-disc list-inside ml-4">
                    <li className="reveal">
                        In road networks, we can consider the
                        intersections as vertices and the road
                        segments between them as the edges.
                        Many map programs such as Google
                        maps, Bing maps and Apple IOS 6
                        maps make use of such networks to
                        find the best routes between locations.
                        They are used for studying traffic
                        patterns, traffic light timings and many
                        aspects of transportation.
                    </li>
                    <li className="reveal pt-4">
                        Directed graphs can be used to map
                        the links between pages within a
                        website. In this case each web page is
                        a vertex and each hyperlink is a
                        directed edge. These graphs are also
                        used to analyse ease of navigation
                        between different parts of the site.
                    </li>
                    <li className="reveal pt-4">
                        In the case of power grid and water
                        network, vertices represent connection
                        points and edges represent the wires
                        or pipes between them. Graphs can be
                        used to minimise the cost to build this
                        infrastructure that matches the
                        required demands.
                    </li>
                    <li className="reveal pt-4">
                        Scene graphs represent the logical or
                        spatial relationships between objects
                        in a scene. Scene graphs are widely
                        used in the graphics and computer
                        games industry.
                    </li>
                    <li className="reveal pt-4">
                        Graph theory is also widely used in
                        sociology as a way, for example, to
                        measure actors' prestige or to explore
                        rumour spreading, notably through the
                        use of social network analysis
                        software.
                    </li>
                    <li className="reveal pt-4">
                        A common problem in AI is to find
                        some goal that satisfies a list of
                        constraints. For example, for a
                        University to set its course schedules,
                        it needs to make sure that certain
                        courses don't conflict, that a professor
                        isn't teaching two courses at the same
                        time, that the lectures occur during
                        certain time slots, and so on.
                        Constraint satisfaction problems like
                        this are often modelled and solved
                        using graphs.
                    </li>
                </ul>
            </div>
        </div>
    )
}
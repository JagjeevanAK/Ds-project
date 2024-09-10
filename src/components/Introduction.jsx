import { useEffect } from "react";
import scrollreveal from "scrollreveal";
import './line.css';

export default function Introduction(){
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

    return (
        <div>
            <div>
                <div className="reveal">
                    <span id="abs" className="subhead">Abstract: </span>
                    <span>
                        Graphs are a fundamental data structure in the world of programming. Graphs are used
                        as a mean to store and analyse metadata. A graph implementation needs understanding of some of
                        the common basic fundamentals of graphs. This paper provides a brief study of graph data
                        structure. Various representations of graph and its traversal techniques are discussed in the paper.
                        An overview of the advantages, disadvantages and applications of the graphs is also provided.
                    </span>
                    <div className="pt-4 ">
                        <span className="subhead">Keyword: </span>
                        <span>Graph, Vertices, Edges, Directed, Undirected, Adjacency, Complexity.</span>
                    </div>
                </div>
            </div>
            <div className="base">
                <h4 id="Intro" className="reveal headline">
                    Introduction
                </h4>
                <div className="line reveal "></div>
            </div>
            <div>
                <p className="pt-2 reveal">
                    Graph is a data structure that consists of a
                    finite set of vertices, together with a set of
                    unordered pairs of these vertices for an
                    undirected graph or a set of ordered pairs for
                    a directed graph. These pairs are known as
                    edges/lines/arcs for undirected graphs and
                    directed edge / directed arc / directed line for
                    directed graphs. An edge can be associated
                    with some edge value such as a numeric
                    attribute. These attributes will be based on
                    cost or length or capacity. We can represent
                    the vertices externally also with the help of
                    integer indices or references.
                </p>
                <p className="py-4 reveal">
                    Graphs are very important in the field of
                    computer science. They are used to model
                    real world systems such as the Internet where
                    each node represents a router and each edge
                    represents a connection between the routers.
                    The wireframe drawings in computer graphics
                    are another example of graphs.
                </p>
            </div>
        </div>
    )
}
import { useEffect, useRef } from "react";
import * as d3 from "d3";

function AdjacencyList() {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 500;

    // Define nodes (vertices) and adjacency list (edges)
    const nodes = [
      { id: "Node 1" },
      { id: "Node 2" },
      { id: "Node 3" },
      { id: "Node 4" },
      { id: "Node 5" }
    ];

    // Define the adjacency list for each node (like an edge list)
    const adjList = {
      "Node 1": ["Node 2", "Node 3"], // Node 1 is connected to Node 2 and Node 3
      "Node 2": ["Node 4"], // Node 2 is connected to Node 4
      "Node 3": ["Node 5"], // Node 3 is connected to Node 5
      "Node 4": [], // Node 4 has no outgoing connections
      "Node 5": [] // Node 5 has no outgoing connections
    };

    // Convert adjacency list to link data
    const links = [];
    Object.keys(adjList).forEach(source => {
      adjList[source].forEach(target => {
        links.push({ source, target });
      });
    });

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "transparent");

    // Define arrowhead marker
    svg.append("defs").selectAll("marker")
      .data(["arrow"])
      .enter().append("marker")
      .attr("id", d => d)
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 20)
      .attr("refY", 5)
      .attr("markerWidth", 12)
      .attr("markerHeight", 12)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .style("fill", "#e5e5e5");

    // Create simulation for the nodes
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .style("stroke", "#e5e5e5")
      .style("stroke-width", 2)
      .attr("marker-end", "url(#arrow)");

    const node = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 30)
      .style("fill", "#e94560")
      .style("cursor", "pointer")
      .call(drag(simulation));

    const label = svg.selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text(d => d.id)
      .style("fill", "#e5e5e5")
      .style("font-size", "12px")
      .attr("text-anchor", "middle");

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      label
        .attr("x", d => d.x)
        .attr("y", d => d.y + 5);
    });

    function drag(simulation) {
      return d3.drag()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        });
    }
  }, []);

  return <svg ref={svgRef}></svg>;
}

export default AdjacencyList;

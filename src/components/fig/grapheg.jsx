import { useEffect, useRef } from "react";
import * as d3 from "d3";

function Directed() {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 500;

    // Nodes and links for the square layout with Node 5 connected to only one node
    const nodes = [
      { id: "Node 1", x: 150, y: 100 },
      { id: "Node 2", x: 450, y: 100 },
      { id: "Node 3", x: 450, y: 300 },
      { id: "Node 4", x: 150, y: 300 },
      { id: "Node 5", x: 150, y: 250 } // Remaining node
    ];

    const links = [
      { source: "Node 1", target: "Node 2" },
      { source: "Node 2", target: "Node 3" },
      { source: "Node 3", target: "Node 4" },
      { source: "Node 4", target: "Node 1" },
      { source: "Node 1", target: "Node 5" } // Node 5 connected to Node 1 only
    ];

    // Clear previous SVG
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "transparent");

    // Define arrowhead marker
    svg.append("defs").selectAll("marker")
      .data(["arrow"]) // One marker for all arrows
      .enter().append("marker")
      .attr("id", d => d)
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 20) // Adjust refX to position arrowhead correctly
      .attr("refY", 5)
      .attr("markerWidth", 12) // Adjust markerWidth and markerHeight
      .attr("markerHeight", 12)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .style("fill", "#e5e5e5");

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(150)) // Increase link distance
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .style("stroke", "#e5e5e5")
      .style("stroke-width", 2)
      .attr("marker-end", "url(#arrow)"); // Apply arrowhead marker

    const node = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 30) // Increase radius for larger nodes
      .style("fill", "#e94560")
      .style("cursor", "pointer") // Change cursor to pointer
      .call(drag(simulation)); // Add drag behavior

    const label = svg.selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text(d => d.id)
      .style("fill", "#e5e5e5")
      .style("font-size", "12px") // Increase font size if needed
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
        .attr("y", d => d.y + 5); // Adjust label position if needed
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

export default Directed;

import { useEffect, useRef } from "react";
import * as d3 from "d3";

function Graph() {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 50;

    // Nodes with circular layout
    const nodes = [
      { id: "Node 1", x: width / 2 + radius * Math.cos(0), y: height / 2 + radius * Math.sin(0) },
      { id: "Node 2", x: width / 2 + radius * Math.cos(Math.PI / 3), y: height / 2 + radius * Math.sin(Math.PI / 3) },
      { id: "Node 3", x: width / 2 + radius * Math.cos(2 * Math.PI / 3), y: height / 2 + radius * Math.sin(2 * Math.PI / 3) },
      { id: "Node 4", x: width / 2 + radius * Math.cos(Math.PI), y: height / 2 + radius * Math.sin(Math.PI) },
      { id: "Node 5", x: width / 2 + radius * Math.cos(4 * Math.PI / 3), y: height / 2 + radius * Math.sin(4 * Math.PI / 3) },
      { id: "Node 6", x: width / 2 + radius * Math.cos(5 * Math.PI / 3), y: height / 2 + radius * Math.sin(5 * Math.PI / 3) },
    ];

    // Links with weights
    const links = [
      { source: "Node 1", target: "Node 2", weight: 5 },
      { source: "Node 1", target: "Node 3", weight: 10 },
      { source: "Node 2", target: "Node 4", weight: 7 },
      { source: "Node 3", target: "Node 4", weight: 8 },
      { source: "Node 4", target: "Node 5", weight: 4 },
      { source: "Node 5", target: "Node 6", weight: 6 },
      { source: "Node 6", target: "Node 1", weight: 9 },
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

    // Add weights to links
    const weightLabel = svg.selectAll("text.weight")
      .data(links)
      .enter()
      .append("text")
      .attr("class", "weight")
      .text(d => d.weight)
      .style("fill", "#e5e5e5")
      .style("font-size", "10px") // Font size for weights
      .attr("text-anchor", "middle");

    const node = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 30) // Increase radius for larger nodes
      .style("fill", "#e94560")
      .style("cursor", "pointer") // Change cursor to pointer
      .call(drag(simulation)) // Add drag behavior
      .on("click", (event, d) => {
        alert(`Node clicked: ${d.id}`);
      });

    const label = svg.selectAll("text.node")
      .data(nodes)
      .enter()
      .append("text")
      .attr("class", "node")
      .text(d => d.id)
      .style("fill", "#e5e5e5")
      .style("font-size", "12px") // Increase font size if needed
      .attr("text-anchor", "middle");

    const tooltip = d3.select("body").append("div")
      .style("position", "absolute")
      .style("background", "#333")
      .style("color", "#fff")
      .style("padding", "5px")
      .style("border-radius", "3px")
      .style("opacity", 0);

    node.on("mouseover", (event, d) => {
      tooltip.transition().duration(200).style("opacity", .9);
      tooltip.html(d.id)
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
    }).on("mouseout", () => {
      tooltip.transition().duration(500).style("opacity", 0);
    });

    const zoom = d3.zoom()
      .scaleExtent([0.1, 10])
      .on("zoom", (event) => {
        svg.selectAll("g").attr("transform", event.transform);
      });

    svg.call(zoom);

    svg.append("g").selectAll("g")
      .data(nodes)
      .enter()
      .append("g");

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      // Update weights position with a small offset to avoid collision
      weightLabel
        .attr("x", d => (d.source.x + d.target.x) / 2)
        .attr("y", d => (d.source.y + d.target.y) / 2 - 10); // Offset the position

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

export default Graph;

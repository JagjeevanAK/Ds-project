import { useEffect, useRef } from "react";
import * as d3 from "d3";

function Graph() {
  const svgRef = useRef();

  useEffect(() => {
    const width = 800;
    const height = 600;

    const nodes = [
      { id: "Node 1", x: 150, y: 100 },
      { id: "Node 2", x: 300, y: 50 },
      { id: "Node 3", x: 450, y: 100 },
      { id: "Node 4", x: 200, y: 250 },
      { id: "Node 5", x: 400, y: 250 },
      { id: "Node 6", x: 300, y: 400 },
      { id: "Node 7", x: 100, y: 350 },
      { id: "Node 8", x: 500, y: 350 },
      { id: "Node 9", x: 300, y: 500 }
    ];

    // Simplified links
    const links = [
      { source: "Node 1", target: "Node 2" },
      { source: "Node 2", target: "Node 3" },
      { source: "Node 3", target: "Node 5" },
      { source: "Node 5", target: "Node 6" },
      { source: "Node 6", target: "Node 4" },
      { source: "Node 4", target: "Node 1" },
      { source: "Node 4", target: "Node 7" },
      { source: "Node 7", target: "Node 8" },
      { source: "Node 8", target: "Node 9" },
      { source: "Node 9", target: "Node 6" }
    ];

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "transparent");

    svg.append("defs").selectAll("marker")
      .data(["arrow"])
      .enter().append("marker")
      .attr("id", d => d)
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 10)
      .attr("refY", 5)
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .style("fill", "#e5e5e5");

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-200))
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
      .attr("r", 25)
      .style("fill", "#e94560")
      .style("cursor", "pointer")
      .call(drag(simulation))
      .on("click", (event, d) => {
        alert(`Node clicked: ${d.id}`);
      });

    const label = svg.selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text(d => d.id)
      .style("fill", "#e5e5e5")
      .style("font-size", "12px")
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

export default Graph;

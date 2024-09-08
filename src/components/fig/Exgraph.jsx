import React, { useEffect } from "react";
import * as d3 from "d3";

const Graph = () => {
  useEffect(() => {
    // Clear the previous SVG content before rendering a new graph
    d3.select("#graph-svg").selectAll("*").remove();

    const width = window.innerWidth;
    const height = window.innerHeight * 0.6; // Reduced the height to 60% of the window

    const distanceScaleFactor = 0.35;

    const cities = [
      "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad",
      "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow"
    ];

    const distances = {
      "Mumbai": {
        "Delhi": 1450,
        "Bangalore": 980,
        "Hyderabad": 710,
        "Ahmedabad": 520,
        "Chennai": 1290,
        "Kolkata": 1830,
        "Surat": 270,
        "Pune": 150,
        "Jaipur": 1160,
        "Lucknow": 1250
      },
      "Delhi": {
        "Bangalore": 1740,
        "Hyderabad": 1260,
        "Ahmedabad": 940,
        "Chennai": 2220,
        "Kolkata": 1290,
        "Surat": 1050,
        "Pune": 1440,
        "Jaipur": 280,
        "Lucknow": 550
      },
      "Bangalore": {
        "Hyderabad": 620,
        "Ahmedabad": 1120,
        "Chennai": 290,
        "Kolkata": 1560,
        "Surat": 1060,
        "Pune": 830,
        "Jaipur": 1700,
        "Lucknow": 1720
      },
      "Hyderabad": {
        "Ahmedabad": 980,
        "Chennai": 660,
        "Kolkata": 1500,
        "Surat": 710,
        "Pune": 560,
        "Jaipur": 1350,
        "Lucknow": 1400
      },
      "Ahmedabad": {
        "Chennai": 1320,
        "Kolkata": 1480,
        "Surat": 270,
        "Pune": 670,
        "Jaipur": 620,
        "Lucknow": 1020
      },
      "Chennai": {
        "Kolkata": 1670,
        "Surat": 1290,
        "Pune": 1170,
        "Jaipur": 1500,
        "Lucknow": 1820
      },
      "Kolkata": {
        "Surat": 1580,
        "Pune": 1510,
        "Jaipur": 1520,
        "Lucknow": 1010
      },
      "Surat": {
        "Pune": 300,
        "Jaipur": 1050,
        "Lucknow": 1250
      },
      "Pune": {
        "Jaipur": 1060,
        "Lucknow": 1260
      },
      "Jaipur": {
        "Lucknow": 610
      },
      "Lucknow": {}
    };

    const generateLinks = (cities, distances) => {
      const links = [];
      cities.forEach(sourceCity => {
        cities.forEach(targetCity => {
          if (sourceCity !== targetCity) {
            const distance = distances[sourceCity]?.[targetCity];
            if (distance && distance < 1600) {
              links.push({
                source: sourceCity,
                target: targetCity,
                weight: distance * distanceScaleFactor
              });
            }
          }
        });
      });
      return links;
    };

    const links = generateLinks(cities, distances);
    const nodes = cities.map(city => ({ id: city }));

    const svg = d3.select("#graph-svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "w-full h-full"); // Removed the border class

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(d => d.weight))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("collide", d3.forceCollide(60))
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1));

    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("class", "stroke-[#e5e5e5] opacity-80")
      .attr("stroke-width", d => Math.sqrt(d.weight) / 2);

    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", 40)
      .attr("fill", "#e94560")
      .call(drag(simulation));

    const text = svg.append("g")
      .attr("class", "texts")
      .selectAll("text")
      .data(nodes)
      .enter().append("text")
      .attr("class", "fill-[#e5e5e5] text-sm")
      .text(d => d.id)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("x", d => d.x)
      .attr("y", d => d.y);

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      text
        .attr("x", d => d.x)
        .attr("y", d => d.y);
    });

    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
        simulation.alpha(1).restart();
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    function animate() {
      node.transition()
        .duration(2000)
        .attr("r", 40)
        .transition()
        .duration(2000)
        .attr("r", 30)
        .on("end", animate);

      link.transition()
        .duration(2000)
        .attr("stroke-width", 6)
        .transition()
        .duration(2000)
        .attr("stroke-width", d => Math.sqrt(d.weight) / 2);
    }

    animate();

    // Cleanup function to avoid multiple graphs
    return () => {
      svg.selectAll("*").remove();
      simulation.stop();
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-6 h-[60vh]"> {/* Reduced height of div */}
      <svg id="graph-svg"></svg>
    </div>
  );
};

export default Graph;

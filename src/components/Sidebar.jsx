import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the start and end colors for the gradient
  const startColor = '#1a1a2e';  // Matching the app's starting color
  const middleColor = '#16213e'; // Matching the app's middle color
  const endColor = '#0f3460';    // Matching the app's end color

  // Calculate the total height of the document
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  // Calculate the viewport height
  const viewportHeight = window.innerHeight;

  // Calculate the maximum scroll position
  const maxScroll = docHeight - viewportHeight;

  // Calculate the gradient position based on scroll position
  const gradientPosition = Math.min(scrollPosition / maxScroll, 1);

  // Generate gradient color dynamically
  let sidebarBackground;
  if (gradientPosition <= 0.5) {
    // First half of the scroll: transition from startColor to middleColor
    const t = gradientPosition * 2;
    sidebarBackground = `linear-gradient(to bottom, 
      ${startColor}, 
      color-mix(in srgb, ${startColor} ${100 - t * 100}%, ${middleColor} ${t * 100}%)
    )`;
  } else {
    // Second half of the scroll: transition from middleColor to endColor
    const t = (gradientPosition - 0.5) * 2;
    sidebarBackground = `linear-gradient(to bottom, 
      ${middleColor}, 
      color-mix(in srgb, ${middleColor} ${100 - t * 100}%, ${endColor} ${t * 100}%)
    )`;
  }

  // Calculate opacity and translateY based on scroll position
  const minOpacity = 0;
  const maxOpacity = 1;
  const opacity = Math.min((scrollPosition / 200) * maxOpacity, maxOpacity); // Adjust the denominator for more control

  const translateY = Math.min(scrollPosition / 2, 100); // Adjust to control how much the sidebar moves

  return (
    <div className="sticky top-0">
      <div 
        className="float-right mt-2 mr-6 p-6 rounded-lg transition-transform transition-opacity duration-1000 ease-in-out"
        style={{
          background: sidebarBackground,
          opacity: opacity,
          transform: `translateY(${translateY}px)`,
          border: '1px solid transparent', // Make the border invisible
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Very subtle shadow for soft boundary
        }}
      >
        <div className="mb-4 text-xl font-semibold text-white">Table of Contents</div>
        <ul className="text-[#d3d3d3]">
          <li className="mb-2">
            <a href="#abs" className="hover:text-[#f7c6c7] transition-colors duration-300">1. Abstract</a>
          </li>
          <li className="mb-2">
            <a href="#Intro" className="hover:text-[#f7c6c7] transition-colors duration-300">2. Introduction</a>
          </li>
          <li className="mb-2">
            <a href="#back" className="hover:text-[#f7c6c7] transition-colors duration-300">3. Background</a>
            <ul>
              <li className="ml-5 mt-1">
                <a href="#Bg" className="hover:text-[#f7c6c7] transition-colors duration-300">3.1 What is a Graph?</a>
              </li>
              <li className="ml-5 mt-1">
                <a href="#BO" className="hover:text-[#f7c6c7] transition-colors duration-300">3.2 Graph Operations</a>
              </li>
              <li className="ml-5 mt-1">
                <a href="#Bgr" className="hover:text-[#f7c6c7] transition-colors duration-300">3.3 Types of Graphs</a>
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <a href="#GR" className="hover:text-[#f7c6c7] transition-colors duration-300">4. Graph Representation</a>
            <ul>
              <li className="ml-5 mt-1">
                <a href="#EL" className="hover:text-[#f7c6c7] transition-colors duration-300">4.1 Edge List</a>
              </li>
              <li className="ml-5 mt-1">
                <a href="#AL" className="hover:text-[#f7c6c7] transition-colors duration-300">4.2 Adjacency List</a>
              </li>
              <li className="ml-5 mt-1">
                <a href="#AM" className="hover:text-[#f7c6c7] transition-colors duration-300">4.3 Adjacency Matrix</a>
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <a href="#GT" className="hover:text-[#f7c6c7] transition-colors duration-300">5. Graph Traversal</a>
            <ul>
              <li className="ml-5 mt-1">
                <a href="#bfs" className="hover:text-[#f7c6c7] transition-colors duration-300">5.1 Breadth First Search</a>
              </li>
              <li className="ml-5 mt-1">
                <a href="#dfs" className="hover:text-[#f7c6c7] transition-colors duration-300">5.2 Depth First Search</a>
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <a href="#application" className="hover:text-[#f7c6c7] transition-colors duration-300">6. Application</a>
          </li>
          <li className="mb-2">
            <a href="#conclusion" className="hover:text-[#f7c6c7] transition-colors duration-300">7. Conclusion</a>
          </li>
          <li>
            <a href="#refe" className="hover:text-[#f7c6c7] transition-colors duration-300">8. References</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

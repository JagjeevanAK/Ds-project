import { useEffect } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-[#e5e5e5] min-h-screen">
      <div className="reveal">
        <Header />
      </div>

      <div className="grid grid-cols-12 w-full">
        <div className="col-span-2 sticky top-0 reveal">
          <Sidebar />
        </div>

        <div className="col-span-8 p-8 reveal">
          <Content />
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="w-full flex justify-center py-4 text-white bg-[#1c1c1c] reveal mt-8">
        <span>&#x00A9; Made with ❤️ by <a href="https://www.linkedin.com/in/jagjeevan-kashid-2b7999192/">Jagjeevan Kashid</a></span>
      </div>
    </div>
  );
}

export default App;

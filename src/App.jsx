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
    <div>
      <div className="reveal">
        <Header/>
      </div>
      <div className="grid grid-cols-5 w-screen">
        <div className="col-span-1 sticky top-0 reveal">
          <Sidebar />
        </div>
        <div className="col-span-3 reveal">
          <Content />
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="w-screen flex justify-center py-4 text-white bg-black reveal mt-8">
        &#x00A9; Made with ❤️ by Jagjeevan Kashid
      </div>
    </div>
  );
}

export default App;

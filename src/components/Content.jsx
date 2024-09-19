// import { useEffect } from "react";
import Application from "./Application";
import Background from "./Background";
import Conclusion from "./Conclusion";
import Example from "./Example";
import Introduction from "./Introduction";
import Referance from "./Reference";
import Representation from "./Representation";
import Traversal from "./Traversal";
import scrollreveal from "scrollreveal";

export default function Content(){
  //   useEffect(() => {
  //   scrollreveal().reveal(".reveal", {
  //     origin: "bottom",
  //     distance: "50px",
  //     duration: 1000,
  //     delay: 200,
  //     reset: true,
  //   });
  // }, []);
    return(
        <div>
            <Introduction/>
            <Background/>
            <Representation/>
            <Traversal/>
            <Application/>
            <Example/>
            <Conclusion/>
            <Referance/>
        </div>
    )
}

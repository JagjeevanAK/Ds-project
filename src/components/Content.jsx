import { useRef } from "react";
import Application from "./Application";
import Background from "./Background";
import Conclusion from "./Conclusion";
import Introduction from "./Introduction";
import Referance from "./Reference";
import Representation from "./Representation";
import Traversal from "./Traversal";

export default function Content(){
    return(
        <div>
            <Introduction/>
            <Background/>
            <Representation/>
            <Traversal/>
            <Application/>
            <Conclusion/>
            <Referance/>
        </div>
    )
}
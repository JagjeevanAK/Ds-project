import Application from "./Application";
import Background from "./Background";
import Conclusion from "./Conclusion";
import Example from "./Example";
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
            <Example/>
            <Conclusion/>
            <Referance/>
        </div>
    )
}
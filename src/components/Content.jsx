import { useRef } from "react";
import Application from "./Application";
import Background from "./Background";
import Conclusion from "./Conclusion";
import Introduction from "./Introduction";
import Referance from "./Reference";
import Representation from "./Representation";
import Traversal from "./Traversal";

export default function Content(){
    const IntroductionRef = useRef(null);
    const BackgroundRef = useRef(null);
    const RepresentationRef = useRef(null);
    const TraversalRef = useRef(null);
    const ApplicationRef=useRef(null);
    const ConclusionRef=useRef(null);
    const ReferanceRef=useRef(null);
    const AbstractRef=useRef(null);
    const BgRef=useRef(null);
    const BORef=useRef(null);
    const BTRef=useRef(null);
    const bfsRef=useRef(null);
    const dfsRef=useRef(null);
    const ElRef=useRef(null);
    const AlRef=useRef(null);
    const AMRef=useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
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
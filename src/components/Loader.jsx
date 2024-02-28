import { Html, useProgress } from "@react-three/drei"
import { FillingBottle } from "react-cssfx-loading";


const Loader = () => {
  const {progress} = useProgress(); 

  return (
    <Html>
        <span className="canvas-load"></span>
        <p
          style={{
            fontSize: 14,
            color:'#915eff',
            fontWeight:800,
            marginTop:40
          }}
        >
          {progress.toFixed(2)}% 
        </p>
        <FillingBottle  color="#915eff" style={{ marginLeft: 10 }} />
    </Html>
  )
}

export default Loader
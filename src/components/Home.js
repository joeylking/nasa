import { Link } from "react-router-dom";
import StarfieldAnimation from "react-starfield-animation";
import logo from "../NASA_Wormball_logo.svg";

export default function Home() {
  return (
    <div className="home">
      <Link to="/nasaphoto">
        <img src={logo} alt="NASA logo" className="logo" />
      </Link>
      <StarfieldAnimation
        numParticles={400}
        style={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
}

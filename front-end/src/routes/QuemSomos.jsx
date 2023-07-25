import Navbar from "../components/NavBar";
import "../styles/QuemSomos.css"

export default function QuemSomos() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="quemSomosContainer">
          <h1>
            Quem somos
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore cupiditate vel quia dolorum adipisci. Soluta expedita molestias id officiis, et dolorem voluptas hic earum, libero nisi labore, ullam quasi!
          </p>
        </div>
      </div>
    </>
  );
}
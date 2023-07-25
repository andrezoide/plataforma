import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";

export default function Root() {
  return (
    <>
      <div id="sidebar" className="centered-inline-paragraphs">
        <div>
          <Navbar />
        </div>
        <Buttons />
        <p className="cem">100%</p>
        <p className="educacao">EDUCAÇÃO</p>
      </div>
      <Footer />
    </>
  );
}
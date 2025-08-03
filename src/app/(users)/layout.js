import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

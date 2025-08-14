import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import FloatingActionButton from "../Components/Layout/FloatingActionButton";

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <FloatingActionButton />
      {children}
      <Footer />
    </>
  );
}

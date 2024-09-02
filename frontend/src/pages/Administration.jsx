import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "@/components/Container";
import adminHierarchy from "../assets/adminHierarchy.webp";
import scrollToTop from "@/utility/scrollToTop";

function AdministrationPage() {
  useEffect(() => scrollToTop(), []);
  return (
    <div className="bg-[#00171B]">
      <Navbar />
      <Container theme="dark2" paddingBottomOnly={false}>
        <div className="w-full flex justify-center">
          <img src={adminHierarchy} className=" h-[65vh] md:h-auto" />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default AdministrationPage;

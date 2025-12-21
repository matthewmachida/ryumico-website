import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Designs() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <NavBar/>
        designs page
        <Footer/>
      </main>
    </div>
  );
}
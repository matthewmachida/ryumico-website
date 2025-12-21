import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Checkout() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <NavBar/>
        checkout page
        <Footer/>
      </main>
    </div>
  );
}
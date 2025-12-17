import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <div className="flex flex-col items-center">
          <NavBar/>
          Home Page!

          <h1 className="bg-orange-900">I'm an h1 tag!</h1>
          <p className="bg-yellow-900">I'm a p tag!</p>
        </div>
      </main>
    </div>
  );
}

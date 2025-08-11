import HomeSkills from "./components/HomeSkills";
import ParisBozzutiHeader from "./components/ParisBozzutiHeader";


export default function Home() {
  return (
    <main className="pariz-bozzuti-homepage flex flex-col items-center w-full px-24 pt-24 ">

      <ParisBozzutiHeader />

      <HomeSkills />
      
    </main>
  );
}

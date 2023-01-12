import CurrentBudget from "../components/ui/currentBudget";
import MainControlPanel from "../components/ui/MainControlPanel";

const Home = () => {
 return (
  <section className="text-center bg-msk-800   m-auto w-[600px]">
   <div className="absolute">
    <CurrentBudget />
   </div>
   <MainControlPanel />
  </section>
 );
};

export default Home;

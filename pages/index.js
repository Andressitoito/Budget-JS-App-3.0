import CurrentBudget from "../components/ui/currentBudget";
import MainControlPanel from "../components/ui/MainControlPanel";

const Home = () => {
 return (
  <section className="text-center bg-msk-800">
   <p>I am Budget JS App 3.0</p>
   <div className="absolute">
    <CurrentBudget />
   </div>
   <MainControlPanel />
  </section>
 );
};

export default Home;

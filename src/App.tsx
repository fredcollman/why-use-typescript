import BadCalculator from "./BadCalculator";
import GoodCalculator from "./GoodCalculator";

const App = () => {
  return (
    <>
      <section>
        <h2>Bad Calculator</h2>
        <BadCalculator />
      </section>
      <section>
        <h2>Good Calculator</h2>
        <GoodCalculator />
      </section>
    </>
  );
};

export default App;

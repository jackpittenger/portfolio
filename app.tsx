import { React } from "./dep.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
      section: any;
    }
  }
}

const App = () => {
  const [count, setCount] = (React as any).useState(0);
  return (
    <div id="root">
      <div id="hero">
        <section className="section section-home">
            Hero
        </section>
        <section className="section section-skills">
            Skills
        </section>
        <section className="section section-portfolio">
            Portfolio
        </section>
        <section className="section section-contact">
            Contact
        </section>
      </div>
    </div>
  );
};

export default App;

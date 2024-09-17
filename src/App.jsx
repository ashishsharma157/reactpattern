import Accordion from "./components/accordion/accordion";
import AccordionItem from "./components/accordion/accordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why this works?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="test1"
            className="accordion-item"
            title="This is test"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are into business more than 20 years.</p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="test2"
            className="accordion-item"
            title="This is for local people"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are into business more than 20 years. We are into business
                more than 20 years.We are into business more than 20 years.
              </p>
              <p>We are genious.</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;

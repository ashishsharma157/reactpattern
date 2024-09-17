import Accordion from "./components/accordion/accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why this works?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="test1" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              This is test
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>We are into business more than 20 years.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            id="test2"
            className="accordion-item"
            title="This is for local people"
          >
            <Accordion.Title className="accordion-item-title">
              his is for local people
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are into business more than 20 years. We are into business
                  more than 20 years.We are into business more than 20 years.
                </p>
                <p>We are genious.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;

import Accordion from "./components/accordion/accordion";
import SearchableList from "./components/searchableList/SearchableList";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";
const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

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
      <section>
        <SearchableList items={PLACES}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item 2"]}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;

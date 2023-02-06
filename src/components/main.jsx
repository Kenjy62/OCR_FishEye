// Components
import Photographer from "./photographer";

// JSON Data
import data from "../datas/photographers.json";

function Main() {
  return (
    <main
      id="main"
      className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-15 mt-10"
    >
      {Object.keys(data.photographers).map((key, i) => (
        <Photographer key={key} index={i} />
      ))}
    </main>
  );
}

export default Main;

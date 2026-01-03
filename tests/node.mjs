//import scrutari from "../dist/scrutari.js";
import scrutari from "scrutari";

(async () => {
  const list = await scrutari({ origin: process.env.URL });
  console.log(list);
})();

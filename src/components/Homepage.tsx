import {
  horizontalCard1,
  horizontalCard2,
  horizontalCard3,
} from "../utils/content";
import Bags from "./common/Bags";
import HorizotalCard from "./common/HorizontalCard";
import Services from "./common/Services";

const Homepage = () => {
  return (
    <div className="homepage">
      <HorizotalCard {...horizontalCard1} />
      <HorizotalCard {...horizontalCard2} />
      <HorizotalCard {...horizontalCard3} />
      <Services />
      <Bags />
    </div>
  );
};

export default Homepage;

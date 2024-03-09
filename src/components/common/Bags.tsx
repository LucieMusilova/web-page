import { setActiveBagButtonIndex } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Card from "./Card";
import { bagCards } from "../../utils/content";

const Bags = () => {
  const buttons: string[] = [
    "Všechno",
    "Papírové tašky",
    "Látkové tašky",
    "Igelitové tašky",
  ];
  const dispatch = useDispatch();
  const activeBagButtonIndex: number = useSelector(
    (state: { slice: { activeBagButtonIndex: number } }) =>
      state.slice.activeBagButtonIndex
  );

  const handleButtonClick = (index: number) => {
    dispatch(setActiveBagButtonIndex(index));
  };

  const filteredCards =
    activeBagButtonIndex === 0
      ? bagCards
      : bagCards.filter((card) => card.type === activeBagButtonIndex);

  return (
    <div className="bags">
      <div className="bags__buttons">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={() => handleButtonClick(index)}
            active={index === activeBagButtonIndex}
            buttonText={button}
            buttonColor="white"
          />
        ))}
      </div>
      <div className="bags__cards">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            title={card.title}
            image={card.image}
            type={card.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Bags;

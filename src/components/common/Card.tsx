import Button from "./Button";

type CardProps = {
  text: string;
  title: string;
  image: string;
  type: number;
};

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__image">
          <img src={props.image} alt="Bags Card" />
        </div>
        <div className="card__text">
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </div>
      </div>
      <div className="card__button">
        <Button active={false} buttonText="Zjistit více" buttonColor="green" />
      </div>
    </div>
  );
};

export default Card;

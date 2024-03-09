import { useState } from "react";
import Button from "./Button";

type HorizontalCardProps = {
  title: string;
  titleType: string;
  backgroundColor: string;
  text: string;
  bullets?: string[];
  image: string;
  imageOrder: string;
  buttonText1: string;
  buttonColor1: string;
  buttonText2?: string;
  buttonColor2?: string;
};

const HorizontalCard = (props: HorizontalCardProps) => {
  const [btnActive1, setBtnActive1] = useState(false);
  const [btnActive2, setBtnActive2] = useState(false);

  return (
    <div className={`horizontalCard horizontalCard--${props.backgroundColor}`}>
      <div
        className={`horizontalCard__text horizontalCard__text--${props.imageOrder}`}
      >
        {props.titleType === "h1" ? (
          <h1>{props.title}</h1>
        ) : (
          <h2>{props.title}</h2>
        )}
        <p>{props.text}</p>
        {props.bullets && (
          <ul>
            {props.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
        <div className="horizontalCard__buttons">
          <Button
            onClick={() => setBtnActive1(!btnActive1)}
            active={btnActive1}
            buttonText={props.buttonText1}
            buttonColor={props.buttonColor1}
          />
          {props.buttonText2 && props.buttonColor2 && (
            <Button
              onClick={() => setBtnActive2(!btnActive2)}
              active={btnActive2}
              buttonText={props.buttonText2}
              buttonColor={props.buttonColor2}
            />
          )}
        </div>
      </div>
      <div
        className={`horizontalCard__image horizontalCard__image--${props.imageOrder}`}
      >
        <img src={props.image} alt="Horizontal Card" />
      </div>
    </div>
  );
};

export default HorizontalCard;

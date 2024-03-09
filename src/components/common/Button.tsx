type ButtonProps = {
  buttonText: string;
  buttonColor: string;
  onClick?: () => void;
  active: boolean;
};

const Button = (props: ButtonProps) => {
  return (
    <div
      className={`button button--${props.buttonColor} ${props.active ? "active" : ""}`}
      onClick={props.onClick}
    >
      {props.buttonText}
    </div>
  );
};

export default Button;

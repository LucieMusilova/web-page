import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isHamMenuOpen } from "../../redux/slice";

const Ham = () => {
  const dispatch = useDispatch();
  const hamMenuOpen: boolean = useSelector(
    (state: { slice: { hamMenuOpen: boolean } }) => state.slice.hamMenuOpen
  );

  return (
    <div
      className="ham"
      onClick={() => {
        dispatch(isHamMenuOpen());
      }}
    >
      {hamMenuOpen ? (
        <img className="ham__cross" src="/images/cross.svg" alt="Cross" />
      ) : (
        <img className="ham__icon" src="/images/menu.svg" alt="Ham logo" />
      )}
    </div>
  );
};

export default Ham;

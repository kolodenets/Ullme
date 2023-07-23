import { FC } from "react";
import cn from "classnames";

import CloseBtn from "../../../public/assets/icons/closeBtn.svg";

import s from "./Popup.module.scss";

interface PopupProps {
  active: boolean;
  children: JSX.Element;
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ active, children, onClose }) => {
  return (
    <div className={cn(s.modal, { [s.active]: active })}>
      <div className={cn(s.modal__content, { [s.active]: active })}>
        <div className={cn(s.modal__contentField, { [s.active]: active })}>
          <button
            type="button"
            id="closeBtn"
            className={cn(s.modal__closeBtn, { [s.active]: active })}
            onClick={onClose}
          >
            <img src={CloseBtn} alt="close" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;

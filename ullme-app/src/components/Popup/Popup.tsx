import { FC } from "react";
import cn from "classnames";

import CloseBtn44 from "../../../public/assets/icons/closeX44.svg";

import s from "./Popup.module.scss";

interface PopupProps {
  active: boolean;
  children: JSX.Element;
  onClose: () => void;
  className?: string;
  contentClass?: string;
}

const Popup: FC<PopupProps> = ({ active, children, onClose, className, contentClass }) => {

  return (
    <div className={cn(s.modal, { [s.active]: active }, className)}>
      <div className={cn(s.modal__content, { [s.active]: active })}>
        <div className={cn(s.modal__contentField, contentClass, { [s.active]: active })}>
          <button
            type="button"
            id="closeBtn"
            className={cn(s.modal__closeBtn, { [s.active]: active })}
            onClick={onClose}
          >
            <img src={CloseBtn44} alt="close" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;

import React from 'react';

import Close from './icons/x-square.svg';

type Props = {
  visible: boolean,
  onClose: () => void,
  onSubmit: () => void
}

export const Modal: React.FC<Props> = ({ visible, onClose, children, onSubmit }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal--body">
        <div className="modal--close">
          <div onClick={() => onClose()}>
            <img src={Close} alt="Close" />
          </div>
        </div>
        <div className="modal--content">{children}</div>
        <div className="modal--footerButton" onClick={() => onSubmit()}>
          Добавить
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import Edit from '../icons/edit.svg';
import Trash from '../icons/trash-2.svg';

// ToDo: Типы
export const TableItem = ({ item }: any) => {
  return (
    <li className="dataTable__row">
      <label className="tables__label--income">{item.title} sefsdfsfsefe</label>
      <label className="tables__label--income">{item.title} sefsdfsfsefe</label>
      <label className="tables__label--income">{item.title} sefsdfsfsefe</label>
      <div className="dataTable__rowIcons">
        <img onClick={() => { }} className="dataTable__rowIcons--icon" src={Edit} alt="Edit" />
        <img onClick={() => { }} className="dataTable__rowIcons--icon" src={Trash} alt="Trash" />
      </div>
    </li>
  );
};

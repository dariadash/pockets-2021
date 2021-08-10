import React from 'react';
import { useSelector } from 'react-redux';

import { useAppSelector } from '@/model/reducers/hooks';
import Add from '../icons/x-circle.svg';
import { TableItem } from '../parts';


export const TableList = () => {
  const categories = useAppSelector((store) => store.categories.categories);
  return (
    <div className="dataTable__container">
      <div className="dataTable__header">
        <label className="dataTable__label">ДАТЫ</label>
        <label className="dataTable__label">КАТЕГОРИЯ</label>
        <label className="dataTable__label">СУММА</label>
        <div className="tables__addbutton">
          <img onClick={() => setShowAddModal(true)} className="tables__add--icon" src={Add} alt="Add" />
          <label className="dataTable__label--add">Add data</label>
        </div>
      </div>
      <div>
        {categories.map((item) => {
          return <TableItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

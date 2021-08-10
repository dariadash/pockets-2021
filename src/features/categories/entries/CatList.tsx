import React from 'react';

import Add from '../icons/x-circle.svg';
import { CatItem } from '../parts';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/model/reducers/hooks';
import { showModal } from '@/model/actions/categories';


export const CatList = () => {
  const categories = useAppSelector((store) => store.categories.categories);
  const dispatch = useDispatch()

  return (
    <div className="categories__container">
      <div className="tables__add">
        <label className="categories__label">Summary</label>
        <div className="tables__addbutton">
          <img onClick={() => dispatch(showModal())} className="tables__add--icon" src={Add} alt="Add" />
          <label className="dataTable__label--add">Add category</label>
        </div>
      </div>
      <div className="categories__header">
        <h2 className="categories__header--h2">Расходы</h2>
        <h2 className="categories__header--h2">Сумма</h2>
      </div>
      <div className="categories__table">
        {categories.map((item: any) => {
          return <CatItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

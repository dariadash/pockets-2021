import React from 'react';

export const CatItem = ({ item }: { item: any }) => {
  return (
    <>
      <div className="tables__label--income">{item.title} потрачено </div>
      <div className="tables__label--income">{item.title} 999999999999р </div>
    </>
  );
};

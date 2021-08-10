import React from 'react';
import { useDispatch } from 'react-redux';

import { TableList } from '@/features/ex-in-table';
import { AddCategoryForm, CatList } from '@/features/categories';

import { logout } from '@/model/actions/auth';
import { getCategoryData } from '@/model/actions/categories';

export const MainScreen = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getCategoryData());
    }, []);
    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div className="main__container">
            <div className="main__header">
                <h1 className="main__h1">Pockets</h1>
                <button onClick={logoutHandler}> Выйти </button>
            </div>
            <TableList />
            <AddCategoryForm />
            <CatList />
        </div>
    );
};

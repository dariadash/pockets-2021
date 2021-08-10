import React from 'react';

import { Modal } from '@/ui';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/model/reducers/hooks';
import { hideModal } from '@/model/actions/categories';


export const AddCategoryForm = () => {
    const [categoryType, setCategoryType] = React.useState('income');
    const [name, setName] = React.useState('');
    const modalVisible = useAppSelector((store) => store.categories.addModalVisible)
    const dispatch = useDispatch()
    return (
        <Modal visible={modalVisible} onClose={() => dispatch(hideModal())} onSubmit={() => alert('Он сабмит!')}>
            <h1 className="modal--header"> Добавить данные </h1>
            <div className="switch--wrapper">
                <div
                    onClick={() => setCategoryType('income')}
                    className={`switch--element ${categoryType === 'income' && 'switch--element__on'}`}
                >
                    Расходы
                </div>
                <div
                    onClick={() => setCategoryType('expense')}
                    className={`switch--element ${categoryType === 'expense' && 'switch--element__on'}`}
                >
                    Доходы
                </div>
            </div>
            <input
                className={'modalForm--input'}
                placeholder="Категория"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
        </Modal>
    );
}

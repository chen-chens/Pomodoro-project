import React, { useState } from 'react';
import MainLayout from '../../layout/mainLayout';
import CategoryList from './category';
import ToDoList from './toDoList';
import AlertNotification from '../../common/alertNotification';

export default function ToDoPage() {
  const [categoryValue, setCategoryValue] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  const UNFINISHED = 'unfinished';
  //   const FINISHED = 'finished';
  const [toDoValue, setToDoValue] = useState('');
  const [toDoData, setToDoData] = useState([]);

  const handleSubmit = () => {
    if (categoryValue) {
      const newItemData = {
        categoryId: Date.now(),
        category: categoryValue,
        listData: [],
      };
      setCategoryData([...categoryData, newItemData]);
      setCategoryValue('');
    } else {
      AlertNotification({
        type: 'warning',
        message: '請先輸入分類名稱！',
      });
    }
  };

  const handleAddListItem = () => {
    if (toDoValue) {
      const newValue = {
        id: Date.now(),
        value: toDoValue,
        status: UNFINISHED,
        spendTime: 0,
      };
      setToDoData([...toDoData, newValue]);
      setToDoValue('');
    } else {
      AlertNotification({
        type: 'warning',
        message: '請先輸入代辦事項！',
      });
    }
  };

  return (
    <MainLayout
      menu={(
        <CategoryList
          handleSubmit={handleSubmit}
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          categoryData={categoryData}
        />
      )}
      content={(
        <ToDoList
          handleAddListItem={handleAddListItem}
          toDoValue={toDoValue}
          setToDoValue={setToDoValue}
          toDoData={toDoData}
        />
      )}
    />
  );
}

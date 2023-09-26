import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
import MainLayout from '../../layout/mainLayout';
import CategoryList from './categoryList';
import ToDoList from './toDoList';
// import AlertNotification from '../../common/alertNotification';
import ThemeContext, { theme } from '../../context/themeContext';

export default function ToDoPage() {
  // const [categoryValue, setCategoryValue] = useState('');
  // const [categoryData, setCategoryData] = useState([]);

  // const UNFINISHED = 'unfinished';
  // //   const FINISHED = 'finished';
  // const [toDoValue, setToDoValue] = useState('');
  // const [toDoData, setToDoData] = useState([]);

  const [themsState, setThemeState] = useState(theme.light);
  const themeContextProvider = useMemo(() => {
    console.log('themeContextProvider!');
    return ({ themsState, setThemeState });
  }, [themsState, setThemeState]);
  const [forceRender, setForceRender] = useState(false);

  // const handleSubmit = () => {
  //   if (categoryValue) {
  //     const newItemData = {
  //       categoryId: Date.now(),
  //       category: categoryValue,
  //       listData: [],
  //     };
  //     setCategoryData([...categoryData, newItemData]);
  //     setCategoryValue('');
  //   } else {
  //     AlertNotification({
  //       type: 'warning',
  //       message: '請先輸入分類名稱！',
  //     });
  //   }
  // };

  // const handleAddListItem = () => {
  //   if (toDoValue) {
  //     const newValue = {
  //       id: Date.now(),
  //       value: toDoValue,
  //       status: UNFINISHED,
  //       spendTime: 0,
  //     };
  //     setToDoData([...toDoData, newValue]);
  //     setToDoValue('');
  //   } else {
  //     AlertNotification({
  //       type: 'warning',
  //       message: '請先輸入代辦事項！',
  //     });
  //   }
  // };

  return (
    <>
      {console.log('hey! I am in ToDoPage.')}
      <MainLayout
        menu={(
          <ThemeContext.Provider value={themeContextProvider}>
            <CategoryList />

            {/* handleSubmit={handleSubmit}
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
            categoryData={categoryData} */}
          </ThemeContext.Provider>
        )}
        content={(
          <ThemeContext.Provider value={{ themsState, setThemeState }}>
            <ToDoList />

            {/* handleAddListItem={handleAddListItem}
              toDoValue={toDoValue}
              setToDoValue={setToDoValue}
              toDoData={toDoData} */}
          </ThemeContext.Provider>
        )}
      />
      <Button onClick={() => setForceRender(!forceRender)}>Rerender Parent</Button>
    </>
  );
}

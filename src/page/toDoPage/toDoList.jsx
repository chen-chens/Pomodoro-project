import React, { useContext } from 'react';
import {
  Space, Typography, Switch,
} from 'antd';
// import PropTypes from 'prop-types';
// import UserContext from '../../context/userContext';
import ThemeContext, { theme } from '../../context/themeContext';

function ToDoList() {
  // const {
  //   handleAddListItem,
  //   toDoValue,
  //   setToDoValue,
  //   toDoData,
  // } = props;
  // const { userState } = useContext(UserContext);
  const { setThemeState } = useContext(ThemeContext);

  return (
    <>
      <Typography.Title level={2} type="warning">
        {console.log('I am in ToDoList: ', useContext(ThemeContext))}
      </Typography.Title>
      <Space>
        {/* <Input
          value={toDoValue}
          onChange={(e) => setToDoValue(e.target.value)}
        />
        <Button type="primary" onClick={handleAddListItem}>+</Button> */}
      </Space>
      {/* <ul>
        {toDoData.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul> */}
      <Switch
        style={{ marginTop: 10 }}
        checkedChildren="深色主題"
        unCheckedChildren="淺色主題"
        defaultChecked
        onChange={() => {
          setThemeState((pre) => (pre === theme.light ? theme.dark : theme.light));
        }}
      />
    </>
  );
}

ToDoList.defaultProps = {
  toDoData: [],
  toDoValue: '',

};

// ToDoList.propTypes = {
//   toDoData: PropTypes.arrayOf(PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.any,
//   ])),
//   toDoValue: PropTypes.string,
//   handleAddListItem: PropTypes.func.isRequired,
//   setToDoValue: PropTypes.func.isRequired,
// };

export default ToDoList;

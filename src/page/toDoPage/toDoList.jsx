import React from 'react';
import { Input, Button, Space } from 'antd';
import PropTypes from 'prop-types';

function ToDoList(props) {
  const {
    handleAddListItem,
    toDoValue,
    setToDoValue,
    toDoData,
  } = props;

  return (
    <>
      <Space>
        <Input
          value={toDoValue}
          onChange={(e) => setToDoValue(e.target.value)}
        />
        <Button type="primary" onClick={handleAddListItem}>+</Button>
      </Space>
      <ul>
        {toDoData.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

ToDoList.defaultProps = {
  toDoData: [],
  toDoValue: '',

};

ToDoList.propTypes = {
  toDoData: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ])),
  toDoValue: PropTypes.string,
  handleAddListItem: PropTypes.func.isRequired,
  setToDoValue: PropTypes.func.isRequired,
};

export default ToDoList;

import React from 'react';
import {
  Menu, Space, Button, Input,
} from 'antd';
import PropTypes from 'prop-types';

function CategoryList(props) {
  const {
    handleSubmit,
    categoryValue,
    setCategoryValue,
    categoryData,
  } = props;

  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        {categoryData.map((item) => (
          <Menu.Item key={item.categoryId}>{item.category}</Menu.Item>
        ))}
        <Space>
          <Input
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          />
          <Button type="primary" onClick={handleSubmit}>+</Button>
        </Space>
      </Menu>
    </>
  );
}

CategoryList.defaultProps = {
  categoryData: [],
  categoryValue: '',

};

CategoryList.propTypes = {
  categoryData: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ])),
  categoryValue: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  setCategoryValue: PropTypes.func.isRequired,
};

export default CategoryList;

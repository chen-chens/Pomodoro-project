import React, { useContext } from 'react';
import {
  Space, Switch,
} from 'antd';
// import PropTypes from 'prop-types';
import ThemeContext, { theme } from '../../context/themeContext';

function CategoryList() {
  // const {
  //   handleSubmit,
  //   categoryValue,
  //   setCategoryValue,
  //   categoryData,
  // } = props;
  const { themsState, setThemeState } = useContext(ThemeContext);
  return (
    <>
      <div
        theme="dark"
        mode="inline"
        style={{
          height: '100%', borderRight: 0, backgroundColor: themsState.backgroundColor, color: themsState.color,
        }}
      >
        {/* <ul>
          {categoryData.map((item) => (
            <li key={item.categoryId}>{item.category}</li>
          ))}
        </ul> */}
        {console.log('I am in CategoryList: ', useContext(ThemeContext))}
        <Space>
          {/* <Input
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          />
          <Button type="primary" onClick={handleSubmit}>+</Button> */}
        </Space>
        <Switch
          style={{ marginTop: 10 }}
          checkedChildren="深色主題"
          unCheckedChildren="淺色主題"
          defaultChecked
          onChange={() => {
            setThemeState((pre) => (pre === theme.light ? theme.dark : theme.light));
          }}
        />
      </div>
    </>
  );
}

CategoryList.defaultProps = {
  categoryData: [],
  categoryValue: '',

};

// CategoryList.propTypes = {
//   categoryData: PropTypes.arrayOf(PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.any,
//   ])),
//   categoryValue: PropTypes.string,
//   handleSubmit: PropTypes.func.isRequired,
//   setCategoryValue: PropTypes.func.isRequired,
// };

export default CategoryList;

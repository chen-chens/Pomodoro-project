import React from 'react';
import {
  Layout, Breadcrumb, Button,
} from 'antd';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// import UserContext from '../context/userContext';

const {
  Header, Content, Sider,
} = Layout;

function MainLayout({ content, menu }) {
  const history = useHistory();
  // const { setUserState } = useContext(UserContext);

  // const handleLogout = () => {
  //   setUserState({
  //     hasLogin: false,
  //     userInfo: { name: 'Guest' },
  //   });
  // };

  return (
    <Layout>
      <Header className="header">
        {/* <Typography.Title level={2} type="warning">
          Poromodo Project
        </Typography.Title> */}
        <Button onClick={() => history.push('./loginPage')}>登出</Button>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {menu}
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

MainLayout.defaultProps = {
  menu: null,
};

MainLayout.propTypes = {
  content: PropTypes.element.isRequired,
  menu: PropTypes.element,
};

export default MainLayout;

import React from 'react';
import {Row, Col} from 'antd';

const DEFAULT_COL_PROPS = {
  sm: {span: 20, offset: 2},
  md: {span: 14, offset: 5},
  lg: {span: 12, offset: 6},
  xl: {span: 10, offset: 7},
  xxl: {span: 8, offset: 8},
};

const Layout = ({children}) => (
  <Row>
    <Col {...DEFAULT_COL_PROPS}>{children}</Col>
  </Row>
);

export default Layout;

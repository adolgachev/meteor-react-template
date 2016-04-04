import React from 'react';

const goHome = () => FlowRouter.go(`/`);

const Layout = ({content = () => null, title = 'Sample App' }) => (
  <div id='root-content'>
    {content()}
  </div>
);

export default Layout;

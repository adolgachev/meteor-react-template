import React from 'react';

class Layout extends React.Component {
  render() {
    const {content, title} = this.props;

    return (
      <div id='root-content'>
        {content()}
      </div>
    );
  }

  goHome() {
    FlowRouter.go(`/`);
  }

}

export default Layout;

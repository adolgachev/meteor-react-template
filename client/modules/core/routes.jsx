import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/main-layout';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div id="root">I am a sample app</div>),
        title: 'Sample App'
      });
    }
  });

}

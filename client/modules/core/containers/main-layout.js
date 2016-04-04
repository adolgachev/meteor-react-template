import MainLayout from '../components/main-layout';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const { LocalState } = context();

  const shown = LocalState.get('SHOW_NAV');
  onData(null, { shown });
};

export const depsMapper = (context, actions) => ({
  // showNav: actions.nav.show,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainLayout);

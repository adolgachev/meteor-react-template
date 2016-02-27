import {createApp} from 'mantra-core';
import initContext from './configs/context';
// (material-ui) import injectTapEventPlugin from 'react-tap-event-plugin';

// modules
import coreModule from './modules/core';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
// (material-ui) injectTapEventPlugin();

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();

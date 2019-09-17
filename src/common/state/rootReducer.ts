import { combineReducers } from 'redux';

import { SidebarReducers } from '../../components/Landing/Sidebar/Sidebar.redux';

export const rootReducer = combineReducers({
  sidebar: SidebarReducers
});

export type AppState = ReturnType<typeof rootReducer>;

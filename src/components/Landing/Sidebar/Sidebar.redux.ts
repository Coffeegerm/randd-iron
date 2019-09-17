import { AppState } from '../../../common/state/rootReducer';
import { combineReducers, Dispatch } from 'redux';
import { IAction } from '../../../common/redux/redux';

// Action Names
const fileName = 'Sidebar.redux.ts';

export class SidebarActions {
  public static SetCurrentComponent = 'SetCurrentComponent' + fileName.toUpperCase();
}

// Action Types

export const setCurrentComponentAction = (id: number) => {
  return {
    type: SidebarActions.SetCurrentComponent,
    payload: id
  };
};

// Action creators

export const dispatchSetCurrentComponent = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(setCurrentComponentAction(id));
  };
};

// Selectors

// Reducers

export const currentComponentId = (state: number = 0, action: IAction): number => {
  switch (action.type) {
    case SidebarActions.SetCurrentComponent:
      return action.payload;
  }
  return state;
};

export const SidebarReducers = combineReducers({});

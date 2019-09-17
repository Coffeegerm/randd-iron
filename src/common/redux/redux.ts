export interface IErrorAction {
  type: string;
  payload: Error;
  logID: number;
  isError: boolean;
  message: string;
}

// tslint:disable:no-any
export interface INormalAction {
  type: string;
  payload: any; // TODO: Remove any type.
}

export type IAction = IErrorAction | INormalAction;

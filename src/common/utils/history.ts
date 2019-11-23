import { createBrowserHistory } from 'history';
import * as React from 'react';

export const History = createBrowserHistory();

export function handleNavigateEvent(route: string): (event: React.MouseEvent<HTMLElement>) => void {
  return (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigateTo(route);
  };
}

export function navigateTo(route: string): void {
  History.push(route);
}

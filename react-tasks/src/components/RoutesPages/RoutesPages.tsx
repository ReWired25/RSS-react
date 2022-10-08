import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { IRoutesPagesProps, RouteValue } from './types';

class RoutesPages extends React.Component<IRoutesPagesProps> {
  handlePage(path: string, page: JSX.Element) {
    if (path === RouteValue.MainPath) {
      return <Route key={path} index element={page} />;
    }

    return <Route key={path} path={path} element={page} />;
  }

  render() {
    return (
      <Routes>
        <Route
          path={this.props.pages[RouteValue.Layout].path}
          element={this.props.pages[RouteValue.Layout].page}
        >
          {this.props.pages.slice(RouteValue.Main).map(({ path, page }) => {
            return this.handlePage(path, page);
          })}
        </Route>
      </Routes>
    );
  }
}

export default RoutesPages;

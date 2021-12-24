import { Component, Host, h } from '@stencil/core';
import { Route } from '@stencil/router';
import { Router } from '../../shared/router';

@Component({
  tag: 'app-nest',
  styleUrl: 'app-nest.css',
  shadow: true,
})
export class AppNest {

  render() {
    return (
      <Host>
        <h1>App Nest</h1>
        <Router.Switch>
          <Route path="/nest/child">
            <app-child />
          </Route>
        </Router.Switch>
      </Host>
    );
  }

}

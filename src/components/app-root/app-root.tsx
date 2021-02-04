import { Component, h } from '@stencil/core';
import { Route, match } from 'stencil-router-v2';
import { Router } from '../../shared/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <Router.Switch>
            <Route path="/">
              <app-home />
            </Route>
            <Route path={match('/profile/:name')} render={({ name }) => <app-profile name={name} />} />
          </Router.Switch>
        </main>
      </div>
    );
  }
}

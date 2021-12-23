import { Component, h } from '@stencil/core';
import { href } from '@stencil/router';
import { push } from '../../shared/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  onClick = () => push('/profile/Clicked!');

  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <a {...href('/profile/stencil')}>
          <button>Profile page</button>
        </a>
        <button onClick={this.onClick}>Click me!</button>
      </div>
    );
  }
}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-child',
  styleUrl: 'app-child.css',
  shadow: true,
})
export class AppChild {

  render() {
    return (
      <Host>
        <h2>App Child</h2>
      </Host>
    );
  }

}

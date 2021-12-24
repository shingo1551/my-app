import { Component, Host, h } from '@stencil/core';
import state from '../../shared/store';

@Component({
  tag: 'app-store',
  styleUrl: 'app-store.css',
  shadow: true,
})
export class AppStore {

  componentWillLoad() {
    setInterval(() => state.seconds++, 1000);
  }

  render() {
    return (
      <Host>
        <button onClick={() => state.clicks++}>
          {state.clicks}
        </button>
        <p>
          Seconds: {state.seconds}
          <br />
          Squared Clicks: {state.squaredClicks}
        </p>
      </Host>);
  }

}

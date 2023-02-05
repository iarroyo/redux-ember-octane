import Service from '@ember/service';
//eslint-disable-next-line
//@ts-ignore
import { createStore } from 'tracked-redux';
import rootReducer, { ReduxState } from '../reducers';
import { action } from '@ember/object';

export default class ReduxService extends Service {
  #store = createStore(
    rootReducer,
    //eslint-disable-next-line
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  get state(): ReduxState {
    return this.#store.getState();
  }

  @action
  dispatch(...rest: any) {
    this.#store.dispatch(...rest);
  }
}

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { trackedFunction } from 'ember-resources/util/function';

import { ADD_ORGANIZATION, ADD_USER } from '../../actions';
import { action } from '@ember/object';

export default class SampleReduxComponent extends Component {
  //eslint-disable-next-line
  //@ts-ignore
  @service redux;

  @action
  addUser(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const user = inputElement.value.trim();
    const hasValue = Boolean(user);

    if (event.key === 'Enter' && hasValue) {
      this.redux.dispatch(ADD_USER(user));
      inputElement.value = '';
    }
  }

  @action
  addOrganization(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const organization = inputElement.value.trim();
    const hasValue = Boolean(organization);

    if (event.key === 'Enter' && hasValue) {
      this.redux.dispatch(ADD_ORGANIZATION(organization));
      inputElement.value = '';
    }
  }

  @action
  logOrganizationRedux() {
    console.log(...this.redux.state.organizations);
  }

  @tracked endpoint = 'starships';

  concatUsersOrgs = trackedFunction(this, async () => {
    return [...this.redux.state.organizations, ...this.redux.state.users];
  });

  get records() {
    return this.concatUsersOrgs.value ?? [];
  }
}

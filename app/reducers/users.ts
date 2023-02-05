type UsersState = Array<string>;

const initialState: Array<UsersState> = [];

export default function reducer(state: UsersState, action: any) {
  switch (action.type) {
    case 'ADD_USER': {
      return [...state, action.user];
    }
  }
  return state ?? initialState;
}

export type UsersReducer = {
  organizations: UsersState;
};

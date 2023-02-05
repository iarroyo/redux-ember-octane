type OrganizationsState = Array<string>;
const initialState: OrganizationsState = [];

export default function reducer(state: OrganizationsState, action: any) {
  switch (action.type) {
    case 'ADD_ORGANIZATION': {
      return [...state, action.organization];
    }
  }
  return state ?? initialState;
}

export type OrganizationsReducer = {
  organizations: OrganizationsState;
};

import {ACTION_STRING} from '../actions/actionString';
import {ActionType} from 'redux-promise-middleware';

const initialState = {
  userData: {
    token: '',
    id: null,
    roles_id: null,
  },

  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const authReducer = (prevState = initialState, action) => {
  const {loginAuth} = ACTION_STRING;
  const {Pending, Fulfilled, Rejected} = ActionType;

  switch (action.type) {
    case loginAuth.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case loginAuth.concat('_', Fulfilled):
      console.log('fulfilled', data);
      const data = action.payload.data;
      const userData = {
        ...prevState.userData,
        token: data.result.token,
        roles_id: data.result.payload.roles_id,
        id: data.result.payload.id,
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData,
      };
    case loginAuth.concat('_', Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };

    default:
      return prevState;
  }
};

export default authReducer;

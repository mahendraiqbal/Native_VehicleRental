import {ACTION_STRING} from '../actions/actionString';
import {ActionType} from 'redux-promise-middleware';

const initialState = {
  image: '',
  token: null,
  id: null,
  roles_id: null,

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
      const data = action.payload.data;
      console.log('fulfilled', data);
      const userData = {
        ...prevState.userData,
        token: data.result.data.token,
        image: data.result.data.image,
        roles_id: data.result.data.roles_id,
        id: data.result.data.id,
      };
      console.log('reducers', userData);
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

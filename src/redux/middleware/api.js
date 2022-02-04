import { FAILURE, REQUEST, SUCCESS } from '../index.js';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, ...rest } = action;
  next({ ...rest, type: type + REQUEST });

  try {
    const req = await fetch(CallAPI);
    const data = await req.json();
    next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
  }
};

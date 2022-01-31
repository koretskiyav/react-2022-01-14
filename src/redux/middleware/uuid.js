import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  next({...action, id: uuidv4(), userId: uuidv4()});
};
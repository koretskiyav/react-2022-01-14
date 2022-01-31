import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  next({ id: uuidv4(), ...action });
};

import { VALIDATE_ATTACK } from './constants';

export const validateAttack = shipIndex => ({
  type: VALIDATE_ATTACK,
  payload: shipIndex,
});

import { CanActivateFn } from '@angular/router';

export const portalGuard: CanActivateFn = (route, state) => {
  return true;
};

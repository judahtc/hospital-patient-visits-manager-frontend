import { CanActivateFn } from '@angular/router';
import { HttpBackend } from '@angular/common/http';
export const portalGuard: CanActivateFn = (route, state) => {
  return true;
};

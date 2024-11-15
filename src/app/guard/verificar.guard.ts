import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

export const verificarGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService); 
  const router = inject(Router);

  const userRole = cookieService.get('role');
  const userId = cookieService.get('operarioId');
  const authToken = cookieService.get('authtoken'); 

  if (userRole === 'admin' && authToken) {
    return true;
  } 
  
  if (userRole === 'user' && authToken) {
    console.log('Usuario no es admin.');
    router.navigate([`vistaUsuario/${userId}`]);
    return false;
  } 
  
  router.navigate(['/login']);
  return false;
};

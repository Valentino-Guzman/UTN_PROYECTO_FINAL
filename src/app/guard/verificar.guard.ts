import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

export const verificarGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService); 
  const router = inject(Router);

  const userRole = cookieService.get('role');
  const userId = cookieService.get('operarioId');

  if (userRole === 'admin') {
    return true; 
  } else {
    console.log('Usuario no es admin.');
    router.navigate([`vistaUsuario/${userId}`]);  
    return false;  
  }
};

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


// @Injectable({
//     providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//     public constructor(private myRouter: Router) { }

//     public canActivate(): boolean {

//         if (store.getState().authState.user)
//             return true;

//         this.notify.error("You Must Login To access this page");
//         this.myRouter.navigateByUrl("/home");
//         return false;
//     }

// }

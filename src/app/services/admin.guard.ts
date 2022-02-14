import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


// @Injectable({
//     providedIn: 'root'
// })

// export class AdminGuard implements CanActivate {

//     public constructor(private myRouter: Router) { }

//     public canActivate(): boolean {

//         if (store.getState().authState.user?.isAdmin)
//             return true;

//         this.notify.error("Access restricted to Administors Only!");
//         this.myRouter.navigateByUrl("/home");
//         return false;
//     }

// }

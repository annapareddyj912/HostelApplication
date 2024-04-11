import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginComponent } from "../pages/login/login.component";
import { LoginService } from "./login.service";

// const TOKEN_HEADER='Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginService)
    {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): //input
                Observable<HttpEvent<any>> {//output
        //add the jwt token(LocalStorage) request
        let authreq=req;
        const token=this.login.getToken();
        console.log("inside interceptor");
        console.log(token);
        if(token!=null)
        {
            authreq=authreq.clone({
                setHeaders:{Authorization:`Bearer ${token}`},
            })
        }
        console.log(authreq);
        return next.handle(authreq);
    }
}
export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    }
]
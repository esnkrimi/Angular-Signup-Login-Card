# EsnSignupLogin

A signIn/signUp card with a luxury design .

----------------------DEMO

https://esnsignuplogin.stackblitz.io

https://stackblitz.com/edit/esnsignuplogin

----------------------INSTALLATION

        npm i esn-signup-login

        import { EsnSignupLoginComponent } from 'esn-signup-login';

----------------------USAGE

            data = {
                forgetHref: 'https://.....',
                sigunpApiHref: 'https://.....',
                loginApiHref: 'https://.....',
                signupFields: {
                    firstname: true,
                    lastname: true,
                    email: true,
                    password: true,
                    mobile: true,
                },
                backgroundColor: 'black',
                textColor: 'yellow',
                btnClass:'btn-primary'
            }


            <esn-signup-login
                [data]="data" 
                (callbackLogin)="callbackLogin($event)"    //Login API callback  
                (callbackSignup)="callbackSignup($event)"  //Signup API callback
            >    
            </esn-signup-login>
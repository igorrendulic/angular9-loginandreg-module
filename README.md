# Angular 9 with Material Design as Feature module / Micro App

## Idea

The idea of Micro APP with Angular 9 is to have a self contained Angular Material Module as a Micro App that can easily be included in any project without or barely any modifications. Thus the idea of MicroApp. 

`This "Micro App" is only a demo app based on the idea creating a Micro App. It may be used in real application with slight modifications, but it's main purpose is to prove to myself that such a thing is even possible and usable.`

## Contents

- [Install](#install)
- [Usage](#usage)
    - [app.module.ts](#app.module.ts)
    - [Include module](#include-module)

## Install

Start off by creating a new Angular App with CLI tool:
```bash
ng new loginandregapp
```

When asked add Angular Routing and select SCSS (or preferred):
```bash
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```

Install required dependencies to newly created project:
```bash
npm install ngx-cookie-service
ng add @angular/material
npm i -s @angular/flex-layout @angular/cdk
```

Install github submodule
```bash
git submodule add https://github.com/igorrendulic/angular9-loginandreg-module.git src/app/modules/loginandreg
```

## Usage


### app.module.ts

Open up your `app.module.ts` file and add the following imports:
```javascript
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

In the imports section add `BrowserAnimationsModule` and `HttpClientModule`:
```javascript
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
```

In the providers section add:
```javascript
providers: [CookieService, 
  {provide: "ApiUrl", useValue: "https://enrz9d80zy259.x.pipedream.net"}],
```
where "https://enrz9d80zy259.x.pipedream.net" is your servers endpoint url.

### Include Module

We're going to lazy load external modules (recommended).

Open up your `app-routing.module.ts` and add:
```javascript
const loginRegModule = () => import('./modules/loginandreg/loginandreg.module').then(x => x.LoginandregModule)
```

in const routes:Routes = [] add:
```javascript
{path: 'user', loadChildren: loginRegModule}
```

Now visit login and registration forms: `http://localhost:4200/user/login`

### Update all submodules

```bash
git submodule foreach git pull origin master
```


// import { bootstrapApplication } from '@angular/platform-browser';
//
// import { AppComponent } from './app/app.component';
// import {AppModule} from "./app/app.module";
// // import {HeaderComponent} from "./app/header.component";
//
// // bootstrapApplication(AppComponent).catch((err) => console.error(err));
// bootstrapApplication(AppModule).catch((err) => console.error(err));
// // bootstrapApplication(HeaderComponent);


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)
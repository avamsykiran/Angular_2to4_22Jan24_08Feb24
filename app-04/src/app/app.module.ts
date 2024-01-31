import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FriendsComponent } from './friends/friends.component';
import { BannerComponent } from './banner/banner.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { IntoWordsPipe } from './into-words.pipe';
import { FormatNumberPipe } from './format-number.pipe';

const routes:Routes = [
  {path:'',pathMatch:'full',redirectTo:"/welcome"},
  {path:"welcome",component:WelcomeComponent},
  {path:"friends",component:FriendsComponent},
  {path:"pd",component:PipesDemoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FriendsComponent,
    BannerComponent,
    PipesDemoComponent,
    IntoWordsPipe,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

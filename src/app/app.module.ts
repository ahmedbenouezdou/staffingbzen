import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoCandidatComponent } from './info-candidat/info-candidat.component';
import { CandidateCometenceComponent } from './candidate-cometence/candidate-cometence.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCandidatComponent,
    CandidateCometenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

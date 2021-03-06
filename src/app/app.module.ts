import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { HighlightDirective } from './highlight.directive';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormcomponentComponent,
    HighlightDirective,
    QuotedetailsComponent,
    DateCountPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

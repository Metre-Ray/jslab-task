import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS  }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FilteringPipePipe } from './pipes/filtering-pipe.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ParamInterceptor } from './services/paramInterceptor';
import { YoutubeRequestService } from './services/youtube-request.service';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilteringPipePipe,
    HighlightDirective,
    ItemDetailsComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [YoutubeRequestService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

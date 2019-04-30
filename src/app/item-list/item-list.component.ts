import { Component, OnInit } from '@angular/core';
import { YoutubeRequestService } from '../youtube-request.service';
import { Observable, AsyncSubject, of, Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  query = '';
  result = [];
  nextPageToken = '';
  filterValue = '';
  oresult = of(this.result);
  filterInput = new FormControl();  // the element bound to this variable


  constructor(private service: YoutubeRequestService) {}

  subj = new AsyncSubject();
  subj2: Subscription;

  search(event) {
    event.preventDefault();
    console.log('query: ', this.query);
    this.service.search(this.query).subscribe(
      (data: any) => {
        console.log('list: ', data);
        this.nextPageToken = data.nextPageToken;
        this.result = data.items;
      }
    )
  }

  filterInputFunc(event) {    // ??
    this.subj.next(event)
  }

  ngOnDestroy() {
    this.subj2.unsubscribe();
  }

  ngOnInit() {
    this.subj2 = this.filterInput
      .valueChanges   //when user enters a value for every character returns observable instance
      .pipe(debounceTime(800))
      .subscribe(data => {
        this.filterValue = data;
        console.log(data);
      });
  }

}

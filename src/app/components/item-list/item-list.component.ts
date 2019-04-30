import { Component, OnInit } from '@angular/core';
import { YoutubeRequestService } from '../../services/youtube-request.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  query = '';
  result = [];
  pageItems = [];
  filterValue = '';
  numberOfItemsOnPage = 20;
  filterInput = new FormControl();
  sub: Subscription;
  pageNumber: number = 1;

  constructor(private service: YoutubeRequestService) {}

  search(event) {
    event.preventDefault();
    this.pageNumber = 1;
    this.service.search(this.query).subscribe(
      (data: any) => {
        this.result = data.items;
        this.changePageItems();
      }
    )
  }

  changePageItems() {
    this.pageItems = this.result.slice(this.numberOfItemsOnPage * (this.pageNumber - 1), this.numberOfItemsOnPage * this.pageNumber);
  }

  nextPage() {
    if (this.pageNumber >= this.result.length) return;
    this.pageNumber += 1;
    this.changePageItems();
  }

  previousPage() {
    if (this.pageNumber <= 0) return;
    this.pageNumber -= 1;
    this.changePageItems();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.filterInput
      .valueChanges
      .pipe(debounceTime(800))
      .subscribe(data => {
        this.filterValue = data;
      });
  }

}

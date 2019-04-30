import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   // provides a params Observable which we can subscribe to get the route parameters
import { YoutubeRequestService } from '../../services/youtube-request.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  id: string;
  item: any;
  private sub: any;
  private sub2: any;

  constructor(private route: ActivatedRoute, private service: YoutubeRequestService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.sub2 = this.service.searchById(this.id)
      .pipe(map(value => value['items'][0]))
        .subscribe(data => {
          this.item = data;
          console.log('data: ', data);
        });
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

}

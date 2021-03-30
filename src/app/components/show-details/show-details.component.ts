import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../common/constants/global-constants';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  public data: any;
  private id: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.q;
    });
    this.http.get<any>(GlobalConstants.host + '/api/show-details?q=' + this.id).subscribe({
      next: data => {
        this.data = data;
        console.error( data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

}

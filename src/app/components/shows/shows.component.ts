import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../common/constants/global-constants';
import {TvShow} from '../../common/models/tv-show.model';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class ShowsComponent implements OnInit {
  @Input() public data: TvShow[] = [];
  public page: any;
  public initial: any;
  public numberOfShows: any;
  public pages: any;
  public total: any;
  public searchKey: any;
  private errorMessage: any;
  public isLoading = true;
  public nullImage = 'https://static.episodate.com/images/no-image.png';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(GlobalConstants.host + '/api/shows').subscribe({
      next: data => {
        this.initialize(data);
        this.isLoading = false;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }


  public search(searchKey: string, page: any): void {
    this.data = [];
    this.isLoading = true;
    this.searchKey = searchKey;
    this.http.get<any>(GlobalConstants.host + '/api/shows' + '?q=' + this.searchKey + '&page=' + page)
      .subscribe({
        next: data => {
          this.initialize(data);
          this.isLoading = false;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      });
  }

  private initialize(data: any): void {
    this.page = data.page;
    this.pages = data.pages;
    this.total = data.total;
    this.data = data.tv_shows;
    this.numberOfShows = this.data.length;
    if (this.page > 1) {
      this.initial = this.page * 10 + 1;
    } else {
      if (this.total > 0) {
        this.initial = 1;
      } else {
        this.numberOfShows = 1;
        this.initial = 0;
      }
    }
  }
}

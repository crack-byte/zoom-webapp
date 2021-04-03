import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../common/constants/global-constants';
import {ActivatedRoute} from '@angular/router';
import {TvShow} from '../../common/models/tv-show.model';

@Component({
    selector: 'app-show-details',
    templateUrl: './show-details.component.html',
    styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
    @Input()
    public data!: TvShow;
    private id: any;
    public imgCollection: Array<object> = [
        {
            image: 'https://loremflickr.com/g/600/400/paris',
            thumbImage: 'https://loremflickr.com/g/1200/800/paris',
            alt: 'Image 1',
            title: 'Image 1'
        }, {
            image: 'https://loremflickr.com/600/400/brazil,rio',
            thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
            title: 'Image 2',
            alt: 'Image 2'
        }, {
            image: 'https://loremflickr.com/600/400/paris,girl/all',
            thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
            title: 'Image 3',
            alt: 'Image 3'
        }, {
            image: 'https://loremflickr.com/600/400/brazil,rio',
            thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
            title: 'Image 4',
            alt: 'Image 4'
        }, {
            image: 'https://loremflickr.com/600/400/paris,girl/all',
            thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
            title: 'Image 5',
            alt: 'Image 5'
        }, {
            image: 'https://loremflickr.com/600/400/brazil,rio',
            thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
            title: 'Image 6',
            alt: 'Image 6'
        }
    ];

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.id = params.q;
        });
        this.http.get<any>(GlobalConstants.host + '/api/show-details?q=' + this.id).subscribe({
            next: data => {
                this.data = data.tvShow;
                console.error(data);
            },
            error: error => {
                console.error('There was an error!', error);
            }
        });
    }


}

import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../services/backend-api.service';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit {
  XspaceDetails: any = [];
  limitpage  = 12;
  page = 1;

  constructor(private ApiConnect: BackendApiService) {
    this.Detailload();
  }

  ngOnInit(): void {
  }
Detailload() {
    this.ApiConnect.getDetail('https://api.spaceXdata.com/v3/launches?limit=12').subscribe((response: any[]) => {
    this.XspaceDetails = response;
  });
}
  Launchload(year) {
    this.ApiConnect.getDetail('https://api.spaceXdata.com/v3/launches?limit=12&launch_year=' + year).subscribe((response: any[]) => {
      this.XspaceDetails = response;
    });
  }
  LauncdSuccessload(value) {
    this.ApiConnect.getDetail('https://api.spaceXdata.com/v3/launches?limit=12&launch_success=' + value).subscribe((response: any[]) => {
      this.XspaceDetails = response;
    });
  }
  LandSuccessload(value) {
    this.ApiConnect.getDetail('https://api.spaceXdata.com/v3/launches?limit=12&land_success=' + value).subscribe((response: any[]) => {
      this.XspaceDetails = response;
    });
  }
}

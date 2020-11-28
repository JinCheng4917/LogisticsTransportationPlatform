import { Component, OnInit } from '@angular/core';
// import { EChartOption } from 'echarts';
// import { DashboardService } from '../../../service/dashboard.service';
// import { CollegeService } from '../../../service/college.service';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name: Array<string>;

  title = environment.title;


  constructor(
    // private dashboardService: DashboardService,
    // private collegeService: CollegeService
  ) {
  }

  ngOnInit(): void {
    // this.collegeService.getAll().subscribe((colleges: Array<College>) => {
    //   this.countSubjectNumber(colleges);
    // });

    /** 初始化 */
    this.name = new Array<string>();
  }
}

import { Component, OnInit } from '@angular/core';
import { UsergridviewService } from '../service/usergridview.service';
@Component({
  selector: 'app-griddisplay',
  templateUrl: './griddisplay.component.html',
  styleUrls: ['./griddisplay.component.scss']
})
export class GriddisplayComponent implements OnInit {

  result:any;

  constructor(private usrService:UsergridviewService) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.usrService.getData().subscribe((data)=>{
     // this.dataSource = data.data;
      this.result=data;
      console.log();
    })
 }
}

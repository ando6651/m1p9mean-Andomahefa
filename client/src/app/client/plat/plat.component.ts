import { Component, OnInit } from '@angular/core';
import { PlatService } from '../../shared/plat.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {
  datas: any;
  constructor(private platService: PlatService) { }

  ngOnInit(): void {
    this.platService.getPlatList().subscribe(
      (res:any) => {
      },
      err => {
        console.log(err);
      }
    );
  }

}

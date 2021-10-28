import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { arrayModle } from '../types';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  localHistoryData: arrayModle[] = []
  constructor(private ruoter: RouterService) { }

  ngOnInit(): void {
   this.getHistory()
  }

  
  getHistory() {
    this.ruoter.getArrays().subscribe((data: arrayModle[]) => {
      console.log(data);
      this.localHistoryData = data
    })
  }
}

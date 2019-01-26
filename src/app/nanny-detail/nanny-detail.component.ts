import { Component, OnInit, Input } from '@angular/core';
import { Nanny } from '../nanny';


@Component({
  selector: 'app-nanny-detail',
  templateUrl: './nanny-detail.component.html',
  styleUrls: ['./nanny-detail.component.css']
})
export class NannyDetailComponent implements OnInit {
  @Input() nanny : Nanny;
  
  constructor() { }

  ngOnInit() {
  }

}

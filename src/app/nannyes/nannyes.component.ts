import { Component, OnInit } from '@angular/core';
import {Nanny} from '../nanny';
import {NANNYES} from '../mock-nannyes';

@Component({
  selector: 'app-nannyes',
  templateUrl: './nannyes.component.html',
  styleUrls: ['./nannyes.component.css']
})
export class NannyesComponent implements OnInit {
  nannyes = NANNYES;
  selectedNanny : Nanny ;

  onSelect(nanny:Nanny){
    this.selectedNanny = nanny;
  }

  constructor() { }

  ngOnInit() {
  }

}
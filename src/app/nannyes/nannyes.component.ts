import { Component, OnInit } from '@angular/core';
import {Nanny} from '../nanny';
import { NannyService} from '../nanny.service';

@Component({
  selector: 'app-nannyes',
  templateUrl: './nannyes.component.html',
  styleUrls: ['./nannyes.component.css']
})
export class NannyesComponent implements OnInit {
  nannyes : Nanny[];
  selectedNanny : Nanny ;

  getNannyes() : void {
    this.nannyService.getNannyes()
      .subscribe(n => this.nannyes = n);
  }

  onSelect(nanny:Nanny){
    this.selectedNanny = nanny;
  }

  constructor(private nannyService: NannyService) { }

  ngOnInit() {
    this.getNannyes();
  }

}
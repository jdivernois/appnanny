import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Nanny } from './nanny';
import { NANNYES } from './mock-nannyes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NannyService {

  getNannyes() : Observable<Nanny[]>{
    this.messageService.add('NannyService: fetched nannyes');
    return of(NANNYES);
  }

  constructor(private messageService : MessageService) { }
}

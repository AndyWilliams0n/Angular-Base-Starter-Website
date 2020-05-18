import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {DataService} from '../../services/data.service';

@Injectable()
export class HomeHelperService {
    constructor(
        public dataService: DataService
    ) {}

    public fetch(): Observable<any> {
        const url = '';

        return this.dataService.get(url);
    }

}

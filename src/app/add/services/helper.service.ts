import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {DataService} from '../../services/data.service';

@Injectable()
export class AddHelperService {
    constructor(
        public dataService: DataService
    ) {}

    public add(): Observable<any> {
        const url = '';
        const data = {
            test: ''
        };

        return this.dataService.post(url, data);
    }
}

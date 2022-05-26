import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Filter, FilterValue } from 'src/types/filters';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  url = "http://syancheg.xyz/api/filter";

  constructor( private http: HttpClient ) {}

  public async getAll(): Promise<Filter[]> {
    const data = await this.http.get<any>(this.url).toPromise() as any[];
    return this.tryGetFilters( data );
  }

  protected tryGetFilters( list: any[] ): Filter[] {
    return list.map(filter => {
      return {
        id: filter.id,
        code: filter.code,
        name: filter.name,
        values: filter.filters.map((value: any) => {
          return {
            id: value.id,
            name: value.name,
            groupId: value.group_id
          } as FilterValue;
        })
      } as Filter;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/services/filters.service';
import { Filter } from 'src/types/filters';

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.scss']
})
export class MainformComponent implements OnInit {
  public gender?: Filter;
  public clothes?: Filter;
  public pose?: Filter;
  public view?: Filter;

  constructor( private filters: FiltersService ) { }

  async ngOnInit(): Promise<void> {
    const filters = await this.filters.getAll();
    this.gender = filters.find( f => f.code == "gender_id" );
    this.clothes = filters.find( f => f.code == "cloth_id" );
    this.pose = filters.find( f => f.code == "pose_id" );
    this.view = filters.find( f => f.code == "view_id" );
  }

}

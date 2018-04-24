import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { state } from '@angular/core/src/animation/dsl'
import { DataService } from '../../services/data.service'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: {}
  paramUrl: string
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ){ }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.paramUrl = params['id'])
    this.dataService.getAll(environment.url + this.paramUrl).subscribe((detail) => {
      this.details = Object.assign({}, detail)
    })
  }
}

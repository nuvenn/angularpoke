import { Component, OnInit } from '@angular/core'
import { state } from '@angular/core/src/animation/dsl'
import { DataService } from '../../services/data.service'
import { Poke } from '../../interfaces/poke'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-user',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {
  pokes: Poke[]
  constructor(
    private dataService: DataService,
    private router: Router
  ){ }
  ngOnInit() {
    this.dataService.getAll(environment.url).subscribe((response) => {
      this.pokes = response.results
    })
  }
  deleteUser(index) {
    this.pokes.splice(index, 1)
  }
  goToDetails(url){
    this.router.navigate(['/details/', url.substring(34, 36) ])
  }
}

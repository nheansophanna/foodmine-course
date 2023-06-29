import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm = '';
  constructor(activedRoute: ActivatedRoute, private router: Router) {
    activedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }
  search(term:string):void{
    if(term){
      this.router.navigateByUrl('/search/'+term);
    }
  }
}

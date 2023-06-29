import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
import { sample_food, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
  getAll():Food[]{
    return sample_food;
  }
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag==='All'?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag))
  }
}

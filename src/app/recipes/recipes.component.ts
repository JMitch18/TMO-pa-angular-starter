import { Component, OnInit } from '@angular/core';

// recipes object
class Recipe {

  name: string | undefined;
  instructions: string | undefined;

  constructor(name: String,instructions: String)
  {

  } 

}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  hideForm = false;
  recipe = new Recipe('', '');

  constructor() { }

  ngOnInit(): void {

  }

  // hide form and create new recipe object
  addRecipe() {
    this.hideForm = true;
    this.recipe = new Recipe('', '');
  }

  // reveal form to add more recipes then push that recipe into the array
  onSubmit() {
    this.hideForm = false;
    this.recipes.push(this.recipe);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRecipeRoutingModule } from './food-recipe-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [RecipesComponent, RecipeDetailComponent],
  imports: [
    CommonModule,
    FoodRecipeRoutingModule
  ]
})
export class FoodRecipeModule { }

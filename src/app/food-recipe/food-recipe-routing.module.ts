import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: 'food-recipe', component: RecipesComponent},
  {path: 'recipe-detail',component: RecipeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRecipeRoutingModule { }

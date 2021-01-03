import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  {path: 'food-recipe', component: RecipesComponent},
  {path: 'restaurant-detail',component: RestaurantDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRecipeRoutingModule { }

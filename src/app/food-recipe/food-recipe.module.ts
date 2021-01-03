import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRecipeRoutingModule } from './food-recipe-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


@NgModule({
  declarations: [RecipesComponent, RestaurantDetailComponent],
  imports: [
    CommonModule,
    FoodRecipeRoutingModule
  ]
})
export class FoodRecipeModule { }

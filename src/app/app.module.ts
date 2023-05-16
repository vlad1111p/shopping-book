import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from './recipes/recipes.component';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {RecipeItemComponent} from './recipes/recipes-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StoreInfoComponent } from './components/store-info/store-info.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductsComponent } from './components/single-products/single-products.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContainerComponent } from './components/container/container.component';
import { OrderComponent } from './components/order/order.component';

// inputs
import { InputTextModule } from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		HeaderComponent,
		AboutUsComponent,
		StoreInfoComponent,
		ProductsComponent,
		SingleProductsComponent,
		CartComponent,
		CartItemComponent,
		CategoriesComponent,
		ContainerComponent,
		OrderComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, InputTextModule, ButtonModule, MessageModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

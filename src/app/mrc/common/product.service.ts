import { Injectable } from '@angular/core';

export class Product {
	public string Code;
	public string Description;
	public string DescriptionNf;
	//TODO: public Array<ProductType> productTypes;
	//TODO: public Array<ProductCategory> categories;
	public number ProfitMargin;
	public string GTIN;
	//TODO: public Account Accounting;
	//TODO: public ProductStatus Status;
	public string Packing;
	public boolean SeasonalProduct;
	public boolean DirectImportation;
	public Date RegistrationDate;
}

@Injectable()
export class ProductService {
	
}
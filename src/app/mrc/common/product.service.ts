import { Injectable } from '@angular/core';

export class Product {
	public Code: string;
	public Description: string;
	public DescriptionNf: string;
	//TODO: public Array<ProductType> productTypes;
	//TODO: public Array<ProductCategory> categories;
	public ProfitMargin: number;
	public GTIN: string;
	//TODO: public Account Accounting;
	//TODO: public ProductStatus Status;
	public Packing: string;
	public SeasonalProduct: boolean;
	public DirectImportation: boolean;
	public RegistrationDate: Date;
}

@Injectable()
export class ProductService {
	
}
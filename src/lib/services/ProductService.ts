import { ProductType } from "@/models/productType";

const baseUrl = process.env.API_URL ?? '';

export interface ProductListResponse {
    identifier: string;
    title: string;
    subtitle: string;
    price: number;
    durationType: string;
    durationFactor: number;
    utilities: UtilityListResponse[];
}

export interface UtilityListResponse {
    name: string;
    title: string;
}

///get ptoduct by product type
export async function getProductList(productType: ProductType): Promise<ProductListResponse[] | null> {
    try {
        const response = await fetch(`${baseUrl}/api/product?productType=${productType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                revalidate: 3600, //seconds
            }
        });

        if (!response.ok) {
            console.log(`Failed to get product list (Status: ${response.status}, type: ${productType})`);
            return null;
        }

        const productListResponseData = await response.json();
        return productListResponseData as ProductListResponse[];
    } catch (error) {
        console.error('Error fetching product list:', error);
        return null;
    }
}
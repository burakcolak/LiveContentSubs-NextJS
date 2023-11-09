import { getBearerToken } from "@/utils/authUtils";
import { parseResponse } from "../utils";
import { ProductType } from "@/models/productType";

const baseUrl = process.env.API_URL ?? '';

export interface ShoppingCartResponse {
    sessionId: string;
    totalAmount: number;
    shoppingCartItems: ShoppingCartItem[];
}

export interface ShoppingCartItem {
    product: Product;
}

export interface Product {
    identifier: string;
    title: string;
    subtitle: string;
    price: number;
    type: ProductType;
}

///get shopping cart
export async function getShoppingCart(): Promise<ShoppingCartResponse | null> {
    const bearerToken = await getBearerToken();
    if (!bearerToken) return null;

    try {
        const response = await fetch(`${baseUrl}/api/shoppingcart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
            cache: 'no-cache'
        });

        if (!response.ok) {

            // if (response.status === 401) {
            //     throw 401;
            // }
            console.log(`Failed to get shopping cart (Status: ${response.status})`);
            return null;
        }

        const shoppingCartResponseData = await parseResponse<ShoppingCartResponse>(response);
        return shoppingCartResponseData;
    } catch (error) {
        console.error('Error fetching shopping cart:', error);
        return null;
    }
}

///add shopping cart with productIdentity
export async function addShoppingCart(productIdentity: string): Promise<ShoppingCartResponse | null> {
    const bearerToken = await getBearerToken();
    try {
        const response = await fetch(`${baseUrl}/api/shoppingCart/${productIdentity}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            console.log(`Failed to add shopping cart (Status: ${response.status})`);
            return null;
        }

        const addShoppingCartResponseData = await response.json();
        return addShoppingCartResponseData as ShoppingCartResponse;
    } catch (error) {
        console.error('Error fetching shopping cart:', error);
        return null;
    }
}

///delete shopping cart with productIdentity
export async function deleteShoppingCartItem(productIdentity: string): Promise<boolean | null> {
    const bearerToken = await getBearerToken();
    try {
        const response = await fetch(`${baseUrl}/api/shoppingCart/${productIdentity}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            console.log(`Failed to delete shopping cart (Status: ${response.status})`);
            return null;
        }

        const deleteShoppingCartResponseData = await response.json();
        return deleteShoppingCartResponseData as boolean;
    } catch (error) {
        console.error('Error fetching shopping cart:', error);
        return null;
    }
}

///empty shopping cart
export async function emptyShoppingCart(): Promise<boolean | null> {
    const bearerToken = await getBearerToken();
    if (!bearerToken) return null;

    try {
        const response = await fetch(`${baseUrl}/api/shoppingcart/empty-shopping-cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
            cache: 'no-cache',
        });
        if (!response.ok) {
            console.log(`Failed to empty shopping cart (Status: ${response.status})`);
            return null;
        }


        const emptyShoppingCartResponseData = await response.json();
        console.log('service response', emptyShoppingCartResponseData)
        return emptyShoppingCartResponseData as boolean;
    }
    catch (error) {
        console.error('Error fetching shopping cart:', error);
        return null;
    }
}

interface UpdateShoppingCartItemQuantityRequest {
    quantity: number;
    productIdentity: string;
}

///update shopping cart item quantity
export async function updateShoppingCartItemQuantity(request: UpdateShoppingCartItemQuantityRequest): Promise<boolean | null> {
    const bearerToken = await getBearerToken();
    try {
        const response = await fetch(`${baseUrl}/api/shoppingCart/update-quantity`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
            body: JSON.stringify(request),
        });
        if (!response.ok) {
            console.log(`Failed to update shopping cart item quantity (Status: ${response.status})`);
            return null;
        }

        const updateShoppingCartItemQuantityResponseData = await response.json();
        return updateShoppingCartItemQuantityResponseData as boolean;
    }
    catch (error) {
        console.error('Error update shopping cart:', error);
        return null;
    }
}

///purchase product with productIdentifier
export async function purchaseProduct(productIdentifier: string): Promise<ShoppingCartResponse | null> {
    const bearerToken = await getBearerToken();
    if (!bearerToken) return null;

    const response = await fetch(`${baseUrl}/api/shoppingcart/purchase?productIdentifier=${productIdentifier}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
        },
    });
    if (!response.ok) {
        if (response.status === 401) {
            throw 401;
        }

        console.log(`Failed to purchase product (Status: ${response.status})`);
        return null;
    }

    const purchaseProductResponseData = await response.json();
    return purchaseProductResponseData as ShoppingCartResponse;

}



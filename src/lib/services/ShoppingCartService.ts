interface ShoppingCartResponse {
    sessionId: string;
    totalAmount: number;
}

///get shopping cart
export async function getShoppingCart(bearerToken: string): Promise<ShoppingCartResponse | null> {
    try {
        const response = await fetch(`${baseUrl}/api/shoppingCart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            console.log(`Failed to get shopping cart (Status: ${response.status})`);
            return null;
        }

        const shoppingCartResponseData = await response.json();
        return shoppingCartResponseData as ShoppingCartResponse;
    } catch (error) {
        console.error('Error fetching shopping cart:', error);
        return null;
    }
}

interface AddShoppingCartResponse {
    sessionId: string;
    totalAmount: number;
}

///add shopping cart with productIdentity
export async function addShoppingCart(productIdentity: string, bearerToken: string): Promise<AddShoppingCartResponse | null> {
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
        return addShoppingCartResponseData as AddShoppingCartResponse;
    } catch (error) {
        console.error('Error fetching shopping cart:', error);
        return null;
    }
}

///delete shopping cart with productIdentity
export async function deleteShoppingCartItem(productIdentity: string, bearerToken: string): Promise<boolean | null> {
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
export async function emptyShoppingCart(bearerToken: string): Promise<boolean | null> {
    try {
        const response = await fetch(`${baseUrl}/api/empty-shopping-cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });
        if (!response.ok) {
            console.log(`Failed to empty shopping cart (Status: ${response.status})`);
            return null;
        }

        const emptyShoppingCartResponseData = await response.json();
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
export async function updateShoppingCartItemQuantity(request: UpdateShoppingCartItemQuantityRequest, bearerToken: string): Promise<boolean | null> {
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

import { OrderStatus } from "@/models/orderStatus";
import { getServerSession } from "next-auth";

const baseUrl = process.env.API_URL ?? '';

export interface OrderDetailItemResponse {
    price: number;
    quantity: number;
    productId: number;
}

export interface OrderDetailResponse {
    identifier: string;
    shoppingCartId: number;
    orderItems: OrderDetailItemResponse[];
}


///get order detail by identifier
export async function getOrderDetail(identifier: string): Promise<OrderDetailResponse | null> {
    const session = await getServerSession();
    const bearerToken = session?.user?.email;
    if (!bearerToken) return null;
    try {
        const response = await fetch(`${baseUrl}/api/order/${identifier}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            console.log(`Failed to get order detail (Status: ${response.status})`);
            return null;
        }

        const orderDetailResponseData = await response.json();
        return orderDetailResponseData as OrderDetailResponse;
    } catch (error) {
        console.error('Error fetching order detail:', error);
        return null;
    }
}

export interface OrderListResponseOrderItem {
    productId: number;
    price: number;
    quantity: number;
}

export interface OrderListResponse {
    orders: OrderListResponseItem[];
    totalCount: number;
    pageSize: number;
    currentPage: number;
}

export interface OrderListResponseItem {
    identifier: string;
    orderNo: string;
    totalAmount: number;
    currency: string;
    checkoutDate: string;
    createdDate: string;
    status: OrderStatus;
    orderItems: OrderListResponseOrderItem[];
}

///get order list by email
export async function getOrderList({ pageNumber = 1, pageSize = 10 }: { pageNumber?: number, pageSize?: number }): Promise<OrderListResponse | null> {
    const session = await getServerSession();
    const bearerToken = session?.user?.email;
    if (!bearerToken) return null;

    try {
        const response = await fetch(`${baseUrl}/api/order?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            console.log(`Failed to get order list (Status: ${response.status})`);
            return null;
        }

        const orderListResponseData = await response.json();
        return orderListResponseData
    } catch (error) {
        console.error('Error fetching order list:', error);
        return null;
    }
}

interface CheckoutRequest {
}

interface CheckoutResponse {
    clientSecret: string;
}

///checkout
export async function checkout(request: CheckoutRequest, bearerToken: string): Promise<CheckoutResponse | null> {
    try {
        const response = await fetch(`${baseUrl}/api/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            console.log(`Failed to checkout (Status: ${response.status})`);
            return null;
        }

        const checkoutResponseData = await response.json();
        return checkoutResponseData as CheckoutResponse;
    } catch (error) {
        console.error('Error fetching checkout:', error);
        return null;
    }
}

///cancel order
export async function cancelOrder(identifier: string, bearerToken: string): Promise<boolean> {
    try {
        const response = await fetch(`${baseUrl}/api/order/cancelorder/${identifier}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            console.log(`Failed to cancel order (Status: ${response.status})`);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error fetching cancel order:', error);
        return false;
    }
}




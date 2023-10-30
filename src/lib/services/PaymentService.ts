import { getServerSession } from "next-auth";
import { parseResponse } from "../utils";
import { PaymentStatus } from "@/models/paymentStatus";

const baseUrl = process.env.API_URL ?? '';

export interface PaymentIntentResponse {
    clientSecret: string;
    totalAmount: number;
    status: PaymentStatus;
}

//Get payment intent
export async function getPaymentIntent(orderIdentifier: string): Promise<PaymentIntentResponse | null> {
    const session = await getServerSession();
    const bearerToken = session?.user?.email;
    if (!bearerToken) return null;

    try {
        const response = await fetch(`${baseUrl}/api/payment/intent?orderIdentifier=${orderIdentifier}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            console.log(`Failed to get payment intent (Status: ${response.status})`);
            return null;
        }

        const paymentIntentResponseData = await parseResponse<PaymentIntentResponse>(response);
        return paymentIntentResponseData
    } catch (error) {
        console.error('Error fetching payment intent:', error);
        return null;
    }
}

export async function getLastCompletedPaymentIntent(paymentIntentId: string): Promise<PaymentIntentResponse | null> {
    const session = await getServerSession();
    const bearerToken = session?.user?.email;
    if (!bearerToken) return null;

    try {
        const response = await fetch(`${baseUrl}/api/payment/intent/completed?paymentIntentId=${paymentIntentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            console.log(`Failed to get last payment intent (Status: ${response.status})`);
            return null;
        }

        const paymentIntentResponseData = await parseResponse<PaymentIntentResponse>(response);
        return paymentIntentResponseData
    } catch (error) {
        console.error('Error fetching last payment intent:', error);
        return null;
    }
}
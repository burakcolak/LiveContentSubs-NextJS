import { getServerSession } from "next-auth";
import { parseResponse } from "../utils";
const baseUrl = process.env.API_URL ?? '';

export interface RegisterMemberRequest {
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    password?: string | null;
    loginName?: string | null;
}

export interface RegisterMemberResponse {
    type: string;
    title: string;
    status: number;
    traceId: string;
    errors: ValidationError;

}

export interface ValidationError {
    [fieldName: string]: string[];
}

export async function register(request: RegisterMemberRequest): Promise<RegisterMemberResponse | null> {
    console.log('request', request)
    try {
        const response = await fetch(`${baseUrl}/api/member/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        const responseModel = await parseResponse<RegisterMemberResponse>(response);

        console.log('register response', responseModel)

        if (!response.ok) {
            console.log(`Failed to register member (Status: ${response.status})`);
            return responseModel;
        }

        //TODO: return response data
        if (response.ok && !response)
            return null

        return null
        // const registerResponseData = await response.json();
        // return registerResponseData as RegisterMemberResponse;
    } catch (error) {
        console.error('Error register member:', error);
        return null;
    }
}

interface ForgotPasswordRequest {
    loginName?: string | null;
}

interface ForgotPasswordResponse {
    description: string;
    // You can define additional properties if needed based on the actual response schema
}

async function forgotPassword(request: ForgotPasswordRequest): Promise<ForgotPasswordResponse | null> {
    try {
        const response = await fetch(`${baseUrl}/api/member/forgotPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            console.log(`Failed to send forgot password email (Status: ${response.status})`);
            return null;
        }

        const forgotPasswordResponseData = await response.json();
        return forgotPasswordResponseData as ForgotPasswordResponse;
    } catch (error) {
        console.error('Error fetching member:', error);
        return null;
    }
}

interface ResetPasswordRequest {
    loginName?: string | null;
    token?: string | null;
    newPassword?: string | null;
}

interface ResetPasswordResponse {
    description: string;
    // You can define additional properties if needed based on the actual response schema
}

async function resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse | null> {
    try {
        const response = await fetch(`${baseUrl}/api/member/resetPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            console.log(`Failed to reset password (Status: ${response.status})`);
            return null;
        }

        const resetPasswordResponseData = await response.json();
        return resetPasswordResponseData as ResetPasswordResponse;
    } catch (error) {
        console.error('Error fetching member:', error);
        return null;
    }
}

interface ChangePasswordRequest {
    currentPassword?: string | null;
    newPassword?: string | null;
}

interface ChangePasswordResponse {
    description: string;
    // You can define additional properties if needed based on the actual response schema
}

async function changePassword(request: ChangePasswordRequest, bearerToken: string): Promise<ChangePasswordResponse | null> {
    try {
        const response = await fetch(`${baseUrl}/api/member/changePassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`,
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            console.log(`Failed to change password (Status: ${response.status})`);
            return null;
        }

        const changePasswordResponseData = await response.json();
        return changePasswordResponseData as ChangePasswordResponse;
    } catch (error) {
        console.error('Error fetching member:', error);
        return null;
    }
}


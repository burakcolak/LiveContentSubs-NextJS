export async function parseResponse<T>(response: Response): Promise<T> {
    try {
        const responseText = await response.text();
        const responseObject = responseText === "" ? {} : JSON.parse(responseText);
        return responseObject as T;
    } catch (error) {
        console.error('Error parsing response:', error);
        return {} as T;
    }

}
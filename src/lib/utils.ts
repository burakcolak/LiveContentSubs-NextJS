export async function parseResponse<T>(response: Response): Promise<T> {
    const responseText = await response.text();
    const responseObject = responseText === "" ? {} : JSON.parse(responseText);
    return responseObject as T;
}
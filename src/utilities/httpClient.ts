import useAuthStore from '@/stores/auth';

export default class HttpClient {
  private baseUrl: string;

  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  private getHeaders(): Record<string, string> {
    const auth = useAuthStore();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    if (auth.isAuthenticated) {
      headers['Authorization'] = `Bearer ${auth.token}`;
    }
    return headers;
  }

  async get(url: string): Promise<any>;
  async get<T>(url: string): Promise<T>;
  async get<T>(url: string): Promise<any | T> {
    const response = await fetch(`${this.baseUrl}/${url}`, { headers: this.getHeaders() });
    return await response.json();
  }

  async post(url: string, data: any): Promise<any>;
  async post<T>(url: string, data: any): Promise<T>;
  async post<T>(url: string, data: any): Promise<any | T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  async put(url: string, data: any): Promise<any>;
  async put<T>(url: string, data: any): Promise<T>;
  async put<T>(url: string, data: any): Promise<any | T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  async delete(url: string) {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'DELETE'
    });
    return await response.json();
  }
}

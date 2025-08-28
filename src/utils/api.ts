// API Configuration - Using hardcoded defaults for template
export const API_ENDPOINTS = {
  wordpress: 'http://localhost:8000/wp-json/wp/v2',
  nodeApi: 'http://localhost:3001/api',
  backend: 'http://localhost:8080/api',
} as const;

// Generic API fetch wrapper
export async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

// WordPress API helpers
export const wordpressApi = {
  async getPosts(limit = 10) {
    return apiFetch(`${API_ENDPOINTS.wordpress}/posts?per_page=${limit}`);
  },
  
  async getPost(id: string | number) {
    return apiFetch(`${API_ENDPOINTS.wordpress}/posts/${id}`);
  },
  
  async getPages(limit = 10) {
    return apiFetch(`${API_ENDPOINTS.wordpress}/pages?per_page=${limit}`);
  },
  
  async getPage(id: string | number) {
    return apiFetch(`${API_ENDPOINTS.wordpress}/pages/${id}`);
  }
};

// Generic backend API helpers
export const backendApi = {
  async get(endpoint: string) {
    return apiFetch(`${API_ENDPOINTS.backend}/${endpoint}`);
  },
  
  async post(endpoint: string, data: any) {
    return apiFetch(`${API_ENDPOINTS.backend}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  async put(endpoint: string, data: any) {
    return apiFetch(`${API_ENDPOINTS.backend}/${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  
  async delete(endpoint: string) {
    return apiFetch(`${API_ENDPOINTS.backend}/${endpoint}`, {
      method: 'DELETE',
    });
  }
};

// Node.js API helpers
export const nodeApi = {
  async get(endpoint: string) {
    return apiFetch(`${API_ENDPOINTS.nodeApi}/${endpoint}`);
  },
  
  async post(endpoint: string, data: any) {
    return apiFetch(`${API_ENDPOINTS.nodeApi}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
};

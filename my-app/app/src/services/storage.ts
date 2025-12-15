// src/services/storage.ts
// Adaptador de armazenamento - use localStorage para desenvolvimento

interface StorageResult {
  key: string;
  value?: string;
  shared?: boolean;
  deleted?: boolean;
  keys?: string[];
  prefix?: string;
}

export const storage = {
  async get(key: string, shared?: boolean): Promise<StorageResult | null> {
    try {
      const value = localStorage.getItem(key);
      return value ? { key, value, shared: shared || false } : null;
    } catch (error) {
      console.error('Error reading from storage:', error);
      return null;
    }
  },

  async set(key: string, value: string, shared?: boolean): Promise<StorageResult | null> {
    try {
      localStorage.setItem(key, value);
      return { key, value, shared: shared || false };
    } catch (error) {
      console.error('Error writing to storage:', error);
      return null;
    }
  },

  async delete(key: string, shared?: boolean): Promise<StorageResult | null> {
    try {
      localStorage.removeItem(key);
      return { key, deleted: true, shared: shared || false };
    } catch (error) {
      console.error('Error deleting from storage:', error);
      return null;
    }
  },

  async list(prefix?: string, shared?: boolean): Promise<StorageResult | null> {
    try {
      const keys = Object.keys(localStorage).filter(k =>
        prefix ? k.startsWith(prefix) : true
      );
      return { keys, prefix, shared: shared || false, key: '' };
    } catch (error) {
      console.error('Error listing storage keys:', error);
      return null;
    }
  }
};

// Adiciona ao window para compatibilidade com o código existente
declare global {
  interface Window {
    storage: typeof storage;
  }
}

if (typeof window !== 'undefined') {
  window.storage = storage;
}
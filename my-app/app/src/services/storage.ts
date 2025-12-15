// Abstração para facilitar troca de localStorage/API/Firebase
export const storage = {
  async get(key: string) {
    // Use window.storage, localStorage ou API
  },
  async set(key: string, value: any) {
    // Implemente aqui
  },
  async delete(key: string) {
    // Implemente aqui
  },
  async list(prefix?: string) {
    // Implemente aqui
  }
};
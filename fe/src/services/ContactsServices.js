import HttpClient from './utils/HttpClient';

class ConctactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContacts(contact) {
    return this.httpClient.post('/contacts', { body: contact });
  }
}

export default new ConctactService();

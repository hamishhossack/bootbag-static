export class UserService {
  static async register(email) {
    try {
      if (email.trim() !== '') {
        const payload = { email }
        const uri =
          process.env.NODE_ENV !== 'production'
            ? process.env.PRE_REG_STAGING_URI
            : process.env.PRE_REG_PRODUCTION_URI

        return await this.sendRequest(uri, JSON.stringify(payload))
      }
    } catch (e) {
      throw e
    }
  }

  static async sendRequest(uri, payload) {
    const response = await fetch(uri, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    return {
      status: response.status,
      data: response.json()
    }
  }
}

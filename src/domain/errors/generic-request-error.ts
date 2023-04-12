export class GenericRequestError extends Error {
  constructor() {
    super('Unexpected error. Please, try again later.')
    this.name = 'GenericRequestError'
  }
}

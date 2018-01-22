export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address2,
    phone: string,
    website: string,
    company: Company
  }
  
  interface Company {
    name: string,
    catchPhrase: string,
    bs: string
  }
  
  interface Address2 {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
  }
  
  interface Geo {
    lat: string,
    lng: string
  }
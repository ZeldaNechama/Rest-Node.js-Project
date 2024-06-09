import { Business } from '../models/business.models';

let businesses: Business[] = [];


export const createBusiness = async (business: Business): Promise<Business | undefined> => {

  businesses.push(business);  
  return business;

}

export const updateBusinees = async (id: string, business: Business): Promise<Business | undefined> => {
  const index = businesses.findIndex(b => b.businessId === id);
  if (index !== -1) {
    businesses[index] = business;
    return business;
  }
  return undefined;
}



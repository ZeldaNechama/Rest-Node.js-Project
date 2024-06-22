import mongoose from 'mongoose';
import { createBusiness, updateBusiness } from '../services/business.services';
import BusinessModel, { Business } from '../models/business.models';
import dotenv from 'dotenv';
dotenv.config();

// חיבור ל-MongoDB לפני כל הבדיקות
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
});

// ניתוק מ-MongoDB לאחר כל הבדיקות
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Business Service Tests', () => {
  let testBusiness: Business;

  beforeEach(async () => {
    testBusiness = new BusinessModel({
      businessId: '123',
      userId: '456',
    });
    await testBusiness.save();
  });

  afterEach(async () => {
    await BusinessModel.deleteMany({});
  });

  test('should create a new business', async () => {
    const result = await createBusiness(testBusiness);
    expect((result as Business).businessId).toEqual((testBusiness as Business).businessId);
    expect((result as Business).userId).toEqual((testBusiness as Business).userId);
  });

  test('should update an existing business', async () => {
    const updatedBusiness = {
      businessId: testBusiness.businessId,
      userId: '789',
    };
    const result = await updateBusiness(testBusiness.businessId.toString(), updatedBusiness as Business);
    
    expect(result).toBeDefined();
    expect((result as Business).userId).toEqual((updatedBusiness as Business).userId);
  });

  test('should return null for non-existing business update', async () => {
    const result = await updateBusiness('non-existing-id', testBusiness);
    expect(result).toBeNull();
  });
});

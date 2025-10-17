import { db } from '../server/db';
import { additionalServices } from '../shared/schema';

async function addNewBusinessPackage() {
  try {
    const result = await db.insert(additionalServices).values({
      serviceName: "New Business Package",
      price: "399",
      period: "per package",
      description: "Complete setup package for new businesses including registration, tax setup, and initial compliance",
      icon: "Rocket",
      displayOrder: 0,
      published: true
    }).returning();
    
    console.log('✅ Successfully added New Business Package:', result[0]);
    process.exit(0);
  } catch (error) {
    console.error('Error adding package:', error);
    process.exit(1);
  }
}

addNewBusinessPackage();

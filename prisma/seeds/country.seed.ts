import { type PrismaClient } from "@prisma/client";

export const countrySeed = async (prisma: PrismaClient) => {
  try {
    const records = await prisma.country.count();
    console.log("records: ", records);

    console.log("Country seed completed.");
  } catch (error) {
    console.error("Error in country seed: ", error);
  }
};

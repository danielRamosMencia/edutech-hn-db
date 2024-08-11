import { type PrismaClient } from "@prisma/client";
import { CountryInput } from "../types/inputs.type";

export const countrySeed = async (prisma: PrismaClient) => {
  try {
    const countries: CountryInput[] = [
      { code: "340", iso: "HND", name: "Honduras" },
      { code: "084", iso: "BLZ", name: "Belice" },
      { code: "320", iso: "GTM", name: "Guatemala" },
      { code: "222", iso: "SLV", name: "El Salvador" },
      { code: "558", iso: "NIC", name: "Nicaragua" },
      { code: "188", iso: "CRI", name: "Costa Rica" },
      { code: "591", iso: "PAN", name: "Panamá" },
    ];

    await prisma.country.createMany({
      data: countries,
    });

    console.log("Country seed completed.");
  } catch (error) {
    console.error("Error in country seed: ", error);
  }
};

import { type PrismaClient } from "@prisma/client";
import { GenderInput } from "../types/inputs.type";

export const genderSeed = async (prisma: PrismaClient) => {
  try {
    const genders: GenderInput[] = [
      { code: "M", name: "Masculino" },
      { code: "F", name: "Femenino" },
    ];

    await prisma.gender.createMany({
      data: genders,
    });

    console.log("Gender seed completed.");
  } catch (error) {
    console.error("Error in gender seed: ", error);
  }
};

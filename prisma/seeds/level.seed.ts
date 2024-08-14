import { type PrismaClient } from "@prisma/client";
import { LevelInput } from "../types/inputs.type";

export const levelSeed = async (prisma: PrismaClient) => {
  try {
    const levels: LevelInput[] = [
      { name: "Primaria", code: "PRI-001" },
      { name: "Secundaria", code: "SEC-002" },
      { name: "Bachiller", code: "BAC-003" },
    ];

    await prisma.level.createMany({
      data: levels,
    });

    console.log("Level seed completed.");
  } catch (error) {
    console.error("Error in level seed: ", error);
  }
};

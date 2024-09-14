import { PrismaClient } from "@prisma/client";
import { InstitutionLevelInput } from "../types/inputs.type";

export const institutionLevelSeed = async (prisma: PrismaClient) => {
  try {
    const levels = await prisma.level.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    const institutions = await prisma.institution.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    const institutionLevels: InstitutionLevelInput[] = [];

    institutionLevels.push({
      institution_id: institutions[0].id,
      level_id: levels[0].id,
    });

    await prisma.institutionLevel.createMany({
      data: institutionLevels,
    });

    console.log("Institution level seed completed.");
  } catch (error) {
    console.error("Error in institution level seed: ", error);
  }
};

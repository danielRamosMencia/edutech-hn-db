import { type PrismaClient } from "@prisma/client";
import { LevelGradeInput } from "../types/inputs.type";

export const levelGradeSeed = async (prisma: PrismaClient) => {
  try {
    const primaryGrades = await prisma.grade.findMany({
      select: {
        id: true,
      },
      where: {
        code: {
          in: ["1", "2", "3", "4", "5", "6"],
        },
      },
    });

    const secondaryGrades = await prisma.grade.findMany({
      select: {
        id: true,
      },
      where: {
        code: {
          in: ["7", "8", "9"],
        },
      },
    });

    const baccalaureateGrades = await prisma.grade.findMany({
      select: {
        id: true,
      },
      where: {
        code: {
          in: ["10", "11", "12"],
        },
      },
    });

    const levels = await prisma.level.findMany({
      select: {
        id: true,
      },
    });

    const levelGrades: LevelGradeInput[] = [];

    primaryGrades.forEach((pg) => {
      levelGrades.push({
        grade_id: pg.id,
        level_id: levels[0].id,
      });
    });

    secondaryGrades.forEach((sg) => {
      levelGrades.push({
        grade_id: sg.id,
        level_id: levels[1].id,
      });
    });

    baccalaureateGrades.forEach((bg) => {
      levelGrades.push({
        grade_id: bg.id,
        level_id: levels[2].id,
      });
    });

    await prisma.levelGrade.createMany({
      data: levelGrades,
    });

    console.log("Level grades seed completed.");
  } catch (error) {
    console.error("Error in level grade seed: ", error);
  }
};

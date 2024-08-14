import { type PrismaClient } from "@prisma/client";
import { GradeInput } from "../types/inputs.type";

export const gradeSeed = async (prisma: PrismaClient) => {
  try {
    const grades: GradeInput[] = [
      { name: "Primer grado", code: "1" },
      { name: "Segundo grado", code: "2" },
      { name: "Tercer grado", code: "3" },
      { name: "Cuarto grado", code: "4" },
      { name: "Quinto grado", code: "5" },
      { name: "Sexto grado", code: "6" },
      { name: "Séptimo grado", code: "7" },
      { name: "Octavo grado", code: "8" },
      { name: "Noveno grado", code: "9" },
      { name: "Décimo grado", code: "10" },
      { name: "Onceavo grado", code: "11" },
      { name: "Doceavo grado", code: "12" },
      { name: "Treceavo grado", code: "13" },
    ];

    await prisma.grade.createMany({
      data: grades,
    });

    console.log("Grade seed completed.");
  } catch (error) {
    console.error("Error in grade seed: ", error);
  }
};

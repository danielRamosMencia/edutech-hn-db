import { type PrismaClient } from "@prisma/client";
import { MunicipalityInput } from "../types/inputs.type";
import { MunicipalityJson } from "../types/jsons.type";
import fs from "fs";
import path from "path";

export const municipalitySeed = async (prisma: PrismaClient) => {
  try {
    const filePath = path.join(__dirname, "json", "municipality.data.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");

    const data: MunicipalityJson[] = JSON.parse(jsonData);
    const municipalities: MunicipalityInput[] = [];

    for (const municipality of data) {
      let department = await prisma.department.findUniqueOrThrow({
        select: {
          id: true,
        },
        where: {
          code: municipality.codigoDepartamento,
        },
      });

      municipalities.push({
        code: municipality.codigo,
        name: municipality.nombre,
        department_id: department.id,
      });
    }

    await prisma.municipality.createMany({
      data: municipalities,
    });

    console.log("Municipality seed completed.");
  } catch (error) {
    console.error("Error in municipality seed: ", error);
  }
};

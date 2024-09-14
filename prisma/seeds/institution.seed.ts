import { type PrismaClient } from "@prisma/client";
import { InstitutionInput } from "../types/inputs.type";
import { InstitutionJson } from "../types/jsons.type";
import fs from "fs";
import path from "path";

export const institutionSeed = async (prisma: PrismaClient) => {
  try {
    const filePath = path.join(__dirname, "json", "institution.data.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");

    const data: InstitutionJson[] = JSON.parse(jsonData);
    const institutions: InstitutionInput[] = [];

    for (const institution of data) {
      const district = await prisma.district.findUniqueOrThrow({
        where: {
          code: institution.distrito,
        },
        select: {
          id: true,
          municipality: {
            select: {
              code: true,
            },
          },
        },
      });

      const rtn = generateRtn(district.municipality.code);

      institutions.push({
        address: institution.direccion,
        code: institution.codigo,
        district_id: district.id,
        name: institution.nombre,
        phone: institution.telefono,
        rtn: rtn,
      });
    }

    await prisma.institution.createMany({
      data: institutions,
    });

    console.log("Institution seed completed.");
  } catch (error) {
    console.error("Error in institution seed: ", error);
  }
};

const generateRtn = (prefix: string): string => {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);

  const rtn = `${prefix}-1999-${randomDigits}`;
  return rtn;
};

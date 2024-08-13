import { type PrismaClient } from "@prisma/client";
import { PersonInput } from "../types/inputs.type";
import { PersonJson } from "../types/jsons.type";
import fs from "fs";
import path from "path";

export const personSeed = async (prisma: PrismaClient) => {
  try {
    const filePath = path.join(__dirname, "json", "person.data.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");

    const data: PersonJson[] = JSON.parse(jsonData);
    const persons: PersonInput[] = [];

    for (const person of data) {
      let cellphone = generateCellphone();
      let prefix = person.municipio;
      let birthyear = person.fechaNacimiento.split("/")[0];
      let identifiers = generateIdentifiers(prefix, birthyear);
      let email = `${person.email}@gmail.com`;

      let municipality = await prisma.municipality.findUniqueOrThrow({
        select: {
          id: true,
        },
        where: {
          code: person.municipio,
        },
      });

      let gender = await prisma.gender.findUniqueOrThrow({
        select: {
          id: true,
        },
        where: {
          code: person.genero,
        },
      });

      persons.push({
        name: person.nombre,
        middle_name: person.segundoNombre,
        last_name: person.apellido,
        middle_last_name: person.segundoApellido,
        document_id: identifiers.dni,
        email: email,
        cellphone: cellphone,
        address: person.direccion,
        birthdate: person.fechaNacimiento,
        rtn: identifiers.rtn,
        gender_id: gender.id,
        municipality_id: municipality.id,
      });
    }

    await prisma.person.createMany({
      data: persons,
    });

    console.log("Person seed completed.");
  } catch (error) {
    console.error("Error in person seed: ", error);
  }
};

const generateCellphone = (): string => {
  const firstDigits = Math.floor(Math.random() * 9000) + 1000;
  const secondDigits = Math.floor(Math.random() * 9000) + 1000;
  const phoneNumber = `${firstDigits}-${secondDigits}`;
  return phoneNumber;
};

const generateIdentifiers = (
  prefix: string,
  bornDay: string
): { dni: string; rtn: string } => {
  const randomDigits = Math.floor(10000 + Math.random() * 90000);
  const dni = `${prefix}-${bornDay}-${randomDigits}`;
  const rtn = `${prefix}-${bornDay}-${randomDigits}${prefix[3]}`;

  return { dni, rtn };
};

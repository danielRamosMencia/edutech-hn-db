import { type PrismaClient } from "@prisma/client";
import { DepartmentInput } from "../types/inputs.type";

export const departmentSeed = async (prisma: PrismaClient) => {
  try {
    const country = await prisma.country.findUniqueOrThrow({
      select: {
        id: true,
      },
      where: {
        iso: "HND",
      },
    });

    const deparments: DepartmentInput[] = [
      { code: "01", name: "Atlántida", country_id: country.id },
      { code: "02", name: "Choluteca", country_id: country.id },
      { code: "03", name: "Colón", country_id: country.id },
      { code: "04", name: "Comayagua", country_id: country.id },
      { code: "05", name: "Copán", country_id: country.id },
      { code: "06", name: "Cortés", country_id: country.id },
      { code: "07", name: "El Paraíso", country_id: country.id },
      { code: "08", name: "Francisco Morazán", country_id: country.id },
      { code: "09", name: "Gracias a Dios", country_id: country.id },
      { code: "10", name: "Intibucá", country_id: country.id },
      { code: "11", name: "Islas de la bahía", country_id: country.id },
      { code: "12", name: "La Paz", country_id: country.id },
      { code: "13", name: "Lempira", country_id: country.id },
      { code: "14", name: "Ocotepeque", country_id: country.id },
      { code: "15", name: "Olancho", country_id: country.id },
      { code: "16", name: "Santa Bárbara", country_id: country.id },
      { code: "17", name: "Valle", country_id: country.id },
      { code: "18", name: "Yoro", country_id: country.id },
    ];

    await prisma.department.createMany({
      data: deparments,
    });
    
    console.log("Deparment seed completed.");
  } catch (error) {
    console.error("Error in deparment seed", error);
  }
};

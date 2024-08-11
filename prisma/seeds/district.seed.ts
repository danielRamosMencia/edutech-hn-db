import { type PrismaClient } from "@prisma/client";
import { DistrictInput } from "../types/inputs.type";

export const districtSeed = async (prisma: PrismaClient) => {
  try {
    const deparments = await prisma.department.findMany({
      select: {
        id: true,
      },
      where: {
        code: {
          in: ["05", "06", "08"],
        },
      },
    });

    const municipalities_ct = await prisma.municipality.findMany({
      select: {
        id: true,
      },
      where: {
        department_id: deparments[0].id,
      },
      take: 2,
    });

    const municipalities_ch = await prisma.municipality.findMany({
      select: {
        id: true,
      },
      where: {
        department_id: deparments[1].id,
      },
      take: 2,
    });

    const municipalities_fm = await prisma.municipality.findMany({
      select: {
        id: true,
      },
      where: {
        department_id: deparments[2].id,
      },
      take: 2,
    });

    const districs: DistrictInput[] = [
      {
        name: "Distrito 1",
        code: "0001",
        municipality_id: municipalities_fm[0].id,
      },
      {
        name: "Distrito 2",
        code: "0002",
        municipality_id: municipalities_fm[0].id,
      },
      {
        name: "Distrito 3",
        code: "0003",
        municipality_id: municipalities_fm[1].id,
      },
      {
        name: "Distrito 4",
        code: "0004",
        municipality_id: municipalities_ct[0].id,
      },
      {
        name: "Distrito 5",
        code: "0005",
        municipality_id: municipalities_ct[0].id,
      },
      {
        name: "Distrito 6",
        code: "0006",
        municipality_id: municipalities_ct[1].id,
      },
      {
        name: "Distrito 7",
        code: "0007",
        municipality_id: municipalities_ch[0].id,
      },
      {
        name: "Distrito 8",
        code: "0008",
        municipality_id: municipalities_ch[0].id,
      },
      {
        name: "Distrito 9",
        code: "0009",
        municipality_id: municipalities_ch[1].id,
      },
    ];

    await prisma.district.createMany({
      data: districs,
    });

    console.log("Distric seed completed.");
  } catch (error) {
    console.error("Error in district seed: ", error);
  }
};

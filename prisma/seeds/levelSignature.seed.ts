import { type PrismaClient } from "@prisma/client";
import { LevelSignatureInput } from "../types/inputs.type";

export const levelSignatureSeed = async (prisma: PrismaClient) => {
  try {
    const primarySignatures = await prisma.signature.findMany({
      select: {
        id: true,
      },
      where: {
        code: {
          in: [
            "esp-001",
            "mat-002",
            "cin-003",
            "cin-004",
            "eam-006",
            "dep-009",
            "emu-008",
            "tec-010",
          ],
        },
      },
    });

    const secondarySignatures = await prisma.signature.findMany({
      select: {
        id: true,
      },
      where: {
        code: {
          in: [
            "art-005",
            "eam-006",
            "eem-007",
            "emu-008",
            "dep-009",
            "alg-012",
            "tri-013",
            "ecu-014",
            "eci-017",
            "ese-018",
            "his-020",
            "ovo-023",
            "tec-010",
          ],
        },
      },
    });

    const baccalaureateSignatures = await prisma.signature.findMany({
      select: {
        id: true,
      },
      where: {
        code: {
          in: [
            "alg-012",
            "tri-013",
            "art-005",
            "eam-006",
            "eem-007",
            "emu-008",
            "pro-011",
            "bio-015",
            "qui-016",
            "fel-019",
            "psi-021",
            "lma-024",
            "eco-026",
            "aud-027",
            "ecl-028",
            "ecl-029",
            "adm-030",
            "tec-010",
            "efi-025",
          ],
        },
      },
    });

    const levels = await prisma.level.findMany({
      select: {
        id: true,
      },
    });

    const levelSignatures: LevelSignatureInput[] = [];

    primarySignatures.forEach((ps) => {
      levelSignatures.push({
        level_id: levels[0].id,
        signature_id: ps.id,
      });
    });

    secondarySignatures.forEach((ss) => {
      levelSignatures.push({
        level_id: levels[1].id,
        signature_id: ss.id,
      });
    });

    baccalaureateSignatures.forEach((bs) => {
      levelSignatures.push({
        level_id: levels[2].id,
        signature_id: bs.id,
      });
    });

    await prisma.levelSignature.createMany({
      data: levelSignatures,
    });

    console.log("Level signature seed completed.");
  } catch (error) {
    console.error("Error in level signature seed: ", error);
  }
};

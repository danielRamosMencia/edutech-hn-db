import { type PrismaClient } from "@prisma/client";
import { SignatureInput } from "../types/inputs.type";

export const signatureSeed = async (prisma: PrismaClient) => {
  try {
    const signatures: SignatureInput[] = [
      { name: "Español", code: "esp-001" },
      { name: "Matemáticas", code: "mat-002" },
      { name: "Ciencias Naturales", code: "cin-003" },
      { name: "Ciencias Sociales", code: "cin-004" },
      { name: "Arte", code: "art-005" },
      { name: "Educación Ambiental", code: "eam-006" },
      { name: "Educación Emocional", code: "eem-007" },
      { name: "Educación Musical", code: "emu-008" },
      { name: "Deportes", code: "dep-009" },
      { name: "Tecnología", code: "tec-010" },
      { name: "Programación", code: "pro-011" },
      { name: "Álgebra", code: "alg-012" },
      { name: "Trigonometría", code: "tri-013" },
      { name: "Educación Cultural", code: "ecu-014" },
      { name: "Biología", code: "bio-015" },
      { name: "Química", code: "qui-016" },
      { name: "Educación Cívica", code: "eci-017" },
      { name: "Educación Sexual", code: "ese-018" },
      { name: "Fisíca Elemental", code: "fel-019" },
      { name: "Historia", code: "his-020" },
      { name: "Psicología", code: "psi-021" },
      { name: "Orientación Vocacional", code: "ovo-023" },
      { name: "Lógica Matemática", code: "lma-024" },
      { name: "Educación Financiera", code: "efi-025" },
      { name: "Economía", code: "eco-026" },
      { name: "Auditoría", code: "aud-027" },
      { name: "Ecología", code: "ecl-028" },
      { name: "Contabilidad", code: "ecl-029" },
      { name: "Administración", code: "adm-030" },
    ];

    await prisma.signature.createMany({
      data: signatures,
    });

    console.log("Signature seed completed.");
  } catch (error) {
    console.error("Error in signature seed: ", error);
  }
};

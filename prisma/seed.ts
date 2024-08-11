import { PrismaClient } from "@prisma/client";
// seeds imports
import { countrySeed } from "./seeds/country.seed";
import { departmentSeed } from "./seeds/department.seed";
import { municipalitySeed } from "./seeds/municipality.seed";
import { districtSeed } from "./seeds/district.seed";

const prisma = new PrismaClient();

async function main() {
  await countrySeed(prisma);
  await departmentSeed(prisma);
  await municipalitySeed(prisma);
  await districtSeed(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: Error) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

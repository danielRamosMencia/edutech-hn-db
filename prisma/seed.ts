import { PrismaClient } from "@prisma/client";
import { countrySeed } from "./seeds/country.seed";

const prisma = new PrismaClient();

async function main() {
  await countrySeed(prisma);
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

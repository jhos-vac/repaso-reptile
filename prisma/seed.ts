import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.reptile.upsert({
    where: { name: 'Cocodrilo' },
    update: {},
    create: {
      name: 'Cocodrilo',
      species   : '',
      weight: '' ,
      size: '',
      age:12,  
      enviroment: ''
    },
  });

  console.log({ post1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
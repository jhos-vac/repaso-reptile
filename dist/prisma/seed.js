"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const post1 = await prisma.reptile.upsert({
        where: { name: 'Cocodrilo' },
        update: {},
        create: {
            name: 'Cocodrilo',
            species: '',
            weight: '',
            size: '',
            age: 12,
            enviroment: ''
        },
    });
    console.log({ post1 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
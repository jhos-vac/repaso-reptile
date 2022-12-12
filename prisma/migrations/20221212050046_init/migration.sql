-- CreateTable
CREATE TABLE "reptile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "enviroment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reptile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reptile_name_key" ON "reptile"("name");

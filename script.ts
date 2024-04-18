import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: "john",
            email: "john@test.com",
            age: 34,
            userPreference: { // relationship or nested property
                create: {
                    emailUpdates: true,
                }
            }
        },
        include: {  // if user have relationship with userPreference which will include
            userPreference: true
        }
    })
    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
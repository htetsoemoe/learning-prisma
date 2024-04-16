import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany({})
    console.log(users)
    /**
     const createdUser = await prisma.user.createMany({
        data: [
            {name: 'john'},
            {name: 'cherry'}
        ]
    })
    console.log(createdUser)
     */
    
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
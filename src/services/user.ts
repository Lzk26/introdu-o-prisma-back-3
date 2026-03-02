import { prisma } from '../libs/prisma';
import { Prisma } from '@prisma/client';

type CreateUserProps = {
    name: string;
    email: string;
};

export const createUser = async (data: Prisma.UserCreateInput) => {
    try {
        return await prisma.user.create({
            data
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                console.error('Email already exists.');
            }
        }
        throw error;
    }
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    const result = await prisma.user.createMany({
        data: [
            {name: 'João', email: 'joao@example.com'},
            {name: 'João2', email: 'joao@example.com'},
            {name: 'Maria', email: 'maria@example.com'},
            {name: 'Pedro', email: 'pedro@example.com'}
        ],
        skipDuplicates: true
    })
}

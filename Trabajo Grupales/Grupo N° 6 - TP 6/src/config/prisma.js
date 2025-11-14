<<<<<<< HEAD

// src/config/prisma.js
const { PrismaClient } = require('@prisma/client');

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // evita múltiples conexiones en dev con nodemon
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

module.exports = prisma;

=======
// const {PrismaClient} = require ('@prisma/client')

// const prisma = new PrismaClient();
// module.exports={prisma};





// src/config/prisma.js
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
>>>>>>> SofiaJimenez-61256-TP3

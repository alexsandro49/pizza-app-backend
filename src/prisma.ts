import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const crypto = await import('crypto');

  if (params.action === 'create' && params.model === 'User') {
    const idHash = crypto.createHash('sha256').update(`${Date.now()}-${Math.random()}`)
        .digest('hex');
    const passwordHash = crypto.createHash('sha256').update(params.args.data.password)
      .digest('hex');

    params.args.data.id = idHash;
    params.args.data.password = passwordHash;
  } else if (params.action === 'findUniqueOrThrow' && params.model === 'User') {
    const passwordHash = crypto.createHash('sha256').update(params.args.where.password)
      .digest('hex');

    params.args.where.password = passwordHash;
  }

  return next(params);
});

export default prisma
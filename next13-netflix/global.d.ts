import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}

// 下面这种扩展全局global也行
// declare global {
//   var prismadb: PrismaClient;
// }

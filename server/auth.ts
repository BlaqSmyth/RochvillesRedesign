import type { Request, Response, NextFunction } from "express";
import type { Session } from "express-session";
import bcrypt from "bcryptjs";
import type { AdminUser } from "@shared/schema";

declare module "express-session" {
  interface SessionData {
    adminUser?: {
      id: number;
      username: string;
      email: string;
    };
  }
}

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.adminUser) {
    return res.status(401).json({ error: "Unauthorized - Admin access required" });
  }
  next();
}

export function serializeAdminUser(user: AdminUser) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}

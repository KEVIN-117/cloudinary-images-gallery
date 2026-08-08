import { clientEnvSchema, serverEnvSchema, ClientEnv, ServerEnv } from "@/types/env";

class EnvValidator {
  private static instance: EnvValidator;

  public client: ClientEnv;
  private _server: ServerEnv | null = null;

  private constructor() {
    const clientEnvToValidate = {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    };

    const clientParsed = clientEnvSchema.safeParse(clientEnvToValidate);

    if (!clientParsed.success) {
      console.error("❌ Invalid Client Environment Variables:\n", clientParsed.error.flatten().fieldErrors);
      throw new Error("Invalid Client Environment Variables");
    }

    this.client = clientParsed.data;

    if (typeof window === "undefined") {
      const serverParsed = serverEnvSchema.safeParse(process.env);

      if (!serverParsed.success) {
        console.error("❌ Invalid Server Environment Variables:\n", serverParsed.error.flatten().fieldErrors);
        throw new Error("Invalid Server Environment Variables");
      }

      this._server = serverParsed.data;
    }
  }

  public get server(): ServerEnv {
    if (!this._server) {
      throw new Error("Server environment variables are not available on the client.");
    }
    return this._server;
  }

  public static getInstance(): EnvValidator {
    if (!EnvValidator.instance) {
      EnvValidator.instance = new EnvValidator();
    }
    return EnvValidator.instance;
  }
}

export const envValidator = EnvValidator.getInstance();

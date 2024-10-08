// DONE REVIEWING: GITHUB COMMIT
import dotenv from "dotenv"
import path from "path"
import payload, {type Payload} from "payload"
import type {InitOptions} from "payload/config"

dotenv.config({path: path.resolve(__dirname, "../.env")})

let cached = (global as any).payload
if (!cached) cached = (global as any).payload = {client: null, promise: null}

interface Params {
  initOptions?: Partial<InitOptions>
}

const initPayload = async function initPayload({initOptions}: Params = {}): Promise<Payload> {
  const secret = process.env.PAYLOAD_SECRET
  if (!secret) throw new Error("Error: Could not find `PAYLOAD_SECRET` in your `.env` file.")

  if (cached.client) return cached.client

  if (!cached.promise)
    cached.promise = payload.init({
      secret,
      local: initOptions?.express ? false : true,
      ...(initOptions || {})
    })

  try {
    cached.client = await cached.promise
  } catch (error: unknown) {
    cached.promise = null
    throw error
  }

  return cached.client
}

export default initPayload

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    // Iron session requires a secret of at least 32 characters
    NEXTAUTH_SECRET: z.string().min(32).default('complex_password_at_least_32_characters_long'),
    DATABASE_URL: z.string().url().optional(),
    // Comma separated list of Ethereum addresses, accepts optinal whitespace after comma
    APP_ADMINS: z

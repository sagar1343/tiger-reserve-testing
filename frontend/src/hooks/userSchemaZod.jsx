import { z } from 'zod'

const userSchemaZod = (countryPicked) => {
  const schema = z.object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(2).max(20),
    email: z.string().email('Invalid email format'),
    phone: z.string().length(10),
    adhaar: !countryPicked ? z.string().length(12) : z.optional(z.string()),
    country: z.string(),
    passportNum: countryPicked ? z.string().length(8) : z.optional(z.string()),
    expirationDate: countryPicked ? z.string().date() : z.optional(z.string()),
    countryCode: z.string().min(2).max(4),
  })

  return schema
}

export default userSchemaZod

import { NuxtAuthHandler } from '#auth'
import EmailProvider from '@auth/core/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'

const runtimeConfig = useRuntimeConfig()
const prisma = new PrismaClient()
const resend = new Resend(runtimeConfig.resend.apiKey)

export default NuxtAuthHandler({
  secret: runtimeConfig.auth.secret,
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: runtimeConfig.emailServer.host,
        port: Number(runtimeConfig.emailServer.port),
        auth: {
          user: runtimeConfig.emailServer.user,
          pass: runtimeConfig.emailServer.password,
        },
      },
      from: runtimeConfig.emailServer.from,
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        try {
          const { data, error } = await resend.emails.send({
            from: from!,
            to: email,
            subject: 'Sign in to Nexcode AI',
            html: `
              <body style="background-color: #f4f4f5; padding: 20px;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <h1 style="color: #333; font-size: 24px; margin-bottom: 20px;">Sign in to Nexcode AI</h1>
                  <p style="color: #666; margin-bottom: 20px;">Click the button below to sign in to your account.</p>
                  <a href="${url}" style="display: inline-block; background: linear-gradient(to right, #ec4899, #8b5cf6); color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">Sign in</a>
                  <p style="color: #666; margin-top: 20px; font-size: 14px;">If you didn't request this email, you can safely ignore it.</p>
                </div>
              </body>
            `,
          })

          if (error) {
            throw new Error(error.message)
          }
        } catch (error) {
          throw new Error('Failed to send verification email')
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify',
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
}) 
import { github } from '@/lib/octokit';
import { tool } from 'ai';
import z from "zod"

export const githubProfile = tool({
  description: 'Essa ferramente serve para buscar dados do perfil de um usuário do GitHub ou acessar URLs da API para outras informações de um usuário como lista de organizações, repositórios, seguidores, seguindo, eventos, etc..',
  parameters: z.object({
    username: z.string().describe('Username do usuário no GitHub')
  }),
  execute: async ({ username }) => {
    const { data: result } = await github.users.getByUsername({ username })

    return result
  }
})
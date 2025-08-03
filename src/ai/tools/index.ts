import type { ToolCallUnion, ToolResultUnion } from "ai";
import { githubProfile } from "./github-profile";
import { httpFetch } from "./http-fetch";

export type IAToolSet = ToolCallUnion<typeof tools>
export type IAToolResult = ToolResultUnion<typeof tools>

export const tools = {
  githubProfile,
  httpFetch
}
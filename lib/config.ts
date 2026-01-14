import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "FORECAST FOR PIPELINE: TODAY",
    prompt: "FORECAST FOR PIPELINE: TODAY",
    icon: "circle-question",
  },
  {
    label: "SURF PASS: WAVE POOL EXPERIENCE NOW",
    prompt: "SURF PASS: WAVE POOL EXPERIENCE NOW",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything or leave...";

export const GREETING = "I'M ANDY, WHAT'S UP?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});

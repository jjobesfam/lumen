import { promises as fs } from "fs";
import path from "path";
import { SEED } from "./demo";
import { AppState, ModuleKey } from "./types";

const file = path.join(process.env.VERCEL ? "/tmp" : process.cwd(), "data", "studio.json");
let memory: AppState | null = null;

export async function readState(): Promise<AppState> {
  if (memory) return memory;
  try {
    const raw = await fs.readFile(file, "utf8");
    memory = JSON.parse(raw) as AppState;
    return memory;
  } catch {
    memory = SEED;
    await writeState(SEED);
    return memory;
  }
}

export async function writeState(state: AppState) {
  memory = state;
  try {
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, JSON.stringify(state, null, 2));
  } catch {
    // serverless disk may be read-only
  }
}

export async function updateState(fn: (state: AppState) => AppState) {
  const next = fn(await readState());
  await writeState(next);
  return next;
}

export function isLive(state: AppState, key: ModuleKey) {
  return state.modules[key] === "live";
}

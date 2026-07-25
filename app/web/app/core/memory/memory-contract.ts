import type { MemoryEntry } from "@/app/types";

export interface MemoryReader {
  readEntries: () => MemoryEntry[];
}

export interface MemoryWriter {
  recordEntry: (entry: MemoryEntry) => void;
}

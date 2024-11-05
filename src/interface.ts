export interface Adapter<T> {
  read: () => Promise<T | null>;
  write: (data: T) => Promise<void>;
}

export interface SyncAdapter<T> {
  read: () => T | null;
  write: (data: T) => void;
}
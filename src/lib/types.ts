export type ModuleKey =
  | "booking"
  | "embed"
  | "walkIn"
  | "payments"
  | "team"
  | "inventory"
  | "multiLocation"
  | "marketplace"
  | "payroll"
  | "offline";

export type ModuleState = "live" | "ready" | "locked";

export type Service = {
  id: string;
  name: string;
  minutes: number;
  price: number;
};

export type Appointment = {
  id: string;
  serviceId: string;
  clientName: string;
  phone: string;
  start: string;
  source: "book" | "walk-in" | "widget";
  status: "booked" | "seated" | "done" | "no-show";
};

export type WalkIn = {
  id: string;
  name: string;
  serviceId: string;
  arrivedAt: string;
  status: "waiting" | "seated" | "left";
};

export type InventoryItem = {
  id: string;
  name: string;
  sku: string;
  stock: number;
  price: number;
};

export type Studio = {
  id: string;
  slug: string;
  name: string;
  city: string;
  owner: string;
  hours: { open: number; close: number };
};

export type AppState = {
  studio: Studio;
  modules: Record<ModuleKey, ModuleState>;
  services: Service[];
  appointments: Appointment[];
  walkIns: WalkIn[];
  inventory: InventoryItem[];
};

export interface RouteObject {
  path: string;
  name: string;
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: React.FC<any>;
  layout: "website" | "dashboard",
  role: string;
  category?: string;
  key?: number | string;
}

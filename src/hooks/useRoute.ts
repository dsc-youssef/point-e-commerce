// Types
import { RouteObject } from "@/interfaces/hooks/Route";

const useRoute = () => {

  /**
   * @desc This function using to create a valid route object.
   * @param { RouteObject } route
   * @return RouteObject
   */
  const createRoute = (route: RouteObject): RouteObject => route;

  /**
   * @desc This function using to create array of routes
   * @param { RouteObject[] } routes
   * @return RouteObject[]
   */
  const createRoutes = (routes: RouteObject[]): RouteObject[] => routes;

  /**
   * @desc This function to check if user have access to this route.
   * @param { RouteObject } route
   * @param { string[] } roles
   * @param { "object"|"boolean" } returned
   * @return boolean | RouteObject | null
   */
  const validateRoute = (route: RouteObject, roles: string[], returned: "object" | "boolean" = "boolean"): boolean | RouteObject | null => {
    if (returned === "boolean") {
      return roles.includes(route.role);
    } else if (returned === "object") {
      return roles.includes(route.role) ? route : null;
    }
    return null;
  };

  /**
   * @desc This function to check if user have access to this routes.
   * @param { RouteObject[] } routes
   * @param { string[] } roles
   * @return RouteObject[]
   */
  const validateRoutes = (routes: RouteObject[], roles: string[]): RouteObject[] => {
    const resultArray: RouteObject[] = [];
    routes.forEach((route: RouteObject) => validateRoute(route, roles) && resultArray.push(route));
    return resultArray;
  }

  return {
    createRoute,
    createRoutes,
    validateRoute,
    validateRoutes,

  };
}

export default useRoute;

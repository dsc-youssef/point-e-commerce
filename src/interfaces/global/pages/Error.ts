export interface ErrorProps {
  error: "404" | "401" | "400",
  reason: string,
  previous: boolean
}
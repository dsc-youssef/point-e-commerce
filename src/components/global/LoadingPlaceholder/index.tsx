// Dependencies
import { FC } from "react";

const LoadingPlaceholder: FC = () => {
  return (
    <div className="rounded-lg animate-pulse p-4">
      <div className="h-3 bg-dash-danger/50 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-dash-danger/50 rounded w-5/6 mb-2"></div>
      <div className="h-3 bg-dash-danger/50 rounded w-4/5 mb-2"></div>
      <div className="h-3 bg-dash-danger/50 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-dash-danger/50 rounded w-5/6 mb-2"></div>
      <div className="h-3 bg-dash-danger/50 rounded w-4/5 mb-2"></div>
    </div>
  )
}

export default LoadingPlaceholder;

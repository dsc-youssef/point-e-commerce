// Dependencies
import { FC } from "react";

// Assets
import watchImage from "~/images/dashboard/products/watch.png";
import controllerImage from "~/images/dashboard/products/controller.png";
import laptopImage from "~/images/dashboard/products/labtop.png";
import cameraImage from "~/images/dashboard/products/camera.png";
import iphoneImage from "~/images/dashboard/products/iphone.png";

const SalesTopProducts: FC = () => {
  
  return (
    <div className="card h-full">
      <div className="card-header">
        <h3 className="card-title text-lg">Top Products</h3>
        <p className="card-paragraph mt-1">Top 5 Products Sales This Week</p>
      </div>
      <div className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
        <article className="card">
          <div className="px-3 py-3 flex items-center gap-6  bg-danger/30 rounded">
            <img src={watchImage} className="avatar avatar-md" />
            <div className="flex flex-col justify-center">
              <h1 className="text-md font-semibold">Smart Watch</h1>
              <p className="bg-danger text-xs text-white font-medium px-2 py-1 rounded w-fit">$500</p>
            </div>
          </div>
        </article>
        <article className="card">
          <div className="px-3 py-3  flex items-center gap-6  bg-success/30 rounded">
            <img src={controllerImage} className="avatar avatar-md" />
            <div className="flex flex-col justify-center">
              <h1 className="text-md font-semibold">PS4 Controller</h1>
              <p className="bg-success text-xs text-white font-medium px-2 py-1 rounded w-fit">$340</p>
            </div>
          </div>
        </article>
        <article className="card">
          <div className="px-3 py-3 flex items-center gap-6  bg-warning/30 rounded">
            <img src={cameraImage} className="avatar avatar-md" />
            <div className="flex flex-col justify-center">
              <h1 className="text-md font-semibold">Camera</h1>
              <p className="bg-warning text-xs text-white font-medium px-2 py-1 rounded w-fit">$340</p>
            </div>
          </div>
        </article>
        <article className="card">
          <div className="px-3 py-3  flex items-center gap-6  bg-secondary/30 rounded">
            <img src={laptopImage} className="avatar avatar-md" />
            <div className="flex flex-col justify-center">
              <h1 className="text-md font-semibold">Laptop</h1>
              <p className="bg-secondary text-xs text-white font-medium px-2 py-1 rounded w-fit">$340</p>
            </div>
          </div>
        </article>
        <article className="card h-full">
          <div className="px-3 py-3 flex items-center gap-6  bg-primary/30 rounded">
            <img src={iphoneImage} className="avatar avatar-md" />
            <div className="flex flex-col justify-center">
              <h1 className="text-md font-semibold">Iphone</h1>
              <p className="bg-primary text-xs text-white font-medium px-2 py-1 rounded w-fit">$340</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default SalesTopProducts;
// Dependencies
import { FC, useMemo } from "react";

// Map Dependencies
import {
 ComposableMap,
 Geographies,
 Geography,
 Marker
} from "react-simple-maps";

// Utils
import { themeColors } from "@/utils/colors";

// Hooks
import useGeoMap from "@/hooks/useGeoMap";


const WorldMap:FC = ()=>{
  const { createMarkerObject, createMarkersArray, worldMap, createStyleObject, checkCountry } = useGeoMap();
  const mapMarkers = useMemo(()=> createMarkersArray([
    createMarkerObject( { coordinates: [31.2357, 30.0444], name: 'Cairo' }),
    createMarkerObject( { coordinates: [29.9187, 31.2001], name: 'Alexandria' }),
    createMarkerObject( { coordinates: [32.8998, 24.0889], name: 'Aswan' }),
  ]), []);
  const mapStyle = useMemo(()=> createStyleObject({
    default:{
      fill: `${themeColors.danger}70`,
      stroke:`${themeColors.danger}80`,
      strokeWidth: 2
    },
    hover: { fill: `${themeColors.danger}70` },
    pressed: { fill: `${themeColors.danger}70` }
  }),[]);

  return (
    <article className="card">
      <div className="card-header">
        <h3 className="card-title text-xl font-semibold">Branches</h3>
        <p className="card-paragraph mt-1">Our Company Branches.</p>
      </div>
      <div className="card-body">
        <ComposableMap projectionConfig={{ center: [29.8738, 26.8206], scale: 3000 }}>
         <Geographies geography={worldMap}>
          { ({ geographies }: any ) =>
            geographies.map((geo: any) => 
              checkCountry(geo, "egypt") && ( <Geography
               key={geo.rsmKey}
               geography={geo}
               className="focus:outline-0 select-none"
               style={mapStyle}
              />)
            )
          }
          </Geographies>
          {mapMarkers.map(({ coordinates, name }:any) => (
            <Marker key={name} coordinates={coordinates}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill={themeColors.danger}>
                <path d="M12 0C7.5 0 3.82 2.239 1.344 5.844C-0.132 8.095 -0.6 11.09 0.67 13.67C1.94 16.56 4.7 19.31 7.59 20.58C10.17 21.72 12 24 12 24C12 24 13.83 21.72 16.41 20.58C19.3 19.31 22.06 16.56 23.33 13.67C24.6 11.09 24.14 8.095 22.719 5.844C20.238 2.239 16.56 0 12 0ZM12 8C10.344 8 9 9.344 9 11C9 12.656 10.344 14 12 14C13.656 14 15 12.656 15 11C15 9.344 13.656 8 12 8ZM12 18.5C9.33 15.77 6.5 13.42 6.5 11C6.5 8.239 9.239 5.5 12 5.5C14.761 5.5 17.5 8.239 17.5 11C17.5 13.42 14.67 15.77 12 18.5Z" />
              </svg>
              <text y="30" x="10" fontSize={12} textAnchor="middle" fill={"#fff"} fontWeight="bold">
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </article>
  )
}

export default WorldMap;

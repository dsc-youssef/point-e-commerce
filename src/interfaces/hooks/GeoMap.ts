export type GeographyTypes = "geoEqualEarth"|"geoAlbers"|"geoAlbersUsa"|"geoAzimuthalEqualArea"|"geoAzimuthalEquidistant"|"geoOrthographic"|"geoConicConformal"|"geoConicEqualArea"|"geoConicEquidistant"|"geoSterographic"|"geoMercator"|"geoTransverseMercator";

export interface GeographyData {
  type: string;
  id: string;
  properties: {
    name: string;
    "Alpha-2": string;
  };
  geometry: {
    type: string;
    coordinates: Array<Array<[number, number]>>;
  };
  rsmKey: string;
  svgPath: string;
}

export type GeographiesData = GeographyData[];

export interface GeographyMarker {
  id?: number|string,
	coordinates: number[],
	name: string 
}

export interface GeographyStyle  {
	default?: {
	 fill?: string,
	 stroke?: string,
   strokeWidth?: number
	},
  hover?: {
   fill?: string,
	 stroke?: string
  },
  pressed?: {
   fill?: string,
	 stroke?: string
  },
}
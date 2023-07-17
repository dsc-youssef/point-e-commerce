// Types
import { GeographyMarker, GeographyStyle, GeographyData } from "@/interfaces/hooks/GeoMap";

// Utils
import { worldMap, geographyStyle } from "@/utils/geoMap";


const useGeoMap = () => {
	/**
	 * @desc This function using to create a style object.
	 * @param { GeographyStyle } style
	 * @return `GeographyStyle` */
	const createStyleObject = (style: GeographyStyle = geographyStyle): GeographyStyle => style;

	/**
	 * @desc This function using to create a valid marker data object.
	 * @param { GeographyMarker } marker
	 * @return `GeographyMarker`
	 * */
	const createMarkerObject = (marker: GeographyMarker): GeographyMarker => marker;

	/**
	 * @desc This function using to create a valid array of marker objects.
	 * @param { GeographyMarker[] } markers
	 * @return `GeographyMarker[]`
	 * */
	const createMarkersArray = (markers: GeographyMarker[]): GeographyMarker[] => markers;

	/**
	 * @desc This function using to check if this country is found.
	 * @param { GeographyData } geo
	 * @return `boolean`
	 * */
	const checkCountry = (geo: GeographyData, search: string): boolean => geo.properties.name.toLowerCase() === search.toLowerCase();


	return {
		worldMap,
		geographyStyle,
		createStyleObject,
		createMarkerObject,
		createMarkersArray,
		checkCountry
	}
}

export default useGeoMap;
export interface WebsiteHomeSliderProps {
  sliders: Array<{
    after?: string | number;
    before?: string | number;
    special?: string | number;
    image: string;
  }>
}

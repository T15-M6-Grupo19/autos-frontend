export interface filterName {
  name: string;
}

interface photos {
  id:string,
  photo_url:string
}
export interface updateData{
  brand: string,
	model: string,
	year: number,
	fuel: string,
	kilometers: number,
	color: string,
	good_deal: boolean,
	price: number,
	description: string,
	published: boolean,
  photos: photos
}
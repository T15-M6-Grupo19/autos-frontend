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

export interface userData {
	name: string
	email: string
	CPF: string
	mobile: string
	birth_date: string
	description: string
	ZIP_code: string
	state: string
	city: string
	street: string
	account_type: string
	number: string
	additional_details: null
	id: string
	createdAt: string
	updatedAt: string
	deletedAt: string
	reset_token: string
	ads: Ad[]
  }
  
  export interface Ad {
	id: string
	brand: string
	model: string
	year: string
	fuel: string
	kilometers: number
	color: string
	good_deal: boolean
	price: number
	description: string
	published: boolean
	photos: Photo[]
  }
  
  export interface Photo {
	id: string
	photo_url: string
  }
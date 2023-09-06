export interface commentData {
  comment_text: string;
}

export interface GetAdData {
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
  user: User
  photos: Photo[]
  comments: Comment[]
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  CPF: string
  mobile: string
  birth_date: string
  description: string
  ZIP_code: string
  state: string
  city: string
  street: string
  number: string
  additional_details: string | undefined | null
  account_type: string
  createdAt: string
  updatedAt: string
  deletedAt: Date | string
  reset_token: string | null
}

export interface Photo {
  id: string
  photo_url: string
}

export interface Comment {
  id: string
  comment_text: string
  created_at: string
  user: User
}

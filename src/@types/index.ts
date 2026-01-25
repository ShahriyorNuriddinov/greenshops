export interface AuthType {
  billing_address: {
    country: string;
    zip: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
  };
  created_at: string;
  created_by: string;
  email: string;
  followers: [];

  name: string;
  order_list: [];
  password: string;
  permisson: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: [];
  _id: string;
}

export interface CategoriesType {
  count: number;
  route_path: string;
  title: string;
  _id: string;
}

export interface DataType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export interface DiscountFlowerType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}

export interface ProductsType {
  category: string;
  comments: string[];
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: [];
  title: string;
  views: number;
  _id: string;
  created_by: string;
}

export interface ProductsTypeLocal extends ProductsType {
  count: number;
  userPrice: number;
}

export interface BlogType {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  created_by: string;
  views: number;
  reaction_length: number;
  created_at: string;
}

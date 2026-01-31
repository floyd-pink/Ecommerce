export interface ProductType {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
}

export const productbycategories: Record<string, ProductType[]> = {
  headphones: [
    { id: 1001, name: "Sony WH-1000XM5", brand: "Sony", category: "Headphones", image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg", price: 399 },
    { id: 1002, name: "Bose QC45", brand: "Bose", category: "Headphones", image: "https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_SL1500_.jpg", price: 329 },
    { id: 1003, name: "AirPods Max", brand: "Apple", category: "Headphones", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000", price: 549 },
    { id: 1004, name: "Sennheiser Momentum 4", brand: "Sennheiser", category: "Headphones", image: "https://m.media-amazon.com/images/I/71jQk3jYv-L._AC_SL1500_.jpg", price: 349 },
    { id: 1005, name: "Audio-Technica ATH-M50x", brand: "Audio-Technica", category: "Headphones", image: "https://m.media-amazon.com/images/I/81Cw5W3cY-L._AC_SL1500_.jpg", price: 149 },
    { id: 1006, name: "Beats Studio Pro", brand: "Beats", category: "Headphones", image: "https://m.media-amazon.com/images/I/71zjzQfKZ-L._AC_SL1500_.jpg", price: 349 },
    { id: 1007, name: "AKG K371", brand: "AKG", category: "Headphones", image: "https://m.media-amazon.com/images/I/71kZpZkzY-L._AC_SL1500_.jpg", price: 129 },
    { id: 1008, name: "Bowers & Wilkins PX7 S2", brand: "Bowers & Wilkins", category: "Headphones", image: "https://m.media-amazon.com/images/I/71pYkzYv-L._AC_SL1500_.jpg", price: 399 },
    { id: 1009, name: "Bang & Olufsen Beoplay H95", brand: "Bang & Olufsen", category: "Headphones", image: "https://m.media-amazon.com/images/I/71zYkzYv-L._AC_SL1500_.jpg", price: 899 },
    { id: 1010, name: "Marshall Monitor II ANC", brand: "Marshall", category: "Headphones", image: "https://m.media-amazon.com/images/I/71zYkzYv-L._AC_SL1500_.jpg", price: 299 },
  ],

  clothes: [
    { id: 1101, name: "Classic White T-Shirt", brand: "Levis", category: "Clothes", image: "https://m.media-amazon.com/images/I/51Hk2x+C0tL._AC_UX679_.jpg", price: 25 },
    { id: 1102, name: "Slim Fit Blue Jeans", brand: "Wrangler", category: "Clothes", image: "https://m.media-amazon.com/images/I/81Pj9-yY7GL._AC_UX679_.jpg", price: 55 },
    { id: 1103, name: "Hooded Sweatshirt", brand: "Champion", category: "Clothes", image: "https://m.media-amazon.com/images/I/71fB7X+hN4L._AC_UX679_.jpg", price: 45 },
    { id: 1104, name: "Water-Resistant Windbreaker", brand: "North Face", category: "Clothes", image: "https://m.media-amazon.com/images/I/71p-nUqXk1L._AC_UX679_.jpg", price: 120 },
    { id: 1105, name: "Running Shorts", brand: "Nike", category: "Clothes", image: "https://m.media-amazon.com/images/I/51fS8q-zKzL._AC_UX679_.jpg", price: 35 },
    { id: 1106, name: "Formal Suit Jacket", brand: "Raymond", category: "Clothes", image: "https://m.media-amazon.com/images/I/71zYkzYv-L._AC_UX679_.jpg", price: 199 },
    { id: 1107, name: "Summer Dress", brand: "Zara", category: "Clothes", image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UX679_.jpg", price: 89 },
    { id: 1108, name: "Leather Jacket", brand: "H&M", category: "Clothes", image: "https://m.media-amazon.com/images/I/81Cw5W3cY-L._AC_UX679_.jpg", price: 249 },
    { id: 1109, name: "Casual Polo Shirt", brand: "Tommy Hilfiger", category: "Clothes", image: "https://m.media-amazon.com/images/I/71pYkzYv-L._AC_UX679_.jpg", price: 49 },
    { id: 1110, name: "Winter Coat", brand: "Uniqlo", category: "Clothes", image: "https://m.media-amazon.com/images/I/71zjzQfKZ-L._AC_UX679_.jpg", price: 179 },
  ],

  laptops: [
    { id: 1501, name: "MacBook Air M3", brand: "Apple", category: "Laptops", image: "https://m.media-amazon.com/images/I/71ItMvq93nL._AC_SL1500_.jpg", price: 1099 },
    { id: 1502, name: "Dell XPS 13", brand: "Dell", category: "Laptops", image: "https://m.media-amazon.com/images/I/71p0WfL-8aL._AC_SL1500_.jpg", price: 999 },
    { id: 1503, name: "ASUS ROG Zephyrus G14", brand: "ASUS", category: "Laptops", image: "https://m.media-amazon.com/images/I/71+6VvXpDUL._AC_SL1500_.jpg", price: 1599 },
    { id: 1504, name: "HP Spectre x360", brand: "HP", category: "Laptops", image: "https://m.media-amazon.com/images/I/71Vf2-Y7pFL._AC_SL1500_.jpg", price: 1249 },
    { id: 1505, name: "Lenovo ThinkPad X1 Carbon", brand: "Lenovo", category: "Laptops", image: "https://m.media-amazon.com/images/I/61N+x6j5SGL._AC_SL1500_.jpg", price: 1420 },
    { id: 1506, name: "Microsoft Surface Laptop 5", brand: "Microsoft", category: "Laptops", image: "https://m.media-amazon.com/images/I/71pYkzYv-L._AC_SL1500_.jpg", price: 1299 },
    { id: 1507, name: "Acer Swift 3", brand: "Acer", category: "Laptops", image: "https://m.media-amazon.com/images/I/71zjzQfKZ-L._AC_SL1500_.jpg", price: 799 },
    { id: 1508, name: "Razer Blade 15", brand: "Razer", category: "Laptops", image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg", price: 2499 },
  ],
  smartwatches: [
    { id: 2001, name: "Apple Watch Series 9", brand: "Apple", category: "Smartwatches", image: "https://m.media-amazon.com/images/I/71XvO7Z6G8L._AC_SL1500_.jpg", price: 399 },
    { id: 2002, name: "Samsung Galaxy Watch 6", brand: "Samsung", category: "Smartwatches", image: "https://m.media-amazon.com/images/I/61S9-Dsh92L._AC_SL1500_.jpg", price: 299 },
    { id: 2003, name: "Garmin Fenix 7", brand: "Garmin", category: "Smartwatches", image: "https://m.media-amazon.com/images/I/51p39768XRL._AC_SL1500_.jpg", price: 699 },
    { id: 2004, name: "Google Pixel Watch 2", brand: "Google", category: "Smartwatches", image: "https://m.media-amazon.com/images/I/61u9f6-1xDL._AC_SL1500_.jpg", price: 349 },
    { id: 2005, name: "Fitbit Sense 2", brand: "Fitbit", category: "Smartwatches", image: "https://m.media-amazon.com/images/I/61K-K8-YmWL._AC_SL1500_.jpg", price: 249 },
  ],

  gaming: [
    { id: 3001, name: "PlayStation 5 Slim", brand: "Sony", category: "Gaming", image: "https://m.media-amazon.com/images/I/51eO6S2L7mL._AC_SL1500_.jpg", price: 499 },
    { id: 3002, name: "Xbox Series X", brand: "Microsoft", category: "Gaming", image: "https://m.media-amazon.com/images/I/61fKOSu5XHL._AC_SL1500_.jpg", price: 499 },
    { id: 3003, name: "Nintendo Switch OLED", brand: "Nintendo", category: "Gaming", image: "https://m.media-amazon.com/images/I/51yJ83NxpBL._AC_SL1500_.jpg", price: 349 },
    { id: 3004, name: "Steam Deck OLED", brand: "Valve", category: "Gaming", image: "https://m.media-amazon.com/images/I/61D58fSIn0L._AC_SL1500_.jpg", price: 549 },
    { id: 3005, name: "ASUS ROG Ally", brand: "ASUS", category: "Gaming", image: "https://m.media-amazon.com/images/I/71876v6E8PL._AC_SL1500_.jpg", price: 699 },
  ],
  smartphones: [
    { id: 4001, name: "iPhone 15 Pro", brand: "Apple", category: "Smartphones", image: "https://m.media-amazon.com/images/I/81Sig6biNGL._AC_SL1500_.jpg", price: 999 },
    { id: 4002, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", category: "Smartphones", image: "https://m.media-amazon.com/images/I/71WkS9Yp9vL._AC_SL1500_.jpg", price: 1299 },
    { id: 4003, name: "Google Pixel 8 Pro", brand: "Google", category: "Smartphones", image: "https://m.media-amazon.com/images/I/71v2j47W0mL._AC_SL1500_.jpg", price: 999 },
    { id: 4004, name: "OnePlus 12", brand: "OnePlus", category: "Smartphones", image: "https://m.media-amazon.com/images/I/717S1pS8SJL._AC_SL1500_.jpg", price: 799 },
    { id: 4005, name: "Nothing Phone (2)", brand: "Nothing", category: "Smartphones", image: "https://m.media-amazon.com/images/I/71SDAi2v6NL._AC_SL1500_.jpg", price: 599 },
  ],

  kitchen: [
    { id: 5001, name: "Nespresso Vertuo Pop", brand: "De'Longhi", category: "Kitchen", image: "https://m.media-amazon.com/images/I/61m19L4T69L._AC_SL1500_.jpg", price: 129 },
    { id: 5002, name: "Ninja Foodi 6-in-1 Air Fryer", brand: "Ninja", category: "Kitchen", image: "https://m.media-amazon.com/images/I/71uVvXmXpAL._AC_SL1500_.jpg", price: 179 },
    { id: 5003, name: "KitchenAid Artisan Mixer", brand: "KitchenAid", category: "Kitchen", image: "https://m.media-amazon.com/images/I/71A91UvA7AL._AC_SL1500_.jpg", price: 449 },
    { id: 5004, name: "Breville Barista Express", brand: "Breville", category: "Kitchen", image: "https://m.media-amazon.com/images/I/71X8k8u8jXL._AC_SL1500_.jpg", price: 699 },
    { id: 5005, name: "Instant Pot Duo Plus", brand: "Instant Pot", category: "Kitchen", image: "https://m.media-amazon.com/images/I/61NfXqL6mHL._AC_SL1500_.jpg", price: 149 },
  ]
}
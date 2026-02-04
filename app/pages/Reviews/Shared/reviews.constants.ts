export const reviewMetadata = [
  { id: 1, name: "Danbi H.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 2, name: "Christina J.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 3, name: "Jiyun K.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 4, name: "Dan K.", location: "La Crescenta-Montrose, CA", rating: 5 },
  { id: 5, name: "Roux F.", location: "Porter Ranch, CA", date: "February 20, 2016", rating: 5 },
  { id: 6, name: "John L.", location: "Los Angeles, CA", rating: 5 },
  { id: 7, name: "Ann L.", location: "Buena Park, CA", date: "February 20, 2016", rating: 5 },
  { id: 8, name: "Isaac C.", location: "Pasadena, CA", date: "February 20, 2016", rating: 5 },
  { id: 9, name: "Jeanie C.", location: "Bend, OR", date: "February 20, 2016", rating: 5 },
  { id: 10, name: "S Y.", location: "Monrovia, CA", date: "February 20, 2016", rating: 5 },
  { id: 11, name: "Charly P.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 12, name: "Lolala B.", location: "Las Vegas, NV", date: "February 20, 2016", rating: 5 },
  { id: 13, name: "Alessandra C.", location: "Montebello, CA", date: "February 20, 2016", rating: 5 },
  { id: 14, name: "Nora Y.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 15, name: "Ria K.", location: "Cypress, CA", date: "February 20, 2016", rating: 5 },
  { id: 16, name: "Han Jun K.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 17, name: "Eddie K.", location: "Vista, CA", date: "February 20, 2016", rating: 5 },
  { id: 18, name: "Leo, C.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 19, name: "Amella C.", location: "Somerville, MA", date: "February 20, 2016", rating: 5 },
  { id: 20, name: "John J.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 21, name: "Johnny K.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
  { id: 22, name: "SoHee A.", location: "Los Angeles, CA", date: "December 28, 2015", rating: 5 },
  { id: 23, name: "Jenny P.", location: "Northridge, CA", date: "December 28, 2015", rating: 5 },
  { id: 24, name: "Ane S.", location: "Garden Grove, CA", date: "December 28, 2015", rating: 5 },
  { id: 25, name: "Jj K.", location: "Beverly Hills, CA", date: "December 28, 2015", rating: 5 }
];

export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  date?: string;
  rating: number;
}
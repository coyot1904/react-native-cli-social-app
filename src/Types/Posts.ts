export interface Post {
  id: number;
  username: string;
  content: string;
  image: string; // New field for post images
  likes: number;
  comments: number;
  userProfile: string;
}

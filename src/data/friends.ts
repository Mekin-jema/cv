
export interface Friend {
  name: string;
  url: string;
  description: string;
  avatar?: string;
}

export const friends: Friend[] = [
  {
    name: "Oscar Hernandez",
    url: "https://oscarhernandez.vercel.app/",
  description: "A front-end developer from Colombia",
    avatar: "/friend4.jpeg"
  },
  {
    name: "liruifengv",
    url: "https://liruifengv.com/",
  description: "Web developer, Astro project member, and open-source enthusiast.",
    avatar: "/friend1.webp"
   },
 {
    name: "Aaron Conlon",
    url: "https://i5lin.top/",
  description: "A full-stack developer passionate about delivering exceptional results.",
    avatar: "/friend2.png"
  },
  {
    name: "Leetao",
    url: "https://leetao.me/",
  description: "Backend engineer who writes interesting code and does interesting things",
    avatar: "/friend3.jpg"
  },
  


]; 
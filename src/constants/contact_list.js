import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbMessageFilled } from "react-icons/tb";

export const contactMethods = [
  {
    name: "Email",
    icon: MdEmail,
    href: "mailto:jessaminjhoygodio@gmail.com",
    label: "Send an email",
    color: "#DB4437",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/jessaming",
    label: "View GitHub profile",
    color: "#6e5494", 
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/jessaming",
    label: "Connect on LinkedIn",
    color: "#0a66c2", 
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com/jessalalalaaa",
    label: "Connect on Facebook",
    color: "#4267B2", 
  },
  {
    name: "Text",
    icon: TbMessageFilled,
    href: "sms:+639761309328",
    label: "Send a text message",
    color: "#1DB954", 
  },
  {
    name: "Instagram",
    icon: AiFillInstagram,
    href: "https://instagram.com/jessalalalaaa",
    label: "Follow on Instagram",
    color: "#E1306C",
  },
];

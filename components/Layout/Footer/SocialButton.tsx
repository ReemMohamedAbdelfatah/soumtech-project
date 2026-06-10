//(Abanob)
import Link from "next/link";
import Image from "next/image";

// Icons
import LinkedinIcon from "@/public/Images/SocialMediaIcons/_Linkedin.svg";
import TwitterIcon from "@/public/Images/SocialMediaIcons/_Twitter.svg";
import InstagramIcon from "@/public/Images/SocialMediaIcons/Instagram.svg";

//---------------------------------------
export default function SocialIcons() {
  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: InstagramIcon,
      alt: "Instagram",
    },
    {
      href: "https://twitter.com",
      icon: TwitterIcon,
      alt: "Twitter",
    },
    {
      href: "https://linkedin.com",
      icon: LinkedinIcon,
      alt: "Linkedin",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-6">
      {socialLinks.map(({ href, alt, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-border p-2  transition-all duration-300 hover:scale-105"
        >
          <Image src={Icon} alt={alt} className="h-10 w-10 object-contain" />
        </Link>
      ))}
    </div>
  );
}

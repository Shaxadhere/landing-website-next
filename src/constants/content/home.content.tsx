import AppleCardsCarouselContentCard from "@/components/globals/sections/apple-cards-carousel-content-card";
import Image from "next/image";

export const stickyScrollContent: {
  title: string;
  description: string;
  description2: string;
  content?: React.ReactNode | any;
}[] = [
  {
    title: "Manage Student's Accounts Like a Pro",
    description: `Our platform provides you with the ability to effortlessly manage
      student accounts, ensuring that all information is up-to-date and easily
      accessible. With powerful tools designed to streamline administrative
      tasks, you can focus more on student engagement and less on paperwork.
      Gain insights into student performance, manage fees and payments
      efficiently, and maintain accurate records with our user-friendly
      interface. Whether you’re an educator or an administrator, our system is
      tailored to meet your needs, providing you with a seamless experience in
      managing student accounts.`,
    description2: `Our platform provides you with the ability to effortlessly manage
      student accounts, ensuring that all information is up-to-date and easily
      accessible. With powerful tools designed to streamline administrative
      tasks, you can focus more on student engagement and less on paperwork.
      Gain insights into student performance, manage fees and payments
      efficiently, and maintain accurate records with our user-friendly
      interface. Whether you’re an educator or an administrator, our system is
      tailored to meet your needs, providing you with a seamless experience in
      managing student accounts.`,
    content: (
      <Image
        alt="First Section"
        width={600}
        height={400}
        src={
          "https://global.discourse-cdn.com/getpostman/original/3X/f/6/f6055d7ca83a86abdb26e0a8f6aa5e843d2ae4ba.png"
        }
      />
    ),
  },
  {
    title: "Manage Student's Accounts Like a Pro",
    description: `Our platform provides you with the ability to effortlessly manage
      student accounts, ensuring that all information is up-to-date and easily
      accessible. With powerful tools designed to streamline administrative
      tasks, you can focus more on student engagement and less on paperwork.
      Gain insights into student performance, manage fees and payments
      efficiently, and maintain accurate records with our user-friendly
      interface. Whether you’re an educator or an administrator, our system is
      tailored to meet your needs, providing you with a seamless experience in
      managing student accounts.`,
    description2: `Our platform provides you with the ability to effortlessly manage
      student accounts, ensuring that all information is up-to-date and easily
      accessible. With powerful tools designed to streamline administrative
      tasks, you can focus more on student engagement and less on paperwork.
      Gain insights into student performance, manage fees and payments
      efficiently, and maintain accurate records with our user-friendly
      interface. Whether you’re an educator or an administrator, our system is
      tailored to meet your needs, providing you with a seamless experience in
      managing student accounts.`,
    content: <div>Third Section Content</div>,
  },
  {
    title: "Manage Student's Accounts Like a Pro",
    description: `Our platform provides you with the ability to effortlessly manage
      student accounts, ensuring that all information is up-to-date and easily
      accessible. With powerful tools designed to streamline administrative
      tasks, you can focus more on student engagement and less on paperwork.
      Gain insights into student performance, manage fees and payments
      efficiently, and maintain accurate records with our user-friendly
      interface. Whether you’re an educator or an administrator, our system is
      tailored to meet your needs, providing you with a seamless experience in
      managing student accounts.`,
    description2: `Our platform provides you with the ability to effortlessly manage
      student accounts, ensuring that all information is up-to-date and easily
      accessible. With powerful tools designed to streamline administrative
      tasks, you can focus more on student engagement and less on paperwork.
      Gain insights into student performance, manage fees and payments
      efficiently, and maintain accurate records with our user-friendly
      interface. Whether you’re an educator or an administrator, our system is
      tailored to meet your needs, providing you with a seamless experience in
      managing student accounts.`,
    content: <div>Second Section Content</div>,
  },
];

export const carouselContent = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCardsCarouselContentCard />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCardsCarouselContentCard />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCardsCarouselContentCard />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCardsCarouselContentCard />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCardsCarouselContentCard />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCardsCarouselContentCard />,
  },
];

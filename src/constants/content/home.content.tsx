import Image from "next/image";

export const stickyScrollContent: {
  title: string;
  description: string;
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
    content: <div>Second Section Content</div>,
  },
];

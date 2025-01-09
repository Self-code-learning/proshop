import { APP_NAME } from "@/lib/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex flex-center">
        {currentYear} {APP_NAME} &copy; All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

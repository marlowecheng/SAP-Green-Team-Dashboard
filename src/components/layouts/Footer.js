const Footer = () => {
    const year = new Date().getFullYear();

    return <footer className="text-white"> &copy; {year} | Designed & Developed by the BCIT Green Team | All Rights Reserved.</footer>;
};

export default Footer;
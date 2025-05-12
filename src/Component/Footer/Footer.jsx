
const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 text-white ">
                <div className="space-y-3 bg-[#1F2937] text-center p-9">
                    <h1 className="text-3xl">CONTACT US</h1>
                    <div>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="space-y-3 bg-[#111827] text-center p-9">
                    <h1 className="text-3xl">Follow US</h1>
                    <div>
                        <p>Join us on social media</p>
                        <p>Social Icon</p>
                    </div>
                </div>
            </div>
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
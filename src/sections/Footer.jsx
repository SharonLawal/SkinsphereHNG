import Line1 from '../assets/Line 1.png';
import Skinsphere from '../assets/Skinsphere.png';
import Line3 from '../assets/Line 3.png';
import Line4 from '../assets/Line 4.png';
import Frame72 from '../assets/Frame 72.png';
import Vector1 from '../assets/Vector1.png';
import Vector2 from '../assets/Vector2.png';
import Vector3 from '../assets/Vector3.png';

const Footer = () => {
    return (
        <div className="bg-blue-300 w-full">
            <div className="flex flex-col md:flex-row justify-around py-10 md:py-20">
                <div className="text-center mb-6 md:mb-0">
                    <img src={Line1} className="w-40 md:w-64 mx-auto" alt="Line" />
                    <p className="pt-2">Privacy Policy</p>
                    <p className="pt-2">Terms & Conditions</p>
                    <p className="pt-2">About</p>
                </div>

                <div className="text-center mb-6 md:mb-0">
                    <img src={Skinsphere} className="w-32 md:w-56 mx-auto" alt="Skinsphere" />
                    <div className="flex justify-center gap-4 md:gap-7 mt-4">
                        <img src={Vector2} className="w-6 h-6 md:w-8 md:h-8" alt="Vector2" />
                        <img src={Vector1} className="w-6 h-6 md:w-8 md:h-8" alt="Vector1" />
                        <img src={Vector3} className="w-6 h-6 md:w-8 md:h-8" alt="Vector3" />
                    </div>
                </div>

                <div className="text-center">
                    <img src={Line1} className="w-40 md:w-64 mx-auto" alt="Line" />
                    <p className="pt-2">Shipping Info</p>
                    <p className="pt-2">Returns</p>
                    <p className="pt-2">Exchange</p>
                    <p className="pt-2">Contact</p>
                </div>
            </div>

            <div className="flex flex-col items-center py-6 md:py-8">
                <img src={Line3} className="mb-2 md:mb-4 w-full" alt="Line" />
                <p className="flex items-center text-sm">
                    2018 <img src={Frame72} className="px-1" alt="Frame" /> <img src={Line4} className="px-1" alt="Line" /> All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;

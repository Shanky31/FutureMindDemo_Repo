import { dividerClasses } from "@mui/material";
import philosopy from '../assets/philosopy.png';
import {FcCheckmark} from 'react-icons/fc';
import Classes from "./Class";

export const AboutUs = () => {
    return (
         <>
           <Classes/>
          <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="mx-auto p-8 rounded ">
                <h2 className="text-4xl font-bold text-sky-500 mb-4 text-center">Our Philosophy</h2>
                <p className="text-gray-800 text-xl text-center mb-8">Breaking the stigma that learning and studying is boring.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center">
                        <img src={philosopy} alt="BigCo Inc. logo" className="w-56 mx-auto" />
                    </div>
                    <div>
                        <p className="flex items-center mb-4 text-xl"><FcCheckmark className="mr-2 text-3xl"/> Understand rather than resort to rote learning</p>
                        <p className="flex items-center mb-4 text-xl"><FcCheckmark className="mr-2 text-3xl"/> Learn at your own pace and time</p>
                        <p className="flex items-center mb-4 text-xl"><FcCheckmark className="mr-2 text-3xl"/> Complex content made easy</p>
                        <p className="flex items-center mb-4 text-xl">a<FcCheckmark className="mr-2 text-3xl"/> Explore school content in an all new fun way</p>
                        <p className="flex items-center mb-4 text-xl"><FcCheckmark className="mr-2 text-3xl"/> Visualize and learn</p>
                        <p className="flex items-center text-xl"><FcCheckmark className="mr-2 text-3xl"/> Learning made easy and fun</p>
                    </div>
                </div>
            </div>
        </div>
         </>
       
    );
}

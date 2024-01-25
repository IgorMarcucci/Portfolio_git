import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { useSelector } from "react-redux";

function Contact() {
    const themeData = useSelector((state: any) => state.theme);

    const getTheme = () => {
        if (themeData['theme'] === 'dark') {
            return 'bg-[#171717]'
        } else {
            return 'bg-[#ADADAD52]'
        }
    }

    const contactToEmail = () => {
        const email = 'igormarcucci1@gmail.com';
        const subject = 'Interesse em serviços';
        const body = 'Olá, vim pelo portfólio e tenho interesse em seus serviços!';

        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    }

    const contactToWhatsapp = () => {
        const phoneNumber = '+5517996659527';
        const message = 'Olá, vim pelo portfólio e tenho interesse em seus serviços!';

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    return (
        <div id="contact" className={`mt-10 bg-[#171717] w-full ${getTheme()} shadow-md flex-col flex justify-evenly align-center`}>
            <p className="text-3xl sm:text-3xl text-white m-5 font-['Poppins'] flex justify-center items-center text-center">
                Contato
            </p>
            <div className="mb-[90px] flex flex-col justify-center items-center">
                <div onClick={contactToEmail} className={`w-auto flex flex-row justify-center text-white items-center hover:text-[#134CB6]`}>
                    <button className="mt-10 mb-10 text-sm sm:text-xl font-['Poppins'] flex justify-center items-center text-center">
                        Contato via E-mail
                    </button>
                    <BiLogoGmail className="text-xl flex justify-center items-center m-2" />
                </div>
                <div onClick={contactToWhatsapp} className={`w-auto flex flex-row justify-center text-white items-center hover:text-[#134CB6]`}>
                    <button className="mt-10 mb-10 text-sm sm:text-xl font-['Poppins'] flex justify-center items-center text-center">
                        Contato via Whatsapp
                    </button>
                    <BiLogoWhatsapp className="text-xl flex justify-center items-center m-2" />
                </div>
                <div className="w-auto flex flex-row justify-center text-white items-center">
                    <p className="mt-10 mb-10 text-xs sm:text-xs font-['Poppins'] flex justify-center items-center text-center">
                        Powered by Igor Marcucci
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

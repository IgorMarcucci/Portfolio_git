import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

function Contact() {

    const contactToEmail = () => {
        const email = 'igormarcucci1@gmail.com';
        const subject = 'Interesse em serviços de Front-end';
        const body = 'Olá, vim pelo portfólio e tenho interesse em seus serviços de Front-end!';

        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    }

    const contactToWhatsapp = () => {
        const phoneNumber = '+5517996659527';
        const message = 'Olá, vim pelo portfólio e tenho interesse em seus serviços de Front-end!';

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    return (
        <div id="contact" className="mt-10 bg-[#171717] w-full shadow-md flex-col flex justify-evenly align-center">
            <p className="text-3xl sm:text-3xl text-white m-5 font-['Poppins'] flex justify-center items-center text-justify">
                Contato
            </p>
            <div className="mb-[90px] flex flex-col justify-center items-center">
                <div onClick={contactToEmail} className="w-auto flex flex-row justify-center text-white items-center hover:text-[#6392ff]">
                    <p className="mt-10 mb-10 text-sm sm:text-xl font-['Poppins'] flex justify-center items-center text-justify">
                        Desejo entrar em contato via E-mail
                    </p>
                    <BiLogoGmail className="w-[42px] flex justify-center items-center" />
                </div>
                <div onClick={contactToWhatsapp} className="w-auto flex flex-row justify-center text-white items-center hover:text-[#6392ff]">
                    <p className="mt-10 mb-10 text-sm sm:text-xl font-['Poppins'] flex justify-center items-center text-justify">
                        Desejo entrar em contato via Whatsapp
                    </p>
                    <BiLogoWhatsapp className="w-[42px] flex justify-center items-center" />
                </div>
                <div className="w-auto flex flex-row justify-center text-white items-center">
                    <p className="mt-10 mb-10 text-xs sm:text-xs font-['Poppins'] flex justify-center items-center text-justify">
                        Powered by Igor Marcucci
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

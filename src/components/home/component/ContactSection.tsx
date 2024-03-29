import Copyright from "@/src/components/Copyright";
import clsx from "clsx";
import { social_icons } from "../../data/Social-Icons";

const ContactSection = () => {
    return (
        <div className="flex flex-col items-end justify-center w-[70%] m-auto border-t border-r border-valorantBlack/50 py-20 pr-1 gap-5">
            <div className="text-2xl font-bold text-center sm:text-3xl md:text-6xl text-valorantBlack">
                REACH ME OUT
            </div>
            <div className="flex flex-row flex-wrap items-center justify-end gap-3 text-2xl sm:text-3xl md:text-4xl text-valorantBlack">
                {social_icons.map((item, index) => {
                    return (
                        <a
                            href={item.url}
                            target="_blank"
                            key={index}
                            className={clsx(
                                "p-3 border border-valorantBlack rounded-sm hover:rounded-xl transition-all cursor-pointer"
                            )}
                        >
                            {item.icon}
                        </a>
                    );
                })}
            </div>
            <Copyright />
        </div>
    );
};

export default ContactSection;

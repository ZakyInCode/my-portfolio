import { social_icons } from "../../data/Social-Icons";

const SocialSection = () => {
    return (
        <div className="flex flex-wrap gap-5">
            {social_icons.map((item, index) => {
                return (
                    <a
                        href={item.url}
                        target="_blank"
                        key={index}
                        className="text-4xl cursor-pointer text-valorantBlack hover:text-valorantBlack/90"
                    >
                        {item.icon}
                    </a>
                );
            })}
        </div>
    );
};

export default SocialSection;

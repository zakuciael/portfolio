import React from "react";
import {Avatar} from "./Avatar";
import {SimpleTitle} from "./SimpleTitle";
import {Footer} from "./Footer";
import avatar from "../img/avatar.png"
import {faDiscord, faFacebook, faGithub, faGitlab, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {SocialMediaIcon} from "./SocialMediaIcon";

class Root extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
                <Avatar url={avatar} alt="Avatar" />
                 <SimpleTitle text="ZaKKu" />
                 <span className="separator" />
                <div className="icons-container">
                    <SocialMediaIcon icon={faDiscord}  text="ZaKKu#2805"  name="Discord"/>
                    <SocialMediaIcon icon={faFacebook}  url="https://www.facebook.com/dev.zakku/" text="Facebook"  name="Facebook"/>
                    <SocialMediaIcon icon={faTwitter}  url="https://twitter.com/zakuciael" text="Twitter"  name="Twitter"/>
                    <SocialMediaIcon icon={faGitlab}  url="https://gitlab.com/zakuciael" text="GitLab"  name="GitLab"/>
                    <SocialMediaIcon icon={faGithub}  url="https://github.com/zakuciael" text="GitHub" name="GitHub"/>
                </div>
                <Footer />
            </div>
        );
    }
}

export {Root}
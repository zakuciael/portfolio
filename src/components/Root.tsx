import React from "react";
import {Avatar} from "./Avatar";
import {SimpleTitle} from "./SimpleTitle";
import {Footer} from "./Footer";
import avatar from "../img/avatar.png"
import {faDiscord, faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {SocialMediaIcon} from "./SocialMediaIcon";

class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <Avatar url={avatar} alt="Avatar" />
                <SimpleTitle text="ZaKKu" />
                <span className="separator" />
                <div className="icons-container">
                    <SocialMediaIcon icon={faDiscord}  text="ZaKKu#0001"  name="Discord"/>
                    <SocialMediaIcon icon={faTwitter}  url="https://twitter.com/zakuciael" text="Twitter"  name="Twitter"/>
                    <SocialMediaIcon icon={faGithub}  url="https://github.com/zakuciael" text="GitHub" name="GitHub"/>
                    <SocialMediaIcon icon={faLinkedinIn} url="https://www.linkedin.com/in/zakuciael/" text="LinkedIn" name="LinkedIn" />
                </div>
                <Footer />
            </div>
        );
    }
}

export {Root}
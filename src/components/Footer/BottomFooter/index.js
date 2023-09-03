import FacebookIcon from "../../../icons/FacebookIcon";
import InstagramIcon from "../../../icons/InstagramIcon";
import LinkedinIcon from "../../../icons/LinkedinIcon";
import MasterCardIcon from "../../../icons/MasterCardIcon";
import PoweredByMaeztraIcon from "../../../icons/PoweredByMaeztraIcon";
import PoweredByVtexIcon from "../../../icons/PoweredByVtexIcon";
import VisaCardIcon from "../../../icons/VisaCardIcon";
import YoutubeIcon from "../../../icons/YoutubeIcon";

import styles from "./BottomFooter.module.css";

const BottomFooter = () => {
  return (
    <div className={styles.BottomFooter__Container}>
        <div className={styles.BottomFooter__Items}>
            <a className={styles.BottomFooter__SocialMedia} href="/"><FacebookIcon/></a>
            <a className={styles.BottomFooter__SocialMedia} href="/"><LinkedinIcon/></a>
            <a className={styles.BottomFooter__SocialMedia} href="/"><InstagramIcon/></a>
            <a className={styles.BottomFooter__SocialMedia} href="/"><YoutubeIcon/></a>
        </div>
        <div className={styles.BottomFooter__Items}>
            <div><VisaCardIcon/></div>
            <div><MasterCardIcon/></div>
            <div><VisaCardIcon/></div>
            <div><MasterCardIcon/></div>
        </div>
        <div className={styles.BottomFooter__Items}>
            <div>
                <PoweredByVtexIcon/>
            </div>
            <div>
                <PoweredByMaeztraIcon/>
            </div>
        </div>
    </div>
  )
}

export { BottomFooter };

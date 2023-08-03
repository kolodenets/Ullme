import { useWindowDimensions } from '../../shared/hooks/useWindowDimensions';
import { FC } from 'react';
import Instagram from "../../../public/assets/icons/InstagramLogo.svg";
import Instagram44 from "../../../public/assets/icons/InstagramLogo44.svg";
import Twitter from "../../../public/assets/icons/TwitterLogo.svg";
import Twitter44 from "../../../public/assets/icons/TwitterLogo44.svg";
import Facebook from "../../../public/assets/icons/fi_facebook.svg";
import Facebook44 from "../../../public/assets/icons/fi_facebook44.svg";
import s from './SocialNetworks.module.scss'

interface SocialNetworksProps {
  onInstagramClick: () => void
  onTwitterClick: () => void
  onFacebookClick: () => void
}

const SocialNetworks:FC<SocialNetworksProps> = ({onInstagramClick, onTwitterClick, onFacebookClick}) => {
  const size = useWindowDimensions()
  return (
    <div className={s.icons}>
      <img role='button' onClick={onInstagramClick} src={size.width < 768 ? Instagram : Instagram44} alt="instagram" />
      <img role='button' onClick={onTwitterClick} src={size.width < 768 ? Twitter : Twitter44} alt="twitter" />
      <img role='button' onClick={onFacebookClick} src={size.width < 768 ? Facebook : Facebook44} alt="facebook" />
    </div>
  );
};
export default SocialNetworks;
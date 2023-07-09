import s from "./PhotoUpload.module.scss";
import cn from 'classnames'

const PhotoUploadPage = () => {
  return (
    <section className={cn("container", s.section)}>
      <h1 className={s.h1}>Upload your photos to check your similarity</h1>
    </section>
  );
};

export default PhotoUploadPage;

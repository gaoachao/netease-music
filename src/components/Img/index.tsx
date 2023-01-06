import "./index.scss";
import { useMemo, useState } from "react";
import LoadingNote from "./components/LoadingNote";
type MemoImgProps = {
  src: string;
  alt: string;
  imgClassName?: string;
};

type LoadingProps = {
  loadingMask?: boolean;
};

//其它均加在img外部container上，支持所有div属性
type ImgProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  MemoImgProps &
  LoadingProps;

function Img(props: ImgProps) {
  const {
    src,
    imgClassName = "",
    alt,
    className = "",
    loadingMask = true,
    ...containerProps
  } = props;

  const [isLoading,setIsLoading] = useState(true);

  const memoImg = useMemo(
    ()=>(
    <img
      src={src}
      alt={alt}
      className = {`img-memo ${imgClassName}`}
      onLoad={()=> setIsLoading(false)}
    />),
    [src,alt,imgClassName]
  );

  return(
    <div {...containerProps} className={`img ${className}`}>
      {memoImg}
      {isLoading && loadingMask &&(
        <div className="img-loading">
          <LoadingNote/>
        </div>
      )}
    </div>
  )
}

export default Img;
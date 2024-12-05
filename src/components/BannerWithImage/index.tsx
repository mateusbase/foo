import {
  getDesktopContainerClasses,
  getDesktopDescriptionClasses,
  getDesktopTitleClasses,
  getMobileContainerClasses,
  getMobileContentClasses,
  getMobileDescriptionClasses,
  getMobileTitleClasses,
} from "./clsxConstants";

interface BannerWithImageProps {
  media: string;
  isLeft?: boolean;
  title: string;
  description: string;
  primaryColor?: string;
  secondaryColor?: string;
  isLargeText?: boolean;
}

const BannerWithImage: React.FC<BannerWithImageProps> = ({
  media,
  isLeft = false,
  title,
  description,
  primaryColor = "purpleDark",
  secondaryColor = "purpleLight",
  isLargeText = false,
}): JSX.Element => {
  return (
    <div className="mb-6 mt-4 w-full flex-1 text-white">
      {/* Layout para telas grandes */}
      <div className="hidden w-full justify-between md:flex">
        {isLeft && (
          <div className="h-[320px] w-1/2">
            <img
              src={media}
              alt="Imagem"
              className="h-[320px] w-full object-cover lg:size-full"
            />
          </div>
        )}

        <div
          className={getDesktopContainerClasses(
            primaryColor,
            secondaryColor,
            isLargeText,
            isLeft,
          )}
        >
          <div>
            <p className={getDesktopTitleClasses(isLargeText)}>{title}</p>
          </div>
          <div>
            <p className={getDesktopDescriptionClasses(isLargeText)}>
              {description}
            </p>
          </div>
        </div>

        {!isLeft && (
          <div className="h-[320px] w-1/2">
            <img
              src={media}
              alt="Imagem"
              className="h-[320px] w-full object-cover lg:size-full"
            />
          </div>
        )}
      </div>

      {/* Layout para dispositivos móveis */}
      <div className={getMobileContainerClasses(isLeft)}>
        <div
          className={getMobileContentClasses(
            isLargeText,
            primaryColor,
            secondaryColor,
          )}
        >
          <p className={getMobileTitleClasses(isLargeText)}>{title}</p>
          <p className={getMobileDescriptionClasses(isLargeText)}>
            {description}
          </p>
        </div>

        <div className="w-full">
          <img src={media} alt="Imagem" className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
};

export default BannerWithImage;

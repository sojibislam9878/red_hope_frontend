import { useTranslation } from "react-i18next";
import useAuth from "../hooks/useAuth";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="">
      <div className="bg-white dark:bg-black w-full min-h-screen">
        <div className="container mx-auto px-4 grid lg:grid-cols-5">
          {/* banner image  */}
          <div className="lg:col-span-3 ">
            <div className="hidden lg:block">
              <svg
                width="900"
                height="668"
                viewBox="0 0 946 968"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_93_102)">
                  <path
                    d="M897 811.5C731.274 699.342 302.232 960 22.5 960C-257.232 960 -484 733.232 -484 453.5C-484 173.768 -257.232 -53 22.5 -53C302.232 -53 1144.5 979 897 811.5Z"
                    fill="url(#paint0_linear_93_102)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_93_102"
                    x="-488"
                    y="-53"
                    width="1433.96"
                    height="1021"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_93_102"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_93_102"
                    x1="-169.5"
                    y1="26.9997"
                    x2="330.5"
                    y2="874.999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.221679" stopColor="#B32346" />
                    <stop offset="0.66922" stopColor="#6A0B37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* banner text contents  */}
          <div className="lg:col-span-2 flex flex-col justify-center items-end text-end">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
              {t("bannerHeader")}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
    </section>
  );
};

export default Banner;

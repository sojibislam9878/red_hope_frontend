import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("about")}</p>
    </div>
  );
}

export default AboutUs

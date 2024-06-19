import { useEffect } from "react";
import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import RouterComponent from "@components/router/RouterComponent";
import Menu from "@components/menu/Menu";
import { translate } from "@i18n";
import { useAppSelector } from "@store/hook";
import * as webChatSelectors from "@store/selectors";

const App = () => {
  const locale = useAppSelector(webChatSelectors.localeSelect);

  const { i18n } = translate();

  useEffect(() => {
    i18n.changeLanguage(locale);

    // eslint-disable-next-line
  }, [locale]);

  return (
    <>
      <ScrollToTop />
      <RouterComponent />
      <Menu />
    </>
  );
};

export default App;

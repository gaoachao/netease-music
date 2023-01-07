import "./index.scss";

import { observer } from "mobx-react-lite";
import { SelfStore } from "../../mobx/self";

import Img from "../Img";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import PageChanger from "./components/PageChanger";
import ThemeBtn from "./components/ThemeBtn";

import { useShowDialogLogin } from "./hooks/useShowDialogLogin";

import avatarPlaceholder from "./images/user.svg";

function _THeTopBar() {
  const { showDialogLogin, setShowDialogLogin } = useShowDialogLogin();
  const self = SelfStore.self;
  return (
    <div className="c-the_top_bar">
      <Logo />
      <div className="c-the_top_bar-middle">
        <PageChanger />
        <SearchBar />
      </div>
      <div className="c-the_top_bar-right">
        <div
          className="c-the_top_bar-right-user"
          onClick={() => {
            if (!self) {
              setShowDialogLogin(true);
            }
          }}
        >
          <Img
            className={
              self
                ? "c-the_top_bar-right-user-avatar"
                : "c-the_top_bar-right-user-avatar placeholder"
            }
            src={self ? self.avatarUrl : avatarPlaceholder}
            alt="avatar"
          />
          {self?self.nickname : "未登录"}
        </div>
        <ThemeBtn/>
      </div>
    </div>
    
  );
}
const TheTopBar = observer(_THeTopBar);
export default TheTopBar;

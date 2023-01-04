import "./index.scss";

import { observer } from "mobx-react-lite";

import { PlayStore } from "../../../../mobx/play"
type AsidePlaylistProps = {
  show: boolean;
};

function _AsidePlaylist(props: AsidePlaylistProps) {
  const { show } = props;
  const playlist = PlayStore.tracks;
  const playListID = PlayStore.playlistID || 0;

  return (
    <div className={`aside_playlist ${show ? "" : "hide"}`}>
      { playlist.length === 0 ? (
        <div>没有歌曲呢</div>
      ):(

      )}
    </div>
  );
}

const AsidePlaylist = observer(_AsidePlaylist);
export default AsidePlaylist;

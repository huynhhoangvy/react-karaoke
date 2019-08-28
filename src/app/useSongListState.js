import { useState } from 'react';

const useSongListState = (initialValue) => {
    const [songList, setSongList] = useState(initialValue);

    return {
        songList,
        addSong: songTitle => {
            setSongList([...songList, songTitle]);
        },
        superAddSong: songTitle => {
            setSongList([songTitle, ...songList]);
        },
        removeSong: songIndex => {
            const newSongList = songList.filter((_, index) => index !== songIndex);
            setSongList(newSongList);
        },
        setSongList: songList => {
            setSongList(songList);
        },
        getNextSongId: () => {
            if (songList.length > 0) {
                return songList[0].id;
            }
        }
    }
};

export default useSongListState;
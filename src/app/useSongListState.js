import { useState } from 'react';

const useSongListState = initialValue => {
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
        }
    }
};

export default useSongListState
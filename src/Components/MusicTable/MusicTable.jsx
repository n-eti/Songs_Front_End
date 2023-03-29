import React from "react";

const MusicTable = (props) => {
    return (
     <table>
    <tr>
     <th>Title</th>
     <th>Artist</th>
     <th>Album</th>
     <th>Release Date</th>
     <th>Genre</th>

      </tr>
       {props.songs.map((songs) =>{
        return(
            <tr>
            <td>{songs.title}</td>
            <td>{songs.artist}</td>
            <td>{songs.album}</td>
            <td>{songs.release_date}</td>
            <td>{songs.genre}</td>
            </tr>
        )
       })}


</table>
  );
}

export default MusicTable;

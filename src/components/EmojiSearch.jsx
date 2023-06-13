import styles from "./EmojiSearch.module.css";
import emojiDictionary from 'emoji-dictionary';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function EmojiSearch() {
  const [input, setInput] = useState("");
  const [searchedEmojis, setSearchedEmojis] = useState([]);

  const emojiList = emojiDictionary.names || [];

  function handleSearchInput(e) {
    const inputValue = e.target.value;
    setInput(inputValue);
    filterEmojis(inputValue);
  }
  

  const filterEmojis = (input) => {
    const filteredEmojis = emojiList.filter((emoji) => {
      return emoji.includes(input.toLowerCase());
    });
    setSearchedEmojis(filteredEmojis);
  };

  const handleCopyEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji);
    toast('Copied🫡👍', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "2rem",
        borderRadius: "15px",
        fontFamily: "cursive"
      }
    });
    
  };
  
  

  console.log(emojiList)
  console.log(searchedEmojis)
  console.log(emojiDictionary)

  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.head}>Emoji Search App</h1>
        <h4 className={styles.head2}>Choose your emoji and use it😊</h4>
      </div>
      <div>
        <input className={styles.inp} type="text" value={input} placeholder="🔎Search Emojis..." onChange={handleSearchInput}/>
      </div>
      <div className={styles.emojiContainer}>
        {
            searchedEmojis.length === 0 ? (
              <h2 className={styles.match}>No match😂</h2>
            ) : (
              searchedEmojis.map((emoji, index) => (
                <p className={styles.emoji} onClick={() => handleCopyEmoji(emojiDictionary.getUnicode(emoji))} key={index}>{emojiDictionary.getUnicode(emoji)}</p>
            ))
            )
        }
      </div>
      <ToastContainer />
    </div>
  );
}

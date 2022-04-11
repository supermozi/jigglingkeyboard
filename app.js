document.addEventListener('keydown', function(event) {
    console.log(event);
    let pressedKey = event.key;
    pressedKey = pressedKey.toUpperCase();
    console.log(pressedKey);
    const pressedElement = document.getElementById(pressedKey);
    const isJiggle = pressedElement.classList.contains("jiggle");
    console.log(isJiggle);
    
    if (isJiggle) {
        pressedElement.classList.remove("jiggle");
        const nextInt = Math.floor((Math.random() * 26));
        const nextChar = intToChar(nextInt);
        document.getElementById(nextChar).classList.add("jiggle");
    }
    // const itemsArray = ["`", "1","2","3","4","5","6","7","8","9","0","-","=",
    //                     "q","w","e","r","t","y","u","i","o","p","[","]","ss",
    //                     "a","s","d","f","g","h","j","k","l",";","sq",
    //                     "z","x","c","v","b","n","m",",",".","/"
    //                     ]
    // const upperCaseChar = event.key.toUpperCase();
    // const jiggleButton = document.getElementsByClassName("jiggle")[0];
    // const jiggleKey = jiggleButton.getAttribute("data-key");
    // if (upperCaseChar === jiggleKey) {
    //     jiggleButton.classList.remove("jiggle");
    //     // Find next item to jiggle
    //     const nextRandom = Math.floor(Math.random() * itemsArray.length);
    //     let nextRandomKey;
    //     let nextButton;
    //     try {
    //         nextRandomKey = itemsArray[nextRandom].toUpperCase();
    //         nextButton = this.querySelectorAll(`[data-key='${nextRandomKey}']`)[0];
    //         if (nextButton === undefined) {
    //             console.log(`Was not able to find button with value: ${nextRandomKey}`)
    //         }
    //         nextButton.classList.add("jiggle");
    //     } catch (ex) {
    //         console.log("Exception:" + ex);
    //         console.log(`nextRandomKey: ${nextRandomKey} , nextButton: ${nextButton}  , nextRandom: ${nextRandom} `)
    //     }
    // }
  });

  function intToChar(int) {
    const code = 'A'.charCodeAt(0);
    console.log(code); // 👉️ 65
  
    return String.fromCharCode(code + int);
  }

 
  
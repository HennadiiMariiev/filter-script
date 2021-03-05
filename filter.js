      const cardNamesArray = [
        "web-card",
        "app-card",
        "design-card",
        "marketing-card",
      ];
      function showHideCards(RadioChecked) {
        var strCard = RadioChecked.value + "-card";
        if (RadioChecked.value == "all") {
          for (let cardName of cardNamesArray) {
          var cards = document.getElementsByName(cardName);
          for (let cardElement of cards)
            cardElement.style.display = "block";
          }
        }
        else {
          for (let cardName of cardNamesArray) {
          if (strCard.toString() !== cardName) {
            var cards = document.getElementsByName(cardName);
            for (let cardElement of cards) 
              cardElement.style.display = "none";
          } 
          else {
            var cards = document.getElementsByName(strCard);
            for (let cardElement of cards)
              cardElement.style.display = "block";
            }
          }
        }
      }

# filter-script
Фильтрация карточек для страницы "Портфолио"

!========= ДИСКЛЕЙМЕР =========!
Скрипт очень простой и скорее всего написан корявенько-колхозно (вроде onClick стараются не юзать) )))))
Зато понятен, и, пожалуй, самое важное - работает))) прошу не судить строго.
!==============================!

Для возможности фильтрации карточек нужно выполнить следующие 4 действия:
1. заменить все button's в списке-фильтре на аналогичные radiobutton's с label

            <input id="all" class="radiobutton" type="radio" name="cards" value="all" checked onclick="showHideCards(this)"/>
            <label class="button" for="all">Все</label>
            
            <input id="web" class="radiobutton" type="radio" name="cards" value="web" onclick="showHideCards(this)"/>
            <label class="button" for="web">Веб-сайты</label>
            
            <input id="app" class="radiobutton" type="radio" name="cards" value="app" onclick="showHideCards(this)"/>
            <label class="button" for="app">Приложения</label>
            
            <input id="design" class="radiobutton" type="radio" name="cards" value="design" onclick="showHideCards(this)"/>
            <label class="button" for="design">Дизайн</label>
            
            <input id="marketing" class="radiobutton" type="radio" name="cards" value="marketing" onclick="showHideCards(this)"/>
            <label class="button" for="marketing">Маркетинг</label>

2. в каждый элемент списка карточек (то есть в li карточки) добавить name="...", 
    который соответствует категории ("web-card","app-card", "design-card", "marketing-card")
            
            Например, для первой карточки, там где Технокряк, описание - это Веб-сайт. Значит этой карточке прописываем name="web-card".
            <li class="examples__card" name="web-card">

            Дальше идет постер New Orlean vs Golden Star. Описание - Дизайн. Значит добавляем name="design-card". И так далее.
            <li class="examples__card" name="design-card">

3. добавить немного стили radiobutton. Все переписывать нет необходимости: если раньше у вас были кнопки с классом "button", 
    то этот класс перейдет к label, и "внешность" кнопки останется. Будьте внимательны с описанием цвета.

               .radiobutton{
                  list-style-type: none;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  -ms-appearance: none;
                  -o-appearance: none;
                  appearance: none;
                  // nex styles specially for IOS-devices
                  position: absolute;
                  clip: rect(1px 1px 1px 1px);
                  clip: rect(1px, 1px, 1px, 1px);
                  padding: 0;
                  border: 0;
                  height: 1px;
                  width: 1px;
                  overflow: hidden;
                }

               .radiobutton:checked + .button {
                  color: getColor('active');  
                  background-color: getColor('accent');
                }
    
    
4. добавить скрипт в новый js-файл (например, filter.js) и подключить его на странице Портфолио

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

Попробовать фильтр в работе))
THE END

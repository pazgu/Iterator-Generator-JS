function* getStopStation (){
    yield "Ashkelon";
    yield "Ashdod- Ad Halom";
    yield "Yavne- West";
    yield "Rishon Letsion- Moshe Dayan";
    yield "Bat Yam- Hakomemiyut";
    yield "Bat Yam- Yoseftal";
    yield "Holon- Wolfson";
    yield "Holon Junction";
    yield "Tel Aviv- Hahagana";
    yield "Tel Aviv- Hashlom";
    yield "Tel Aviv- Savidor";
    yield "Tel Aviv- University";
    yield "Bnei Brak";
    yield "Petah Tikva- Kiryat Arye";
    yield "Petah Tikva- Sgula";
    yield "Rosh Haayin- North";
    yield "Kfar Saba- Nordau";
    yield "Hod Hashron- Sokolov"; 
    yield "Raanana- South";
    yield "Raanana- North"; 
    yield "Herzeliya";
  }
  
  const centerTrainLine= getStopStation();
  const nextStopButton= document.querySelector("#nextStop");
  nextStopButton.addEventListener("click", () => {
    let currentStop= centerTrainLine.next();
    if (currentStop.done){
      console.log("This is the last station. Hope you'd have a nice journey.");
      nextStopButton.setAttribute("disabled", true);
    }
    else {
      console.log (currentStop.value);
    }
  });
  
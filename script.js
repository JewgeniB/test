async function getEG(EG, ST) {
    let url = `http://localhost:8080/?EG=${EG}&ST=${ST}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


function toggleFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var x = document.getElementById("BDM");
    if (x.innerHTML === "Dark Mode") {
      x.innerHTML = "Light Mode";
    } else {
      x.innerHTML = "Dark Mode";
    }
  } 

async function showEG() {
    let EG = document.getElementsByName("EG")[0];
    EG1 = EG.options[EG.selectedIndex].value;
    let ST = document.getElementsByName("ST")[0];
    ST1 = ST.options[ST.selectedIndex].text;
    let request = await getEG(EG1, ST1);
    console.log(EG1, ST1);
    console.log(request["Brutto"]);

    if ((EG1 === "E1" || EG1 === "E15UE") && ST1 === "1") {
        document.getElementById("resultEG").innerHTML="Leider gibt es für Ihre Auswahl kein Bruttowert.<br>Bitte ändern Sie Ihre Auswahl.";
    } else {
        document.getElementById("resultEG").innerText="Brutto: " + request["Brutto"];
    }
    
    

}



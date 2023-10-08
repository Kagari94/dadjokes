import './App.css';
import { useState } from 'react'
import axios from 'axios'

// Lisäsin simppelin tallennus function jolla voi pitää vitsit näkyvillä.

const URL = "https://icanhazdadjoke.com/"

function App() {

  const [joke, setJoke] = useState("Jokes here")
  var lista = []


  //Haetaan vitsi sivulta, API ohjeet olivat CURL tyylillä.
  const fetchJoke = (e) => {
    e.preventDefault()
    axios.get(URL, {
      headers: { "Accept": "text/plain" }
    }).then((response) => {
      setJoke(response.data)

    }).catch(error => {
      alert(error)
    })

  }

  //Tallenna parhaat vitsit, ehkä jossain vaiheessa voisi tallentaa txt tiedostoon tai jtn.
  function saved(){
    lista.push(joke)
    for(var i = 0; i < lista.length; i++){
      document.getElementById("lista").innerHTML += lista[i] + "<br><br>"
    }
  }


return (
  <div id='container'>
    <form onSubmit={fetchJoke}>
      <div>
        <output><h4>{joke}</h4></output>
      </div>
      <div>
        <button>Get a joke</button>
        <button onClick={saved}>Save?</button>
      </div>
      <div>
        <h5 id="lista"> </h5>
      </div>
    </form>
  </div>
);
}

export default App;

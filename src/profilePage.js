
  export default function Profile() {
    return (
      <div className="container mx-auto">
        <div className="md:flex bg-gray-200">
        <img
            className=" my-20 h-40 w-40 object-cover md:rounded-none rounded-full mx-64"
            src="https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"
            alt=""
            width="884"
            height="512"
          />
          <div className="md:p-0 text-left my-2">
            <blockquote>
              <p className="text-base p-4">
                <h3>Infos</h3>
                    <p className="text-gray-400">_________________</p>
                    <div className="text-gray-600">
                        <li>Name <p className="text-blue-300">Jari Schnell </p></li>  
                        <li>Wohnform <p className="text-blue-300">WG </p></li>
                        <li>Zimmer <p className="text-blue-300">5.5 </p></li>
                        <li>Anzahl Personen<p className="text-blue-300">4 </p></li>
                        <li>Energieformen<p className="text-blue-300">Solar</p></li>
                    </div>              
              </p>
            </blockquote>
          </div>      
        </div>


        <div className="pt-2">
            <div className="bg-gray-200 p-4"> 
                <h3 className="text-left">Badges</h3>
                <p className="text-gray-400">_________________</p>
                <div className="pt-2">
                    <div className="text-3xl p-6 bg-gray-100 rounded-xl md:p-2"> 
                        <button class="px-4"title="You solved your very 1st challenge">🆒</button>
                        <button class="px-4"title="You are an alien">👽</button>
                        <button class="px-4"title="You shared your 1st tipp">👾</button>
                        <button class="px-4"title="You did your laundry at night to save energy">🙉</button>
                        <button class="px-4"title="You turned off your router more frequently">🌈</button>
                        <button class="px-4"title="You minimized your light use">🔥</button>
                        <button class="px-4"title="You earned a badge">🎃</button>
                        <button class="px-4"title="Welcome to the mermaid challenge">🧜🏻‍♀️</button>
                        <button class="px-4"title="You used your bycicle instead of your car today">🚵🏽</button>
                        <button class="px-4"title="Ninja cat on dragon">🐱‍🐉</button>
                        <button class="px-4"title="Magic mushroom">🍄</button>
                        <button class="px-4"title="Reduce Electricity by 10%">🤓</button>
                        <button class="px-4"title="Laundry at night">🙉</button>
                        <button class="px-4"title="Reduce heating">🌈</button>
                        <button class="px-4"title="Minimize lights">🔥</button>
                        <button class="px-4"title="Green with red head">🐛</button>
                        <button class="px-4"title="Turn off Router">🐋</button>
                        <button class="px-4"title="Ninja Cat Astronaut">🐱‍🚀</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="pt-2">
            <div className="bg-gray-200 p-4"> 
                <h3 className="text-left">Tipps</h3>
                <p className="text-gray-400">_________________</p>
                <div className="text-3xl"> 
                    <div className="pt-2">
                        <div className="bg-gray-100 rounded-xl md:p-4"> 
                            <p className="text-gray-500 text-xs">23/10/2021 </p>
                            <p className="text-blue-300 text-base">
                                Wir hätten nicht gedacht, dass das Ausschalten unseres WLans nachts so viel zur Energiereduktion beiträgt. Somit haben wir letztens den 🐋 - Batch erhalten! Probiert es doch auch aus. 
                            </p>
                        </div>
                    </div>
                    
                    <div className="pt-2">
                        <div className="bg-gray-100 rounded-xl md:p-4">
                            <p className="text-gray-500 text-xs">02/09/2021 </p>
                            <p className="text-blue-300 text-base">
                                Haushalt Jari Schnell ist auf Solarenergie umgestiegen ! 🔥
                            </p>
                        </div>
                    </div>
            

                    <div className="pt-2">
                        <div className="bg-gray-100 rounded-xl md:p-4">
                            <p className="text-gray-500 text-xs">27/08/2021 </p>
                            <p className="text-blue-300 text-base">
                                Habt ihr gewusst, dass so viele Geräte nachts auf Stand-by sind und mehr Energie verbrauchen, als uns bewusst ist?
                            </p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <div className="bg-gray-100 rounded-xl md:p-4">
                            <p className="text-gray-500 text-xs">Teile weitere Tipps mit deinen Nachbarn:</p>
                            <input class="focus:ring-blue-300 px-2 my-2"></input>
                        </div>  
                    </div>  
                </div>
            </div>

        </div>
        
      </div>
    );
  }

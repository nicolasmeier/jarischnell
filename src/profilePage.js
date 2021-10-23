  export default function Profile() {
    return (
      <div className="container mx-auto">
        <div className="md:flex bg-gray-200 rounded-xl p-8 md:p-0">
        <img
            className="w-32 h-32 my-6 md:w-80 md:h-auto md:rounded-none rounded-full mx-64"
            src="https://cdn.icon-icons.com/icons2/1465/PNG/512/303familymanwomanboyboy1_100514.png"
            alt=""
            width="884"
            height="512"
          />
          <div className="md:p-0 text-left my-6 ">
            <blockquote>
              <p className="text-base">
                <h3>Infos</h3>
                    <p className="text-gray-400">_________________</p>
                    <div className="text-gray-600">
                        <li>Name <p className="text-blue-300">jarischnell </p></li>  
                        <li>Wohnform <p className="text-blue-300">WG </p></li>
                        <li>Zimmer <p className="text-blue-300">5.5 </p></li>
                        <li>Anzahl Personen<p className="text-blue-300">4 </p></li>
                        <li>Energieformen<p className="text-blue-300">Solar</p></li>
                    </div>              
              </p>
            </blockquote>
          </div>      
        </div>


        <div className="pt-4">
            <div className="bg-gray-200 rounded-xl p-4"> 
                <h3 className="text-left">Badges</h3>
                <p className="text-gray-400">_________________</p>
                <div className="pt-2">
                        <div className="text-3xl p-6 bg-gray-100 rounded-xl md:p-2"> 
                            😜     👽     👾     🎃     🧜🏻‍♀️     🏄🏽     🚵🏽     🔥     🌪     🌈     🏃‍♀️    🐛 

                                👨‍🎨     👨‍🌾    👩‍🍳     🙉    🐋 
                        </div>
                    </div>
            </div>
        </div>
        
        <div className="pt-4">
            <div className="bg-gray-200 rounded-xl p-4"> 
                <h3 className="text-left">Tipps</h3>
                <p className="text-gray-400">_________________</p>
                <div className="text-3xl"> 
                    <div className="pt-2">
                        <div className="bg-gray-100 rounded-xl md:p-4"> 
                            <p className="text-gray-500 text-xs">23/10/2021 </p>
                            <p className="text-blue-300 text-base">
                                Wir hätten nicht gedacht, dass das Ausschalten unseres Wlans nachts so viel zur Energiereduktion beiträgt. Somit haben wir letztens den 🐋 - Batch erhalten! Probiert es doch auch aus. 
                            </p>
                        </div>
                    </div>
                    
                    <div className="pt-2">
                        <div className="bg-gray-100 rounded-xl md:p-4">
                            <p className="text-gray-500 text-xs">02/09/2021 </p>
                            <p className="text-blue-300 text-base">
                                Haushalt jarischnell ist auf Solarenergie umgestiegen ! 🔥
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


                </div>
            </div>

        </div>
        
      </div>
    );
  }
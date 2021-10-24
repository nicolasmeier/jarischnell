
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
                        <li>Living Situation <p className="text-blue-300">Shared Flat </p></li>
                        <li>Rooms <p className="text-blue-300">5.5 </p></li>
                        <li>Number of People<p className="text-blue-300">4 </p></li>
                        <li>Energy Sources<p className="text-blue-300">Solar</p></li>
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
                        <button class="p-4"title="You liked your first idea">💗</button>
                        <button class="p-4"title="You earned a badge">🎃</button>
                        <button class="p-4"title="You solved your very 1st challenge">🆒</button>
                        <button class="p-4"title="You shared your 1st tipp">👾</button>
                        <button class="p-4"title="You did your laundry at night to save energy">🙉</button>
                        <button class="p-4"title="You turned off your router more frequently">🌈</button>
                        <button class="p-4"title="You minimized your light use">🔥</button>
                        <button class="p-4"title="Welcome to the mermaid challenge">🧜🏻‍♀️</button>
                        <button class="p-4"title="You used your bycicle instead of your car today">🚵🏽</button>
                        <button class="p-4"title="You didn't use your oven for a week">🍰</button>
                        <button class="p-4"title="Magic mushroom">🍄</button>
                        <button class="p-4"title="Reduce electricity by 10%">🤓</button>                        
                        <button class="p-4"title="Reduce heating">🌈</button>
                        <button class="p-4"title="Minimize lights">🔥</button>
                        <button class="p-4"title="Green with red head">🐛</button>
                        <button class="p-4"title="Turn off Router">🐋</button>
                        <button class="p-4"title="Ninja cat astronaut">🐱‍🚀</button>
                        <button class="p-4"title="You are an alien">👽</button>
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
                                We were not aware that turning off your router at night would make such a difference. We earned the 🐋 - badge by reducing our energy consumption.
                            </p>
                        </div>
                    </div>
                    
                    <div className="pt-2">
                        <div className="bg-gray-100 rounded-xl md:p-4">
                            <p className="text-gray-500 text-xs">02/09/2021 </p>
                            <p className="text-blue-300 text-base">
                                Jari Schnell flat changed to solar energy!
                            </p>
                        </div>
                    </div>
            

                    <div className="pt-2">
                        <div className="bg-gray-100 rounded-xl md:p-4">
                            <p className="text-gray-500 text-xs">27/08/2021 </p>
                            <p className="text-blue-300 text-base">
                                Did you know that many devices that are on stand-by at night consume more energy than we thought?
                            </p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <div className="bg-gray-100 rounded-xl md:p-4">
                            <p className="text-gray-500 text-xs">Share more useful tipps to your neighbours:</p>
                            <input class="focus:ring-blue-300 px-2 my-2"></input>
                        </div>  
                    </div>  
                </div>
            </div>

        </div>
        
      </div>
    );
  }

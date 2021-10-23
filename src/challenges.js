
const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    
  ]

  const challengesJson = [
    {      
      title: 'Turn off Router',
      description: 'Safe energy by turning off your router over night!',
      categorie: 'Electronics',
      difficulty: 'Easy',
      duration: '1 week',
      badgeURI: 'https://media3.giphy.com/media/j5iIjX5RP8GVzT1FqQ/giphy.gif?cid=790b7611339b1bebcf3fda268fb5e28a83b27e6af159dfd0&rid=giphy.gif&ct=g'
    },
    {      
        title: 'Laundry at night',
        description: 'Profit from cheaper electricity prices by doing your laundry at night.',
        categorie: 'Household',
        difficulty: 'Middle',
        duration: '1 week',
        badgeURI: 'https://media3.giphy.com/media/a1kftfCMBOa0o/giphy.webp?cid=ecf05e476ylxq2f08jqxmthj87p9al2wxf51a73xigz532bl&rid=giphy.webp&ct=g'
      },
      {      
        title: 'Turn off Router',
        description: 'Safe energy by turning off your router over night!',
        categorie: 'Electronics',
        difficulty: 'Easy',
        duration: '1 week',
        badgeURI: 'https://media3.giphy.com/media/j5iIjX5RP8GVzT1FqQ/giphy.gif?cid=790b7611339b1bebcf3fda268fb5e28a83b27e6af159dfd0&rid=giphy.gif&ct=g'
      },
      {      
        title: 'Turn off Router',
        description: 'Safe energy by turning off your router over night!',
        categorie: 'Electronics',
        difficulty: 'Easy',
        duration: '1 week',
        badgeURI: 'https://media3.giphy.com/media/j5iIjX5RP8GVzT1FqQ/giphy.gif?cid=790b7611339b1bebcf3fda268fb5e28a83b27e6af159dfd0&rid=giphy.gif&ct=g'
      },
    
  ]
  
  export default function Challenges() {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Challenge
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Categories
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Difficulty
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Duration
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">More info</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {challengesJson.map((challenge) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center"> 
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={challenge.badgeURI} alt="" />
                        </div>                         
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{challenge.title}</div>                            
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{challenge.description}</div>                        
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{challenge.categorie}</div>  
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{challenge.difficulty}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Show More
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
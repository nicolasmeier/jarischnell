/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'Jane Cooper',
    title: 'Jane liked the idea you posted',
    department: 'Optimization',
    role: 'Admin',
    cat: 'Tips/Ideas',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    name: 'Timbo Bart',
    title: 'Timbo just achieved the milestone "10% Energy Reduction 🐱‍🐉" done',
    department: 'Optimization',
    role: 'Admin',
    cat: 'Milestone',
    image:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    name: 'Jeani Alfert',
    title: 'Jeani just achieved the milestone "20% Energy Reduction -> 🐱‍🏍" done',
    department: 'Optimization',
    role: 'Admin',
    cat: 'Milestone',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jari Schnell',
    title: 'Congrat! You just achieved the challenge "Turn off Router -> 🐱‍👤"',
    department: 'Optimization',
    role: 'Admin',
    cat: 'Challenge',
    image:
      'https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80',
  },
  // More people...
]

export default function Social() {
  return (
    <div className="flex flex justify-center content-center">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-12 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="object-cover h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.cat}</div>
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
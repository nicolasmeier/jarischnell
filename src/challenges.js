import { useState } from "react";

var challengesJson = [
  {
    index: 0,
    title: "Turn off Router",
    description: "Safe energy by turning off your router over night!",
    categorie: "Electronics",
    difficulty: "Easy",
    duration: "1 week",
    badge: "🐋",
    savingGoal: "1.3%",
    active: false,
    timestamp: Date.now(),
  },
  {
    index: 1,
    title: "Laundry at Night",
    description: "Do your laundry at night with cheaper electricity!",
    categorie: "Washing Machine",
    difficulty: "Middle",
    duration: "1 week",
    savingGoal: "5.1%",
    badge: "🙉",
    active: false,
  },
  {
    index: 2,
    title: "Minimize Lights",
    description: "Always turn off the lights when leaving a room!",
    categorie: "Lights",
    difficulty: "Hard",
    duration: "1 month",
    savingGoal: "5.7%",
    badge: "🌈",
    active: false,
  },
  {
    index: 3,
    title: "Reduce Heating",
    description: "Save energy by reducing the heating by half!",
    categorie: "Heating",
    difficulty: "Easy",
    duration: "1 week",
    savingGoal: "3.7%",
    badge: "🔥",
    active: false,
  },
];

var pastChallengesJson = [
  {
    index: 1,
    title: "Cold Shower",
    description: "Take cold showers to get stronger and save energy!",
    categorie: "Water",
    difficulty: "Hard",
    duration: "1 week",
    savingGoal: "9.7%",
    savingAchieved: "8,4%",
    result: false,
    badge: "❄️",
    active: false,
    timestamp: Date.now(),
  },
  {
    index: 2,
    title: "No more Cake",
    description: "Don't use your oven for a week!",
    categorie: "Electronics",
    difficulty: "Medium",
    duration: "1 week",
    savingGoal: "6.8%",
    savingAchieved: "9.3%",
    result: true,
    badge: "🍰",
    active: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ChallengeElement(challenge) {
  const [active, setActive] = useState(challenge.active);
  return (
    <tr className={classNames(active ? "bg-gray-100" : "")}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-center  h-15 w-15 text-2xl">
            {challenge.badge}
          </div>
          <div className="ml-4">
            <div className="text-sm font-bold font-medium text-gray-900">
              {challenge.title}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{challenge.description}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{challenge.categorie}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={classNames(
            "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
            challenge.difficulty === "Easy"
              ? "bg-green-100 text-green-800"
              : challenge.difficulty === "Middle"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          )}
        >
          {challenge.difficulty}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm ">
        {challenge.duration}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">
        {challenge.savingGoal}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => {
            setActive(!active);
            challenge.active = !active;
            localStorage.setItem("challenges", JSON.stringify(challengesJson));
          }}
          className={classNames(
            active ? "bg-gray-700" : "bg-green-600",
            "w-20 font p-2 pl-3 pr-3 transition-colors duration-700 transform hover:bg-blue-400 text-gray-100 text-xs rounded-lg focus:border-4 focus:border-indigo-300"
          )}
        >
          {active ? "Accepted" : "Accept"}
        </button>
      </td>
    </tr>
  );
}

function pastChallengeElement(challenge) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-center  h-15 w-15 text-2xl">
            {challenge.badge}
          </div>
          <div className="ml-4">
            <div className="text-sm font-bold font-medium text-gray-900">
              {challenge.title}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{challenge.description}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{challenge.categorie}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={classNames(
            "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
            challenge.difficulty === "Easy"
              ? "bg-green-100 text-green-800"
              : challenge.difficulty === "Middle"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          )}
        >
          {challenge.difficulty}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {challenge.duration}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">
        {challenge.savingGoal}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">
        {challenge.savingAchieved}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-center  h-15 w-15 text-2xl">
          {challenge.result ? "✔" : "❌"}
        </div>
      </td>
    </tr>
  );
}

export default function Challenges() {
  var temp = localStorage.getItem("challenges");
  if (temp != null) {
    temp = JSON.parse(temp);
    console.log(temp[0].timestamp + 900000 - Date.now());
    if (
      temp[0].timestamp === undefined ||
      temp[0].timestamp + 900000 < Date.now()
    ) {
      //Clear localstorage after 15 minutes
      localStorage.removeItem("challenges");
    } else {
      challengesJson = temp;
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="m-7 inline-block text-2xl font-extrabold text-gray-900 tracking-tight">Suggested Challenges </h1>
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
                      Badge
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
                      Category
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
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Saving Goal
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">More info</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {challengesJson.map((challenge) =>
                    ChallengeElement(challenge)
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="m-7 mt-12 inline-block text-2xl font-extrabold text-gray-900 tracking-tight">Past Challenges </h1>
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
                      Badge
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
                      Category
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

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Saving Goal
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Saving Achieved
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pastChallengesJson.map((challenge) =>
                    pastChallengeElement(challenge)
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

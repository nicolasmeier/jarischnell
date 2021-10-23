import { useState } from "react";

var challengesJson = [
  {
    index: 0,
    title: "Turn off Router",
    description: "Safe energy by turning off your router over night!",
    categorie: "Electronics",
    difficulty: "Easy",
    duration: "1 week",
    badgeURI:
      "https://media3.giphy.com/media/j5iIjX5RP8GVzT1FqQ/giphy.gif?cid=790b7611339b1bebcf3fda268fb5e28a83b27e6af159dfd0&rid=giphy.gif&ct=g",
    badge: "🐋",
    active: false,
  },
  {
    index: 1,
    title: "Laundry at night",
    description:
      "Profit from cheaper electricity prices by doing your laundry at night!",
    categorie: "Washing machine",
    difficulty: "Middle",
    duration: "1 week",
    badgeURI:
      "https://media3.giphy.com/media/a1kftfCMBOa0o/giphy.webp?cid=ecf05e476ylxq2f08jqxmthj87p9al2wxf51a73xigz532bl&rid=giphy.webp&ct=g",
    badge: "🙉",
    active: false,
  },
  {
    index: 2,
    title: "Minimize lights",
    description: "Always turn off the lights wenn leaving a room!",
    categorie: "Lights",
    difficulty: "Hard",
    duration: "1 month",
    badgeURI:
      "https://media4.giphy.com/media/l2JebisijdzVL2Cqs/200.webp?cid=ecf05e47kxrhlkv8i1wqrlolpdyfgcblffic0jfpg59hn31i&rid=200.webp&ct=g",
    badge: "🔥",
    active: false,
  },
  {
    index: 3,
    title: "Turn off Router",
    description: "Safe energy by turning off your router over night!",
    categorie: "Electronics",
    difficulty: "Easy",
    duration: "1 week",
    badgeURI:
      "https://media3.giphy.com/media/j5iIjX5RP8GVzT1FqQ/giphy.gif?cid=790b7611339b1bebcf3fda268fb5e28a83b27e6af159dfd0&rid=giphy.gif&ct=g",
    badge: "🌈",
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
            <div className="text-sm font-medium text-gray-900">
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

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {challenge.duration}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium w-36">
        <button
          onClick={() => {
            setActive(!active);
            challenge.active = !active;
            localStorage.setItem("challenges", JSON.stringify(challengesJson));
          }}
          className={classNames(
            active ? "bg-gray-700" : "bg-green-600",
            " p-2 pl-3 pr-3 transition-colors duration-700 transform hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 focus:border-indigo-300"
          )}
        >
          {active ? "Accepted" : "  Accept  "}
        </button>
      </td>
    </tr>
  );
}

export default function Challenges() {
  var temp = localStorage.getItem("challenges");
  if (temp != null) {
    challengesJson = JSON.parse(temp);
  }

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
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">More info</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {challengesJson.map((challenge) => ChallengeElement(challenge))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

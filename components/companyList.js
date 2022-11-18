import { DotsVerticalIcon } from '@heroicons/react/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Companies({records}) {
  return (
    <div>
      {/* <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2> */}
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {records.map((record) => (
          <li key={record.id} className="col-span-1 flex rounded-md shadow-sm">
            <div
              className={classNames(
                'flex-shrink-0 bg-black flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {/* {record.fields.Logo ?
               <img href={record.fields.Logo} /> : 
               record.fields.abv
               }
              {record.fields.abv} */}
              {<img src={record.fields.Logo} className="w-[80%] h-[80%]"/>}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a href={record.fields.Jobs} className="font-medium text-gray-900 hover:text-gray-600">
                  {record.fields.Company}
                </a>
                <p className="text-vm-blue">{record.fields.Industry}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <a
                  target="_blank"
                  href={record.fields.Jobs}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

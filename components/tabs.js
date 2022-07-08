/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export function Tabs(props) {
    return (
      <div className="pb-5 border-b border-gray-200 mx-auto max-w-7xl  sm:pb-0">
        <h3 className="text-lg leading-6 font-medium text-white">{props.content.title}</h3>
        <div className="mt-3 sm:mt-4">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {props.content.tabs.map((tab) => (
                <option key={tab.fields.title}>{tab.fields.title}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block mb-5">
            <nav className="-mb-px flex space-x-8">
              {props.content.tabs.map((tab) => (
                <a
                  key={tab.fields.text}
                  href={tab.fields.url}
                  className={classNames(
                    tab.current
                      ? 'border-vm-green text-vm-green'
                      : 'border-transparent text-white hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.fields.text}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }
  
import React from 'react';

const Checkbox = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {props?.data?.map((d) => (
        <div 
          key={d?.value} 
          className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name={d?.value}
              value={d?.value}
              id={d?.value}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor={d?.value}
              className="text-sm font-medium text-gray-700"
            >
              {d?.value}
            </label>
          </div>
          {d?.proficiency && (
            <div className="mt-3 space-y-2">
              {d?.proficiency?.map((p, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={`${d?.value}-${p.value}`}
                    value={d?.value}
                    id={`${d?.value}-${p.value}`}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`${d?.value}-${p.value}`}
                    className="text-sm font-medium text-gray-500"
                  >
                    {p.value}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkbox;

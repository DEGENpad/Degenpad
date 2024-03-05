import React from 'react';

const ProgressBar = ({ progress, max }: { progress: number | string, max?: number}) => {
  return (
    <div className="relative pt-1 px-3 rounded-md overflow-hidden">
      <div className="relative rounded-full overflow-hidden">
        <progress
          value={progress}
          max= {max}
          className="w-full h-4 bg-teal-200 rounded-full"
        ></progress>
      </div>
      <span className="text-xs font-semibold inline-block mt-2 text-teal-600">
        {((progress as number / (max || 1 )) * 100)}%
      </span>
    </div>
  );
};

export default ProgressBar;

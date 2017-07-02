import React from 'react';

export default function ScreenVideo({url, provider}) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      {
        provider ?
          <video controls poster="vignette.jpg" preload="none">
            <source src={url} />
            Your browser does not supportthe video tag
          </video> :
          <iframe className="embed-responsive-item" src={url} frameBorder="0"></iframe>
      }
    </div>
  );
}
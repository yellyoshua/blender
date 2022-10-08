import { useRegisterSW } from 'virtual:pwa-register/react';

const four_hours_in_ms = 1000 * 60 * 60 * 4;

export default function ReloadPrompt () {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker
  } = useRegisterSW({
    onRegistered (registry) {
      console.log(`SW Registered: ${registry}`);

      if (registry) {
        setInterval(() => {
          registry.update();
        }, four_hours_in_ms);
      }
    },
    onRegisterError (error) {
      console.log('SW registration error', error);
    }
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div>
      {
        (offlineReady || needRefresh) && <PromptMessage
          offlineReady={offlineReady}
          needRefresh={needRefresh}
          updateServiceWorker={updateServiceWorker}
          close={close}
        />
      }
    </div>
  );
}

function PromptMessage ({offlineReady, needRefresh, updateServiceWorker, close}) {
  const renderButton = (label, handler) => {
    return (
      <button 
        className={`
          border-gray-600 rounded-md border px-2 py-1 ml-2 mr-1
          hover:bg-gray-600 hover:text-white text-sm
        `}
        onClick={handler}
      >
        {label}
      </button>
    );
  };

  return (
    <div className={`
      fixed bottom-0 right-0 text-left border-gray-600 
      bg-white rounded-md shadow-lg p-4 m-4 border
    `}>
      <div className="mb-2 text-sm">
        { offlineReady
          ? <span>App ready to work offline</span>
          : <span>New content available, click on reload button to update.</span>
        }
      </div>
      { needRefresh && renderButton('Reload', () => updateServiceWorker(true))}
      {renderButton('Close', () => close())}
    </div>
  );
}

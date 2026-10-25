import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from './Cardsection';
import processdataObject from './Hooks';
import type { CardobjectTypelekhaholo } from './type';

const Explore = () => {
  // json data + loading state, hook theke asche
  const { etaholoparameter, loadinghocchekina } = processdataObject();

  // stack ta ekhane e thakbe (parent), card theke add hobe, sidebar e dekhabe
  const [stack, setStack] = useState<CardobjectTypelekhaholo[]>([]);

  // ---- child theke (Card) parent (Explore) ke data pathanor function ----
  const addToStack = (tech: CardobjectTypelekhaholo) => {
    const alreadyAche = stack.some((item) => item.id === tech.id);

    if (alreadyAche) {
      toast.warning(`${tech.name} already tomar stack e ache!`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} successfully add hoyeche stack e!`);
  };

  const removeFromStack = (id: string) => {
    const removedItem = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removedItem) {
      toast.info(`${removedItem.name} stack theke remove kora hoyeche.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('Shob technology stack theke remove kora hoyeche.');
  };

  return (
    <div className="container mx-auto px-[30px] my-[50px] md:my-[80px]">

      <div className="mb-[40px]">
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1E293B]">
          Explore the{' '}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#475569] mt-[10px] text-[16px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* loading obostha - json load na hoya porjonto ei message ta dekhabe */}
      {loadinghocchekina ? (
        <div className="w-full py-[80px] flex items-center justify-center text-[#475569] text-[16px] font-medium">
          Loading technologies...
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px]">

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {etaholoparameter.map((onybyonesendingitem) => (
              <Card
                key={onybyonesendingitem.id}
                sendingprops={onybyonesendingitem}
                isAdded={stack.some((item) => item.id === onybyonesendingitem.id)}
                onAddClick={addToStack}
              />
            ))}
          </div>

          {/* ---- Your Stack sidebar ---- */}
          <div className="lg:col-span-3 border border-[#E5E7EB] rounded-[12px] p-[24px] bg-white h-fit">
            <h3 className="font-bold text-[18px] mb-[8px] text-[#1E293B]">Your Stack</h3>
            <p className="text-[14px] text-[#475569] mb-[16px]">
              {stack.length === 0
                ? 'No technologies selected yet.'
                : `${stack.length} Technology Selected`}
            </p>

            <div className="border-t border-[#E5E7EB] mt-[16px] pt-[16px]">
              {stack.length === 0 ? (
                <div className="border border-dashed border-[#E2E8F0] rounded-[10px] py-[24px]">
                  <p className="text-center text-sm text-gray-400">Your stack is empty.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-[12px]">
                  {stack.map((stackitem) => (
                    <div
                      key={stackitem.id}
                      className="flex items-center justify-between border border-[#E5E7EB] rounded-[10px] p-[12px]"
                    >
                      <div className="flex items-center gap-[10px]">
                        <img src={stackitem.icon} alt={stackitem.name} className="w-[28px] h-[28px]" />
                        <div>
                          <p className="text-[14px] font-semibold text-[#1E293B]">{stackitem.name}</p>
                          <p className="text-[12px] text-[#94A3B8]">{stackitem.category}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromStack(stackitem.id)}
                        aria-label={`${stackitem.name} remove korun`}
                        className="text-[#94A3B8] hover:text-[#EF4444] transition-colors text-[16px]"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {stack.length > 0 && (
                <button
                  onClick={removeAll}
                  className="w-full mt-[16px] border border-[#FCA5A5] text-[#EF4444] font-semibold text-[14px] py-[10px] rounded-[8px] hover:bg-red-50 transition-colors"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>

        </div>
      )}

      {/* NOTE: App.tsx e already ekta <ToastContainer /> thakle eita duplicate hoye jabe,
          shekhetre eikhan theke ei line ta shorie App.tsx e rakhben (root e ekbar e enough) */}
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
};

export default Explore;

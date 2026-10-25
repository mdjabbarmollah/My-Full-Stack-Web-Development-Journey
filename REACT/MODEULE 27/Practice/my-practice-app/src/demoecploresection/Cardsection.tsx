import type { CardobjectTypelekhaholo } from './type';

interface CardsProps {
  sendingprops: CardobjectTypelekhaholo;
  isAdded: boolean;
  onAddClick: (tech: CardobjectTypelekhaholo) => void;
}

const difficultyColor = (difficulty: CardobjectTypelekhaholo['difficulty']) => {
  if (difficulty === 'Beginner-Friendly') return 'text-[#10B981]';
  if (difficulty === 'Intermediate') return 'text-[#F59E0B]';
  return 'text-[#EF4444]';
};

const Cards = ({ sendingprops, isAdded, onAddClick }: CardsProps) => {
  return (
    <div className="border border-[#E5E7EB] rounded-[16px] p-[24px] bg-white hover:shadow-md transition-shadow">

      <div className="flex justify-between items-start mb-[16px]">
        <img src={sendingprops.icon} alt={sendingprops.name} className="w-[48px] h-[48px]" />
        {/* badge na thakle kichu render hobe na */}
        {sendingprops.badge && (
          <span className="bg-pink-50 text-pink-500 text-[12px] font-bold px-[12px] py-[4px] rounded-full">
            {sendingprops.badge}
          </span>
        )}
      </div>

      <h3 className="font-bold text-[20px] mb-[8px] text-[#1E293B]">{sendingprops.name}</h3>
      <p className="text-[#475569] text-[14px] leading-relaxed mb-[20px] line-clamp-3">
        {sendingprops.description}
      </p>

      <div className="flex justify-between items-center text-[13px] font-medium text-[#64748B] mb-[20px]">
        <span className="bg-[#F1F5F9] text-[#475569] px-[10px] py-[3px] rounded-full">
          {sendingprops.category}
        </span>
        <span className={`font-semibold ${difficultyColor(sendingprops.difficulty)}`}>
          {sendingprops.difficulty}
        </span>
        <span className="flex items-center gap-[4px] text-[#F59E0B] font-bold">
          ⭐ {sendingprops.rating}
        </span>
      </div>

      <button
        onClick={() => !isAdded && onAddClick(sendingprops)}
        disabled={isAdded}
        className={`w-full py-[10px] rounded-[8px] font-semibold text-[14px] transition-colors ${
          isAdded
            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
            : 'bg-[#0F172A] text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default Cards;

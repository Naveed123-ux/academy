export function ArabicCalligraphy() {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <div className="text-6xl md:text-7xl text-center" style={{ fontFamily: 'Amiri, serif' }}>
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </span>
      </div>
      <p className="text-gray-600 text-center italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
        In the name of Allah, the Most Gracious, the Most Merciful
      </p>
    </div>
  );
}

import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

const ClientReviews = ({ dict }: SectionProps) => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-mono font-bold text-gray-800 mb-12">
        {dict.reviews.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dict.reviews.reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            {/* Profile Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={review.profileImage}
                  alt="Client profile"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                {review.title}
              </h3>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {review.review}
            </p>

            {/* Category and Arrow */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">
                {review.category}
              </span>
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export default function Testimonial({ 
  quote, 
  author, 
  role, 
  company, 
  avatar 
}: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
      <div className="mb-6">
        <svg className="w-8 h-8 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <blockquote className="text-lg text-neutral-700 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
            <span className="text-primary-600 font-semibold text-lg">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <div className="font-semibold text-neutral-900">{author}</div>
          <div className="text-sm text-neutral-600">{role} at {company}</div>
        </div>
      </div>
    </div>
  );
}
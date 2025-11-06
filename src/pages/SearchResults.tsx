import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allTrips } from '@/data/trips';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q') || '';
  
  // Enhanced search logic with exact matching
  const searchResults = allTrips.filter(trip => {
    const searchLower = searchTerm.toLowerCase().trim();
    const titleLower = trip.title.toLowerCase();
    const destinationLower = trip.destination.toLowerCase();
    
    // Exact match first
    if (titleLower === searchLower || destinationLower === searchLower) {
      return true;
    }
    
    // Then check if search term is contained in title or destination
    return titleLower.includes(searchLower) || destinationLower.includes(searchLower);
  });
  
  // Get suggested trips (exclude found results)
  const suggestedTrips = allTrips
    .filter(trip => !searchResults.includes(trip))
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search term display */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Search results for "{searchTerm}"
          </h1>
          <p className="text-gray-600">
            {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
          </p>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 ? (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {searchResults.map((trip, index) => (
                <Link 
                  to={`/trip/${trip.slug}`} 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img 
                    src={trip.imageUrl} 
                    alt={trip.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2">
                      {trip.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{trip.duration}</p>
                    <p className="text-sm text-gray-600">
                      Starting <span className="font-bold text-[#0B3A55]">{trip.price}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          /* No results message */
          <div className="text-center py-12 mb-12">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sorry, no packages found
              </h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any trips matching your search. But don't worry, we have many other amazing destinations for you!
              </p>
            </div>
          </div>
        )}

        {/* Other packages section */}
        {suggestedTrips.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {searchResults.length > 0 ? 'Other packages you may like' : 'Popular destinations'}
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedTrips.map((trip, index) => (
              <Link 
                to={`/trip/${trip.slug}`} 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img 
                  src={trip.imageUrl} 
                  alt={trip.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{trip.duration}</p>
                  <p className="text-sm text-gray-600">
                    Starting <span className="font-bold text-[#0B3A55]">{trip.price}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;
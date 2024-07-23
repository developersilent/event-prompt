import newZealand from "@/../public/newzeland.jpg";
import france from "@/../public/france.jpg";
import japan from "@/../public/japan.jpg";
import australia from "@/../public/australia.jpg";
import italy from "@/../public/italy.jpg";
import usa from "@/../public/usa.jpg";
import uk from "@/../public/uk.jpg";
import china from "@/../public/china.jpg";
import india from "@/../public/india.jpg";
import germany from "@/../public/germany.jpg";

interface CountryPlaces {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface CountryData {
  id: string;
  title: string;
  description: string;
  mapImage: string;
  wiki: string;
  country: CountryPlaces[];
}

export const countryInfo: CountryData[] = [
  {
    id: "1",
    title: "New Zealand",
    description:
      "New Zealand, a jewel in the South Pacific, captivates with its stunning landscapes, vibrant culture, and warm hospitality. Situated southeast of Australia, it comprises two main islands, North Island and South Island, along with numerous smaller islands, each offering its own unique charm. On the world map, New Zealand appears as a pair of emerald jewels set amidst the vast expanse of the Pacific Ocean. The North Island is characterized by geothermal wonders such as geysers and hot springs in Rotorua, lush forests and rolling green hills in Waikato, and vibrant cities like Auckland and Wellington, where cultural diversity thrives amidst bustling waterfronts and thriving arts scenes.The South Island, renowned for its dramatic landscapes, boasts the snow-capped Southern Alps cutting through the heart of the island, offering breathtaking vistas and thrilling outdoor adventures. Fiordland National Park showcases majestic fjords like Milford Sound, where sheer cliffs plunge into deep blue waters amidst lush rainforests—a testament to New Zealand's pristine natural beauty.",
    mapImage: newZealand.src as string,
    wiki: "https://en.wikipedia.org/wiki/New_Zealand",
    country: [
      {
        id: "1",
        name: "Auckland",
        description:
          "Auckland, the largest city in New Zealand, is a dynamic metropolis located on the North Island. Positioned between the Pacific Ocean and the Tasman Sea, Auckland is renowned for its stunning natural beauty, diverse cultures, and vibrant urban lifestyle.Geography and Landscape:Auckland is often referred to as the 'City of Sails' due to its harbors and numerous yachts that adorn its waters. The city is built on a narrow isthmus between two harbors, Waitematā to the east and Manukau to the west. This unique geography means Auckland boasts beautiful beaches, volcanic cones, and lush greenery. Cultural Diversity:Auckland is one of the most multicultural cities in the world, with over 200 ethnicities and a significant population of Maori and Pacific Island descent. This diversity is reflected in the city's cuisine, arts, festivals, and everyday life, creating a rich tapestry of cultures.",
        image: "/images/auckland.jpg",
      },
    ],
  },

  {
    id: "2",
    title: "France",
    description:
      "France, located in Western Europe, is renowned worldwide for its rich history, cultural heritage, art, cuisine, and fashion. It spans from the English Channel in the north to the Mediterranean Sea in the south, bordered by countries like Belgium, Luxembourg, Germany, Switzerland, Italy, Spain, and Andorra.Geography and Landscape:France boasts diverse landscapes, including the rugged Atlantic coastlines of Brittany, the picturesque vineyards of Bordeaux, the majestic Alps in the east, and the sun-kissed beaches of the French Riviera. The country is also home to scenic rivers like the Seine, Loire, and Rhône, which have played significant roles in shaping its culture and economy.History and Culture:France has a rich history dating back thousands of years, from ancient Gaul to the powerful Roman Empire and the medieval era of knights and castles. The French Revolution in 1789 marked a turning point in world history, inspiring ideals of liberty, equality, and fraternity. The country has been a global center for art and culture, with Paris as a beacon for artists, writers, philosophers, and intellectuals throughout history.",
    mapImage: france.src as string,
    wiki: "https://en.wikipedia.org/wiki/France",
    country: [
      {
        id: "2",
        name: "Paris",
        description:
          "Paris, the capital of France, is one of the most iconic and culturally rich cities in the world. Situated in the north-central part of the country, on the Seine River, Paris is renowned for its history, art, fashion, gastronomy, and architecture.History and Culture: Paris dates back to ancient times when it was a Roman settlement known as Lutetia. Over the centuries, it grew into a major center of culture, politics, and economics in Europe. The city played a pivotal role in the French Revolution of 1789 and has since been a beacon for intellectual and artistic movements.Art and Architecture: Paris is home to some of the world's most famous landmarks and museums. The Eiffel Tower, a symbol of France, offers stunning views of the cityscape. The Louvre Museum houses thousands of artworks, including the Mona Lisa and the Venus de Milo. Notre-Dame Cathedral, despite recent events, remains a masterpiece of Gothic architecture. ",
        image: "/images/paris.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Japan",
    description:
      "Japan, an archipelago in East Asia, is renowned for its blend of ancient traditions and cutting-edge technology. Its four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—along with thousands of smaller islands, form a diverse and geographically varied nation. Culture and Tradition:Japan's culture is deeply rooted in traditions that span millennia. From the elegant tea ceremony (chanoyu) to the stylized drama of kabuki theater, Japan's cultural heritage is rich and diverse. Traditional arts like ikebana (flower arranging) and calligraphy are practiced alongside modern expressions such as anime and manga, which have gained global popularity in recent years. Technology and Innovation:Japan is a global leader in technology and innovation, known for its advancements in robotics, electronics, and transportation. The country is home to major corporations like Sony, Toyota, and Nintendo, which have revolutionized industries worldwide. Japan's bullet trains (shinkansen) are a marvel of engineering, offering high-speed travel between major cities.",
    mapImage: japan.src as string,
    wiki: "https://en.wikipedia.org/wiki/Japan",
    country: [
      {
        id: "3",
        name: "Tokyo",
        description:
          "Tokyo, the vibrant capital of Japan, is a city that seamlessly blends tradition with modernity, offering a captivating blend of cultural richness and cutting-edge innovation. Cultural Hub:Tokyo serves as a cultural epicenter where traditional Japanese arts and customs thrive alongside contemporary trends. Visitors can experience the serene beauty of historic temples like Senso-ji in Asakusa, juxtaposed with the bustling energy of Shibuya Crossing, one of the world's busiest pedestrian intersections .Modern Marvels:As a global leader in technology and innovation, Tokyo boasts futuristic skyscrapers, state-of-the-art infrastructure, and advanced transportation systems. The city is known for its efficient subway network and iconic landmarks like the Tokyo Tower and the Tokyo Skytree, offering panoramic views of the sprawling metropolis.",
        image: "/images/tokyo.jpg",
      },
    ],
  },

  {
    id: "4",
    title: "Australia",
    description:
      "Australia, the world's largest island and smallest continent, is a land of diverse landscapes, unique wildlife, and vibrant cities. Located in the Southern Hemisphere, Australia is surrounded by the Indian and Pacific Oceans, with the Coral Sea and Tasman Sea to the east. The country comprises six states and two territories, each offering its own distinct attractions and natural wonders. Natural Beauty:Australia is renowned for its stunning natural beauty, from the rugged Outback to the pristine beaches of the Great Barrier Reef. The country boasts diverse landscapes, including ancient rainforests, arid deserts, and lush vineyards, providing endless opportunities for outdoor adventures and exploration. Unique Wildlife:Australia is home to a wide variety of unique wildlife, including iconic species like kangaroos, koalas, and wombats. The country's diverse ecosystems support a rich array of flora and fauna, making it a paradise for nature lovers and wildlife enthusiasts. and vibrant cities. Located in the Southern Hemisphere, Australia is surrounded by the Indian and Pacific Oceans, with the Coral Sea and Tasman Sea to the east. The country comprises six states and two territories, each offering its own distinct attractions and natural wonders.",
    mapImage: australia.src as string,
    wiki: "https://en.wikipedia.org/wiki/Australia",
    country: [
      {
        id: "4",
        name: "Sydney",
        description:
          "Sydney, the capital of New South Wales and one of Australia's largest cities, is a vibrant metropolis known for its iconic landmarks, beautiful beaches, and diverse cultural attractions. The city is situated on the east coast of Australia, overlooking the stunning Sydney Harbour, which is home to the world-famous Sydney Opera House and Sydney Harbour Bridge. Sydney's rich history, thriving arts scene, and cosmopolitan lifestyle make it a popular destination for visitors from around the world. Iconic Landmarks:Sydney is home to some of Australia's most famous landmarks, including the Sydney Opera House, a UNESCO World Heritage Site known for its distinctive sail-like design. The Sydney Harbour Bridge, affectionately known as the 'Coathanger,' offers panoramic views of the city and harbor from its summit. Bondi Beach, one of Sydney's most popular beaches, is a hub of surf culture and seaside relaxation. and vibrant cities. Located in the Southern Hemisphere, Australia is surrounded by the Indian and Pacific Oceans, with the Coral Sea and Tasman Sea to the east. The country comprises six states and two territories, each offering its own distinct attractions and natural wonders.",
        image: "/images/sydney.jpg",
      },
    ],
  },

  {
    id: "5",
    title: "Italy",
    description:
      "Italy, located in Southern Europe, is a country renowned for its rich history, art, culture, and cuisine. It is home to iconic landmarks, stunning landscapes, and vibrant cities that have captivated visitors for centuries. Italy's history dates back to ancient times when it was the center of the Roman Empire, leaving behind a legacy of architectural marvels like the Colosseum and the Pantheon. The country's artistic heritage is equally impressive, with masterpieces by Michelangelo, Leonardo da Vinci, and Botticelli adorning museums and churches throughout Italy. Italy's diverse regions offer a wealth of experiences, from the rolling hills of Tuscany and the picturesque canals of Venice to the sun-kissed beaches of the Amalfi Coast and the rugged beauty of the Italian Alps. Italy's cuisine is celebrated worldwide, with dishes like pasta, pizza, gelato, and espresso serving as culinary ambassadors for the country's culinary traditions. Italy's culture is deeply rooted in family, community, and tradition, with festivals, feasts, and rituals playing a central role in daily life.",
    mapImage: italy.src as string,
    wiki: "https://en.wikipedia.org/wiki/Italy",
    country: [
      {
        id: "5",
        name: "Rome",
        description:
          "Rome, the capital of Italy, is a city steeped in history, culture, and art. Known as the 'Eternal City,' Rome is a living museum that showcases the grandeur of ancient Rome alongside the beauty of the Renaissance and Baroque periods. The city's historic center is a UNESCO World Heritage Site, with iconic landmarks like the Colosseum, Roman Forum, and Pantheon drawing millions of visitors each year. Rome is also home to the Vatican City, an independent city-state and the spiritual center of the Roman Catholic Church. The Vatican Museums house priceless artworks, including Michelangelo's Sistine Chapel ceiling, while St. Peter's Basilica is a masterpiece of Renaissance architecture. Rome's vibrant neighborhoods, bustling piazzas, and world-class cuisine make it a must-visit destination for travelers seeking a blend of history, culture, and la dolce vita.",
        image: "/images/rome.jpg",
      },
    ],
  },

  {
    id: "6",
    title: "United States",
    description:
      "The United States of America, a vast and diverse country in North America, is known for its iconic landmarks, vibrant cities, natural wonders, and rich cultural heritage. The country spans from the Atlantic Ocean in the east to the Pacific Ocean in the west, with diverse landscapes ranging from the rugged Rocky Mountains to the sun-kissed beaches of California. The United States is a melting pot of cultures, with a rich tapestry of traditions, languages, and cuisines that reflect its cultural diversity. The country's history is marked by pivotal events like the American Revolution, the Civil War, and the Civil Rights Movement, which have shaped its identity and values. The United States is home to major cities like New York, Los Angeles, and Chicago, each offering its own unique blend of attractions, entertainment, and opportunities. The country's national parks, including Yellowstone, Grand Canyon, and Yosemite, showcase the beauty and majesty of the American landscape, providing endless opportunities for outdoor adventures and exploration.",
    mapImage: usa.src as string,
    wiki: "https://en.wikipedia.org/wiki/Usa",
    country: [
      {
        id: "6",
        name: "New York City",
        description:
          "New York City, the largest city in the United States, is a vibrant metropolis known for its iconic landmarks, diverse neighborhoods, and rich cultural heritage. Located in the state of New York, on the northeastern coast of the country, New York City is a global hub of finance, commerce, media, and the arts. The city is home to world-famous attractions like Times Square, Central Park, and the Statue of Liberty, as well as renowned cultural institutions like the Metropolitan Museum of Art, Broadway theaters, and the United Nations Headquarters. New York City's five boroughs—Manhattan, Brooklyn, Queens, the Bronx, and Staten Island—each offer a unique blend of history, culture, and entertainment, making the city a melting pot of languages, cuisines, and traditions.",
        image: "/images/new-york.jpg",
      },
    ],
  },
  {
    id: "7",
    title: "United Kingdom",
    description:
      "The United Kingdom, located off the northwest coast of mainland Europe, is an island nation renowned for its rich history, cultural heritage, and global influence. Comprising four countries—England, Scotland, Wales, and Northern Ireland—the UK offers a diverse range of landscapes, from rolling green hills and rugged coastlines to bustling cities and picturesque villages. The UK's history dates back thousands of years, with ancient sites like Stonehenge and Hadrian's Wall bearing witness to its past. The country's cultural heritage is equally impressive, with iconic landmarks like Big Ben, Buckingham Palace, and the Tower of London symbolizing its royal traditions and architectural splendor. The UK's vibrant cities, including London, Edinburgh, Cardiff, and Belfast, are hubs of culture, commerce, and creativity, offering a wealth of attractions, entertainment, and opportunities for visitors and residents alike. The UK's literary, artistic, and musical contributions have had a lasting impact on the world, with authors like Shakespeare, musicians like The Beatles, and artists like Turner leaving a legacy that continues to inspire and captivate audiences worldwide.",
    mapImage: uk.src as string,
    wiki: "https://en.wikipedia.org/wiki/United_Kingdom",
    country: [
      {
        id: "7",
        name: "London",
        description:
          "London, the capital of the United Kingdom, is a global metropolis known for its rich history, diverse culture, and iconic landmarks. Situated on the River Thames in southeastern England, London is a city that seamlessly blends tradition with modernity, offering a captivating mix of historic sites, world-class museums, and vibrant neighborhoods. London's history dates back to Roman times, with landmarks like the Tower of London, St. Paul's Cathedral, and Westminster Abbey bearing witness to its past. The city's royal heritage is on display at Buckingham Palace, the official residence of the British monarch, while the Houses of Parliament and Big Ben are symbols of British democracy and governance. London's cultural scene is equally impressive, with renowned institutions like the British Museum, Tate Modern, and West End theaters showcasing the city's artistic and creative talents.",
        image: "/images/london.jpg",
      },
    ],
  },
  {
    id: "8",
    title: "Germany",
    description:
      "Germany, located in Central Europe, is a country known for its rich history, cultural heritage, and economic prowess. It is bordered by nine countries, including France, Switzerland, Austria, the Czech Republic, Poland, and Denmark, and boasts diverse landscapes ranging from the North Sea coast to the Bavarian Alps. Germany's history is marked by significant events like the Protestant Reformation, the unification of East and West Germany, and the fall of the Berlin Wall, which have shaped its identity and values. The country is home to iconic landmarks like the Brandenburg Gate, Neuschwanstein Castle, and the Cologne Cathedral, as well as vibrant cities like Berlin, Munich, and Hamburg, each offering its own unique blend of history, culture, and innovation. Germany's cultural scene is renowned for its contributions to music, literature, philosophy, and science, with figures like Beethoven, Goethe, Nietzsche, and Einstein leaving a lasting impact on the world. The country's cuisine, beer, and festivals are celebrated worldwide, with events like Oktoberfest and Christmas markets drawing visitors from around the globe.",
    mapImage: germany.src as string,
    wiki: "https://en.wikipedia.org/wiki/Germany",
    country: [
      {
        id: "8",
        name: "Berlin",
        description:
          "Berlin, the capital of Germany, is a city that has undergone significant transformation over the past century, from the devastation of World War II to the division of East and West Berlin during the Cold War. Today, Berlin is a vibrant metropolis known for its rich history, diverse culture, and creative spirit. The city's iconic landmarks, like the Brandenburg Gate, Reichstag building, and Berlin Wall, bear witness to its past, while its thriving arts scene, world-class museums, and lively neighborhoods reflect its dynamic present. Berlin's cultural institutions, like the Berlin Philharmonic, Museum Island, and East Side Gallery, offer a wealth of experiences for visitors and residents alike, making it a hub of creativity, innovation, and diversity.",
        image: "/images/berlin.jpg",
      },
    ],
  },
  {
    id: "9",
    title: "India",
    description:
      "India, located in South Asia, is a country of diverse cultures, languages, religions, and landscapes. It is the seventh-largest country in the world by land area and the second-most populous, with over 1.3 billion people. India's rich history dates back thousands of years, with ancient civilizations like the Indus Valley and Maurya Empire leaving behind a legacy of art, architecture, and philosophy. The country's cultural heritage is equally impressive, with traditions like yoga, Ayurveda, and classical dance forms like Bharatanatyam and Kathakali thriving alongside modern innovations in technology, science, and the arts. India's diverse landscapes range from the snow-capped Himalayas in the north to the sun-kissed beaches of Goa in the south, offering a wealth of natural beauty and outdoor adventures. The country's cuisine is celebrated worldwide, with dishes like biryani, dosa, and samosas serving as culinary ambassadors for India's rich culinary traditions. India's festivals, like Diwali, Holi, and Navratri, are vibrant celebrations of color, music, and dance that showcase the country's cultural diversity and spirit of unity.",
    mapImage: india.src as string,
    wiki: "https://en.wikipedia.org/wiki/India",
    country: [
      {
        id: "9",
        name: "Mumbai",
        description:
          "Mumbai, formerly known as Bombay, is the financial and entertainment capital of India, located on the west coast of the country. The city is a vibrant metropolis known for its bustling streets, historic landmarks, and diverse culture. Mumbai is home to Bollywood, the world's largest film industry, as well as iconic landmarks like the Gateway of India, Chhatrapati Shivaji Maharaj Terminus, and Marine Drive. The city's rich history, thriving arts scene, and cosmopolitan lifestyle make it a popular destination for visitors from around the world. Mumbai's seven islands were combined to form the city we know today, with each neighborhood offering its own unique blend of history, culture, and entertainment. From the colonial architecture of South Mumbai to the vibrant markets of Crawford Market and the bustling nightlife of Bandra, Mumbai is a city of contrasts and contradictions that never fails to captivate and inspire.",
        image: "/images/mumbai.jpg",
      },
    ],
  },
  {
    id: "10",
    title: "China",
    description:
      "China, the world's most populous country, is a land of ancient traditions, modern innovations, and breathtaking landscapes. Located in East Asia, China is bordered by 14 countries, including Russia, Mongolia, India, and Vietnam, and boasts diverse landscapes ranging from the Gobi Desert in the north to the tropical beaches of Hainan Island in the south. China's history dates back thousands of years, with ancient civilizations like the Shang and Zhou dynasties leaving behind a legacy of art, philosophy, and governance. The country's cultural heritage is equally impressive, with traditions like calligraphy, martial arts, and tea ceremonies thriving alongside modern advancements in technology, science, and the arts. China's diverse regions offer a wealth of experiences, from the bustling metropolis of Shanghai and the historic capital of Beijing to the terraced rice fields of Guilin and the snow-capped peaks of Tibet. The country's cuisine, with dishes like Peking duck, dim sum, and hot pot, is celebrated worldwide, with flavors and ingredients that reflect China's rich culinary traditions. China's festivals, like Chinese New Year, Mid-Autumn Festival, and Dragon Boat Festival, are vibrant celebrations of culture, tradition, and community that showcase the country's spirit of unity and resilience.",
    mapImage: china.src as string,
    wiki: "https://en.wikipedia.org/wiki/China",
    country: [
      {
        id: "10",
        name: "Beijing",
        description:
          "Beijing, the capital of China, is a city that seamlessly blends tradition with modernity, offering a captivating mix of historic sites, world-class museums, and vibrant neighborhoods. Located in the northern part of the country, Beijing is a cultural epicenter where ancient Chinese arts and customs thrive alongside contemporary trends. Visitors can experience the serene beauty of historic sites like the Forbidden City and the Temple of Heaven, juxtaposed with the bustling energy of modern developments like the Olympic Park and the 798 Art District. Beijing's rich history, thriving arts scene, and cosmopolitan lifestyle make it a popular destination for travelers seeking a blend of culture, history, and innovation. The city's iconic landmarks, like the Great Wall, the Summer Palace, and the Ming Tombs, offer a glimpse into China's imperial past, while its modern architecture, shopping districts, and nightlife reflect its dynamic present. Beijing's cultural institutions, like the National Museum, the National Centre for the Performing Arts, and the Beijing Opera, offer a wealth of experiences for visitors and residents alike, making it a hub of creativity, innovation, and diversity.",
        image: "/images/beijing.jpg",
      },
    ],
  },
];

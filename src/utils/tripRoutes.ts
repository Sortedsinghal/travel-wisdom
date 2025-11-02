// Utility function to slugify text
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Utility function to map trip titles to their respective routes
export const getTripRoute = (tripTitle: string): string => {
  const titleToRoute: { [key: string]: string } = {
    'Jibhi & Tirthan Valley': '/jibhi-tirthan-valley',
    'Kasol Kheerganga Trek': '/kasol-kheerganga-trek',
    'Chopta-Tungnath-Deoriatal': '/chopta-tungnath-deoriatal',
    'Kanatal & Tehri Lake': '/uttarakhand-backpacking-chopta-edition',
    'Winter Spiti': '/winter-spiti',
    'Chakrata': '/chakrata-trek',
    'Tungnath Kedarnath 5D4N': '/tungnath-kedarnath-5d4n',
    'Kedarnath Dham': '/kedarnath-dham',
    'Hampta Pass Trek': '/hampta-pass-trek',
    'Meghalaya Backpacking': '/meghalaya-backpacking',
    'Himachal Backpacking - Manali Kasol': '/kasol-manali-jibhi-honeymoon-trip',
    'Leh Ladakh With Turtuk': '/leh-ladakh-with-turtuk',
    'Manali Sissu Kasol Kheerganga': '/manali-sissu-kasol-kheerganga',
    'Do Dham Yatra - Kedarnath Badrinath': '/do-dham-yatra-kedarnath-badrinath',
    'Udaipur & Kumbhalgarh': '/udaipur-kumbhalgarh',
    'Bhutan Backpacking 7D6N': '/bhutan-backpacking-7d6n',
    'Mcleodganj Triund Bir': '/mcleodganj-triund-trek',
    'Adi Kailash & Om Parvat Yatra': '/adi-kailash-om-parvat',
    'Kerala Backpacking 4N5D': '/kerala-backpacking-4n5d',
    'Meghalaya Backpacking With Kaziranga': '/meghalaya-backpacking',
    'Rajasthan Explorer - Jaipur Udaipur': '/rajasthan-explorer-jaipur-udaipur-jodhpur-jaisalmer',
    'Kuari Pass Trek': '/kuari-pass-trek',
    'Mcleodganj & Triund Trek': '/mcleodganj-triund-trek',
    'Manali Sissu': '/manali-sissu',
    'Rishikesh Chopta Tungnath': '/rishikesh-chopta-tungnath',
    'Kazakhstan Backpacking': '/kazakhstan-backpacking',
    'Vietnam Backpacking': '/vietnam-backpacking',
    'Thailand Full Moon Party': '/thailand-full-moon-party',
    'Mcleodganj & Bir': '/mcleodganj-bir',
    'Uttarakhand Backpacking- Rishikesh': '/uttarakhand-backpacking-rishikesh-auli-chopta',
    'Georgia Backpacking': '/georgia-backpacking',
    'Kashmir Backpacking': '/kashmir-backpacking',
    'NY Kashmir Backpacking': '/kashmir-backpacking-winter-edition',
    'NY Meghalaya Backpacking': '/meghalaya-backpacking',
    'NY Kasol Kheerganga Manali': '/manali-sissu-kasol-kheerganga',
    'NY Uttarakhand Backpacking': '/ny-uttarakhand-backpacking',
    'Manali Sissu Kasol': '/manali-sissu-kasol',
    'Srinagar Leh Manali With Umlingla': '/manali-leh-srinagar-backpacking-bike-trip',
    'Manali Leh Srinagar With Umlingla': '/manali-leh-srinagar',
    'SM Himachal Backpacking': '/himachal-backpacking-9d8n',
    'SM Manali Sissu Kasol': '/manali-sissu-kasol',
    'Leh Ladakh With Umlingla & Hanle': '/leh-ladakh-with-umlingla-hanle',
    'Leh 6 Nights Trip': '/leh-ladakh-with-turtuk',
    'Spiti Valley 6 Nights': '/spiti-valley-circuit-trip-from-chandigarh',
    'Goa Beach Holiday': '/goa-beach-holiday',
  };

  const route = titleToRoute[tripTitle];
  if (route) {
    return "/trip" + route;
  }
  return "/trip/" + slugify(tripTitle);
};

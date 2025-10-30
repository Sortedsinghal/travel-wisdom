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
    'Yulla Kanda Trek': '/yulla-kanda-trek',
    'Kanatal & Tehri Lake': '/kanatal-tehri-lake',
    'Winter Spiti': '/winter-spiti',
    'Chakrata': '/chakrata-trek',
    'Tungnath Kedarnath 5D4N': '/tungnath-kedarnath',
    'Kedarnath Dham': '/kedarnath-dham',
    'Hampta Pass Trek': '/hampta-pass-trek',
    'Meghalaya Backpacking': '/meghalaya-backpacking',
    'Himachal Backpacking - Manali Kasol': '/himachal-backpacking',
    'Leh Ladakh With Turtuk': '/leh-ladakh',
    'Manali Sissu Kasol Kheerganga': '/manali-sissu-kasol',
    'Do Dham Yatra - Kedarnath Badrinath': '/do-dham-yatra',
    'Udaipur & Kumbhalgarh': '/udaipur-kumbhalgarh',
    'Bhutan Backpacking 7D6N': '/bhutan',
    'Mcleodganj Triund Bir': '/mcleodganj-triund-trek',
    'Adi Kailash & Om Parvat Yatra': '/adi-kailash-om-parvat',
    'Kerala Backpacking 4N5D': '/kerala',
    'Meghalaya Backpacking With Kaziranga': '/meghalaya-backpacking',
    'Rajasthan Explorer - Jaipur Udaipur': '/rajasthan',
    'Kuari Pass Trek': '/kuari-pass-trek',
    'Mcleodganj & Triund Trek': '/mcleodganj-triund-trek',
    'Manali Sissu': '/manali-sissu',
    'Rishikesh Chopta Tungnath': '/rishikesh-chopta-tungnath',
    'Kazakhstan Backpacking': '/kazakhstan',
    'Vietnam Backpacking': '/vietnam',
    'Thailand Full Moon Party': '/thailand',
    'Mcleodganj & Bir': '/mcleodganj-bir',
    'Uttarakhand Backpacking- Rishikesh': '/uttarakhand',
    'Georgia Backpacking': '/georgia-backpacking',
    'Kashmir Backpacking': '/kashmir',
    'NY Kashmir Backpacking': '/kashmir',
    'NY Meghalaya Backpacking': '/meghalaya-backpacking',
    'NY Kasol Kheerganga Manali': '/kasol-kheerganga-trek',
    'NY Uttarakhand Backpacking': '/uttarakhand',
    'Manali Sissu Kasol': '/manali-sissu-kasol',
    'Srinagar Leh Manali With Umlingla': '/srinagar-leh-manali',
    'Manali Leh Srinagar With Umlingla': '/manali-leh-srinagar',
    'SM Himachal Backpacking': '/himachal-backpacking',
    'SM Manali Sissu Kasol': '/manali-sissu-kasol',
    'Leh Ladakh With Umlingla & Hanle': '/leh-ladakh',
    'Leh 6 Nights Trip': '/leh-ladakh',
    'Spiti Valley 6 Nights': '/spiti',
    'Goa Beach Holiday': '/goa-beach-holiday',
  };

  const route = titleToRoute[tripTitle];
  if (route) {
    return "/trip" + route;
  }
  return "/trip/" + slugify(tripTitle);
};

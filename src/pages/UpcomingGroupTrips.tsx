import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UpcomingGroupTrips = () => {
  const months = [
    'All Months',
    'September 2025',
    'October 2025',
    'November 2025',
    'December 2025',
    'January 2026',
    'February 2026',
  ];

  const categories = [
    'All Trips',
    'Short Duration Trips',
    'Long Duration Trips',
  ];

  // Helper function to extract days from duration string
  const getDays = (duration: string) => {
    const match = duration.match(/(\d+)\s*Days?/i);
    return match ? parseInt(match[1]) : 0;
  };

  // Trip data with month, category, and other details
  const trips = [
    {
      id: 1,
      month: 'October 2025',
      category: 'Short Duration Trips',
      title: 'Jibhi & Tirthan Valley',
      duration: '3 Days 2 Nights',
      price: 6500,
      originalPrice: 7500,
      discount: 1000,
      imageUrl: '/public/jibhi_tirthan.jpg',
      description: 'Experience the beauty of northern India with our group trips.',
    },
    {
      id: 2,
      month: 'October 2025',
      category: 'Short Duration Trips',
      title: 'Kasol Kheerganga Trek',
      duration: '3 Days 2 Nights',
      price: 6500,
      originalPrice: 7500,
      discount: 1000,
      imageUrl: '/public/kasol_kheerganga.jpg',
      description: 'Relax and rejuvenate with coastal and backwater adventures.',
    },
    {
      id: 3,
      month: 'October 2025',
      category: 'Short Duration Trips',
      title: 'Chopta-Tungnath-Deoriatal',
      duration: '3 Days 2 Nights',
      price: 6000,
      originalPrice: 7000,
      discount: 1000,
      imageUrl: '/public/chopta_tungnath.jpg',
      description: 'Discover the royal heritage and mountain landscapes.',
    },
    {
      id: 4,
      month: 'October 2025',
      category: 'Short Duration Trips',
      title: 'Yulla Kanda Trek',
      duration: '3 Days 2 Nights',
      price: 8000,
      originalPrice: 8000,
      discount: 0,
      imageUrl: '/public/yulla_kanda.jpg',
      description: 'A beautiful trek in the Himalayas.',
    },
    {
      id: 5,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Kanatal & Tehri Lake',
      duration: '2 Days 1 Night',
      price: 5500,
      originalPrice: 5500,
      discount: 0,
      imageUrl: '/public/kanatal_tehri.jpg',
      description: 'Scenic lake and mountain views.',
    },
    {
      id: 6,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Winter Spiti',
      duration: '7 Days 6 Nights',
      price: 18000,
      originalPrice: 20000,
      discount: 2000,
      imageUrl: '/public/winter_spiti.jpg',
      description: 'High-altitude adventures in the trans-Himalayan region.',
    },
    {
      id: 7,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Chakrata',
      duration: '2 Days 1 Night',
      price: 5500,
      originalPrice: 5500,
      discount: 0,
      imageUrl: '/public/chakrata.jpg',
      description: 'Peaceful hill station getaway.',
    },
    {
      id: 8,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Tungnath Kedarnath 5D4N',
      duration: '5 Days 4 Nights',
      price: 14000,
      originalPrice: 14000,
      discount: 0,
      imageUrl: '/public/tungnath_kedarnath.jpg',
      description: 'Spiritual trek to famous temples.',
    },
    {
      id: 9,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Kedarnath Dham',
      duration: '4 Days 3 Nights',
      price: 11000,
      originalPrice: 11000,
      discount: 0,
      imageUrl: '/public/kedarnath_dham.jpg',
      description: 'Pilgrimage to Kedarnath temple.',
    },
    {
      id: 10,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Hampta Pass Trek',
      duration: '5 Days 4 Nights',
      price: 7000,
      originalPrice: 7000,
      discount: 0,
      imageUrl: '/public/hampta_pass.jpg',
      description: 'Challenging trek with stunning views.',
    },
    {
      id: 11,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Meghalaya Backpacking',
      duration: '6 Days 5 Nights',
      price: 20500,
      originalPrice: 23000,
      discount: 2500,
      imageUrl: '/public/meghalaya_backpacking.jpg',
      description: 'Explore the natural beauty of Meghalaya.',
    },
    {
      id: 12,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Himachal Backpacking - Manali Kasol',
      duration: '5 Days 4 Nights',
      price: 12500,
      originalPrice: 14000,
      discount: 1500,
      imageUrl: '/public/himachal_backpacking.jpg',
      description: 'Backpacking adventure in Himachal Pradesh.',
    },
    {
      id: 13,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Leh Ladakh With Turtuk',
      duration: '7 Days 6 Nights',
      price: 23000,
      originalPrice: 23000,
      discount: 0,
      imageUrl: '/public/leh_ladakh_turtuk.jpg',
      description: 'Explore the stunning landscapes of Ladakh.',
    },
    {
      id: 14,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Manali Sissu Kasol Kheerganga',
      duration: '5 Days 4 Nights',
      price: 12500,
      originalPrice: 14000,
      discount: 1500,
      imageUrl: '/public/manali_sissu_kasol.jpg',
      description: 'Combination of popular treks.',
    },
    {
      id: 15,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Do Dham Yatra - Kedarnath Badrinath',
      duration: '6 Days 5 Nights',
      price: 16500,
      originalPrice: 16500,
      discount: 0,
      imageUrl: '/public/do_dham_yatra.jpg',
      description: 'Pilgrimage to Kedarnath and Badrinath.',
    },
    {
      id: 16,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Udaipur & Kumbhalgarh',
      duration: '3 Days 2 Nights',
      price: 7500,
      originalPrice: 8500,
      discount: 1000,
      imageUrl: '/public/udaipur_kumbhalgarh.jpg',
      description: 'Explore the heritage of Rajasthan.',
    },
    {
      id: 17,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Bhutan Backpacking 7D6N',
      duration: '7 Days 6 Nights',
      price: 35000,
      originalPrice: 35000,
      discount: 0,
      imageUrl: '/public/bhutan_backpacking.jpg',
      description: 'Backpacking adventure in Bhutan.',
    },
    {
      id: 18,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Mcleodganj Triund Bir',
      duration: '3 Days 2 Nights',
      price: 9999,
      originalPrice: 9999,
      discount: 0,
      imageUrl: '/public/mcleodganj_triund_bir.jpg',
      description: 'Explore the scenic beauty of Mcleodganj and Bir.',
    },
    {
      id: 19,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Adi Kailash & Om Parvat Yatra',
      duration: '7 Days 6 Nights',
      price: 29000,
      originalPrice: 29000,
      discount: 0,
      imageUrl: '/public/adi_kailash_om_parvat.jpg',
      description: 'Spiritual trek to Adi Kailash and Om Parvat.',
    },
    {
      id: 20,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Kerala Backpacking 4N5D',
      duration: '5 Days 4 Nights',
      price: 15000,
      originalPrice: 16500,
      discount: 1500,
      imageUrl: '/public/kerala_backpacking.jpg',
      description: 'Explore the backwaters and culture of Kerala.',
    },
    {
      id: 21,
      month: 'October 2025',
      category: 'Long Duration Trips',
      title: 'Meghalaya Backpacking With Kaziranga',
      duration: '7 Days 6 Nights',
      price: 25000,
      originalPrice: 27000,
      discount: 2000,
      imageUrl: '/public/meghalaya_kaziranga.jpg',
      description: 'Backpacking with wildlife exploration.',
    },
    // November 2025 trips
    {
      id: 22,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Winter Spiti',
      duration: '7 Days 6 Nights',
      price: 18000,
      originalPrice: 20000,
      discount: 2000,
      imageUrl: '/public/winter_spiti.jpg',
      description: 'High-altitude adventures in the trans-Himalayan region.',
    },
    {
      id: 23,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Kuari Pass Trek',
      duration: '6 Days 5 Nights',
      price: 8500,
      originalPrice: 10000,
      discount: 1500,
      imageUrl: '/public/kuari_pass_trek.jpg',
      description: 'Scenic trek through the Himalayas.',
    },
    {
      id: 24,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Mcleodganj & Triund Trek',
      duration: '3 Days 2 Nights',
      price: 6500,
      originalPrice: 7500,
      discount: 1000,
      imageUrl: '/public/mcleodganj_triund.jpg',
      description: 'Explore the scenic beauty of Mcleodganj and Triund.',
    },
    {
      id: 25,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Manali Sissu',
      duration: '3 Days 2 Nights',
      price: 6000,
      originalPrice: 7000,
      discount: 1000,
      imageUrl: '/public/manali_sissu.jpg',
      description: 'Peaceful hill station getaway.',
    },
    {
      id: 26,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Meghalaya Backpacking',
      duration: '5 Days 4 Nights',
      price: 20500,
      originalPrice: 23000,
      discount: 2500,
      imageUrl: '/public/meghalaya_backpacking.jpg',
      description: 'Explore the natural beauty of Meghalaya.',
    },
    {
      id: 27,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Himachal Backpacking - Manali Kasol',
      duration: '5 Days 4 Nights',
      price: 12500,
      originalPrice: 14000,
      discount: 1500,
      imageUrl: '/public/himachal_backpacking.jpg',
      description: 'Backpacking adventure in Himachal Pradesh.',
    },
    {
      id: 28,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Manali Sissu Kasol Kheerganga',
      duration: '5 Days 4 Nights',
      price: 12500,
      originalPrice: 14000,
      discount: 1500,
      imageUrl: '/public/manali_sissu_kasol.jpg',
      description: 'Combination of popular treks.',
    },
    {
      id: 29,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Bhutan Backpacking 7D6N',
      duration: '7 Days 6 Nights',
      price: 35000,
      originalPrice: 35000,
      discount: 0,
      imageUrl: '/public/bhutan_backpacking.jpg',
      description: 'Backpacking adventure in Bhutan.',
    },
    {
      id: 30,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Mcleodganj Triund Bir',
      duration: '4 Days 3 Nights',
      price: 9999,
      originalPrice: 9999,
      discount: 0,
      imageUrl: '/public/mcleodganj_triund_bir.jpg',
      description: 'Explore the scenic beauty of Mcleodganj and Bir.',
    },
    {
      id: 31,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Rishikesh Chopta Tungnath',
      duration: '4 Days 3 Nights',
      price: 10000,
      originalPrice: 15000,
      discount: 5000,
      imageUrl: '/public/rishikesh_chopta_tungnath.jpg',
      description: 'Spiritual and scenic trek in Rishikesh.',
    },
    {
      id: 32,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Kazakhstan Backpacking',
      duration: '6 Days 5 Nights',
      price: 49999,
      originalPrice: 49999,
      discount: 0,
      imageUrl: '/public/kazakhstan_backpacking.jpg',
      description: 'Backpacking adventure in Kazakhstan.',
    },
    {
      id: 33,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Vietnam Backpacking',
      duration: '8 Days 7 Nights',
      price: 59999,
      originalPrice: 59999,
      discount: 0,
      imageUrl: '/public/vietnam_backpacking.jpg',
      description: 'Explore the culture and landscapes of Vietnam.',
    },
    {
      id: 34,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Thailand Full Moon Party',
      duration: '7 Days 6 Nights',
      price: 44999,
      originalPrice: 44999,
      discount: 0,
      imageUrl: '/public/thailand_full_moon_party.jpg',
      description: 'Experience the famous full moon party in Thailand.',
    },
    {
      id: 35,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Manali Sissu Kasol',
      duration: '3 Nights 4 Days',
      price: 8000,
      originalPrice: 10000,
      discount: 2000,
      imageUrl: '/public/manali_sissu_kasol.jpg',
      description: 'Popular trekking route in Himachal Pradesh.',
    },
    {
      id: 36,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Mcleodganj & Bir',
      duration: '3 Days 2 Nights',
      price: 8000,
      originalPrice: 9000,
      discount: 1000,
      imageUrl: '/public/mcleodganj_bir.jpg',
      description: 'Explore the scenic beauty of Mcleodganj and Bir.',
    },
    {
      id: 37,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Uttarakhand Backpacking- Rishikesh',
      duration: '4 Nights 5 Days',
      price: 13500,
      originalPrice: 15000,
      discount: 1500,
      imageUrl: '/public/uttarakhand_backpacking.jpg',
      description: 'Backpacking adventure in Uttarakhand.',
    },
    {
      id: 38,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Georgia Backpacking',
      duration: '7 Days 6 Nights',
      price: 49999,
      originalPrice: 49999,
      discount: 0,
      imageUrl: '/public/georgia_backpacking.jpg',
      description: 'Backpacking adventure in Georgia.',
    },
    {
      id: 39,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Kerala Backpacking 4N5D',
      duration: '5 Days 4 Nights',
      price: 15000,
      originalPrice: 16500,
      discount: 1500,
      imageUrl: '/public/kerala_backpacking.jpg',
      description: 'Explore the backwaters and culture of Kerala.',
    },
    {
      id: 40,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Meghalaya Backpacking With Kaziranga',
      duration: '7 Days 6 Nights',
      price: 25000,
      originalPrice: 27000,
      discount: 2000,
      imageUrl: '/public/meghalaya_kaziranga.jpg',
      description: 'Backpacking with wildlife exploration.',
    },
    {
      id: 41,
      month: 'November 2025',
      category: 'Long Duration Trips',
      title: 'Rajasthan Explorer - Jaipur Udaipur',
      duration: '8 Days 7 Nights',
      price: 24000,
      originalPrice: 28000,
      discount: 4000,
      imageUrl: '/public/rajasthan_explorer.jpg',
      description: 'Explore the heritage of Rajasthan.',
    },
    // December 2025 trips (duplicates of October and November trips with new ids)
    {
      id: 42,
      month: 'December 2025',
      category: 'Short Duration Trips',
      title: 'Jibhi & Tirthan Valley',
      duration: '3 Days 2 Nights',
      price: 6500,
      originalPrice: 7500,
      discount: 1000,
      imageUrl: '/public/jibhi_tirthan.jpg',
      description: 'Experience the beauty of northern India with our group trips.',
    },
    {
      id: 43,
      month: 'December 2025',
      category: 'Short Duration Trips',
      title: 'Kasol Kheerganga Trek',
      duration: '3 Days 2 Nights',
      price: 6500,
      originalPrice: 7500,
      discount: 1000,
      imageUrl: '/public/kasol_kheerganga.jpg',
      description: 'Relax and rejuvenate with coastal and backwater adventures.',
    },
    {
      id: 44,
      month: 'December 2025',
      category: 'Short Duration Trips',
      title: 'Chopta-Tungnath-Deoriatal',
      duration: '3 Days 2 Nights',
      price: 6000,
      originalPrice: 7000,
      discount: 1000,
      imageUrl: '/public/chopta_tungnath.jpg',
      description: 'Discover the royal heritage and mountain landscapes.',
    },
    {
      id: 45,
      month: 'December 2025',
      category: 'Short Duration Trips',
      title: 'Yulla Kanda Trek',
      duration: '3 Days 2 Nights',
      price: 8000,
      originalPrice: 8000,
      discount: 0,
      imageUrl: '/public/yulla_kanda.jpg',
      description: 'A beautiful trek in the Himalayas.',
    },
    {
      id: 46,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Kanatal & Tehri Lake',
      duration: '2 Days 1 Night',
      price: 5500,
      originalPrice: 5500,
      discount: 0,
      imageUrl: '/public/kanatal_tehri.jpg',
      description: 'Scenic lake and mountain views.',
    },
    {
      id: 47,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Winter Spiti',
      duration: '7 Days 6 Nights',
      price: 18000,
      originalPrice: 20000,
      discount: 2000,
      imageUrl: '/public/winter_spiti.jpg',
      description: 'High-altitude adventures in the trans-Himalayan region.',
    },
    {
      id: 48,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Chakrata',
      duration: '2 Days 1 Night',
      price: 5500,
      originalPrice: 5500,
      discount: 0,
      imageUrl: '/public/chakrata.jpg',
      description: 'Peaceful hill station getaway.',
    },
    {
      id: 49,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Tungnath Kedarnath 5D4N',
      duration: '5 Days 4 Nights',
      price: 14000,
      originalPrice: 14000,
      discount: 0,
      imageUrl: '/public/tungnath_kedarnath.jpg',
      description: 'Spiritual trek to famous temples.',
    },
    {
      id: 50,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Kedarnath Dham',
      duration: '4 Days 3 Nights',
      price: 11000,
      originalPrice: 11000,
      discount: 0,
      imageUrl: '/public/kedarnath_dham.jpg',
      description: 'Pilgrimage to Kedarnath temple.',
    },
    {
      id: 51,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Hampta Pass Trek',
      duration: '5 Days 4 Nights',
      price: 7000,
      originalPrice: 7000,
      discount: 0,
      imageUrl: '/public/hampta_pass.jpg',
      description: 'Challenging trek with stunning views.',
    },
    {
      id: 52,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Meghalaya Backpacking',
      duration: '6 Days 5 Nights',
      price: 20500,
      originalPrice: 23000,
      discount: 2500,
      imageUrl: '/public/meghalaya_backpacking.jpg',
      description: 'Explore the natural beauty of Meghalaya.',
    },
    {
      id: 53,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Himachal Backpacking - Manali Kasol',
      duration: '5 Days 4 Nights',
      price: 12500,
      originalPrice: 14000,
      discount: 1500,
      imageUrl: '/public/himachal_backpacking.jpg',
      description: 'Backpacking adventure in Himachal Pradesh.',
    },
    {
      id: 54,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Leh Ladakh With Turtuk',
      duration: '7 Days 6 Nights',
      price: 23000,
      originalPrice: 23000,
      discount: 0,
      imageUrl: '/public/leh_ladakh_turtuk.jpg',
      description: 'Explore the stunning landscapes of Ladakh.',
    },
    {
      id: 55,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Manali Sissu Kasol Kheerganga',
      duration: '5 Days 4 Nights',
      price: 12500,
      originalPrice: 14000,
      discount: 1500,
      imageUrl: '/public/manali_sissu_kasol.jpg',
      description: 'Combination of popular treks.',
    },
    {
      id: 56,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Do Dham Yatra - Kedarnath Badrinath',
      duration: '6 Days 5 Nights',
      price: 16500,
      originalPrice: 16500,
      discount: 0,
      imageUrl: '/public/do_dham_yatra.jpg',
      description: 'Pilgrimage to Kedarnath and Badrinath.',
    },
    {
      id: 57,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Udaipur & Kumbhalgarh',
      duration: '3 Days 2 Nights',
      price: 7500,
      originalPrice: 8500,
      discount: 1000,
      imageUrl: '/public/udaipur_kumbhalgarh.jpg',
      description: 'Explore the heritage of Rajasthan.',
    },
    {
      id: 58,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Bhutan Backpacking 7D6N',
      duration: '7 Days 6 Nights',
      price: 35000,
      originalPrice: 35000,
      discount: 0,
      imageUrl: '/public/bhutan_backpacking.jpg',
      description: 'Backpacking adventure in Bhutan.',
    },
    {
      id: 59,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Mcleodganj Triund Bir',
      duration: '3 Days 2 Nights',
      price: 9999,
      originalPrice: 9999,
      discount: 0,
      imageUrl: '/public/mcleodganj_triund_bir.jpg',
      description: 'Explore the scenic beauty of Mcleodganj and Bir.',
    },
    {
      id: 60,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Adi Kailash & Om Parvat Yatra',
      duration: '7 Days 6 Nights',
      price: 29000,
      originalPrice: 29000,
      discount: 0,
      imageUrl: '/public/adi_kailash_om_parvat.jpg',
      description: 'Spiritual trek to Adi Kailash and Om Parvat.',
    },
    {
      id: 61,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Kerala Backpacking 4N5D',
      duration: '5 Days 4 Nights',
      price: 15000,
      originalPrice: 16500,
      discount: 1500,
      imageUrl: '/public/kerala_backpacking.jpg',
      description: 'Explore the backwaters and culture of Kerala.',
    },
    {
      id: 62,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Meghalaya Backpacking With Kaziranga',
      duration: '7 Days 6 Nights',
      price: 25000,
      originalPrice: 27000,
      discount: 2000,
      imageUrl: '/public/meghalaya_kaziranga.jpg',
      description: 'Backpacking with wildlife exploration.',
    },
    {
      id: 63,
      month: 'December 2025',
      category: 'Long Duration Trips',
      title: 'Rajasthan Explorer - Jaipur Udaipur',
      duration: '8 Days 7 Nights',
      price: 24000,
      originalPrice: 28000,
      discount: 4000,
      imageUrl: '/public/rajasthan_explorer.jpg',
      description: 'Explore the heritage of Rajasthan.',
    },
  ];
  const [selectedMonth, setSelectedMonth] = useState('All Months');
  const [selectedCategory, setSelectedCategory] = useState('All Trips');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const month = searchParams.get('month');
    if (month && months.includes(month)) {
      setSelectedMonth(month);
    }
  }, [searchParams, months]);

  // Filter trips based on selected month and category
  const filteredTrips = trips.filter((trip) => {
    const monthMatch = selectedMonth === 'All Months' || trip.month === selectedMonth;
    let categoryMatch = false;
    if (selectedCategory === 'All Trips') {
      categoryMatch = true;
    } else if (selectedCategory === 'Short Duration Trips') {
      categoryMatch = getDays(trip.duration) <= 4;
    } else if (selectedCategory === 'Long Duration Trips') {
      categoryMatch = getDays(trip.duration) > 4;
    }
    return monthMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Group Trips For You</h1>
          </div>

          {/* Month capsules */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-full border ${
                  selectedMonth === month ? 'bg-[#0B3A55] text-white border-[#0B3A55]' : 'border-gray-400 text-gray-800'
                } transition-colors`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Category capsules */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === category ? 'bg-[#0B3A55] text-white border-[#0B3A55]' : 'border-gray-400 text-gray-800'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Trip cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTrips.map((trip) => (
              <Card key={trip.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={trip.imageUrl} alt={trip.title} className="w-full h-48 object-cover rounded-t-md" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Discount: ₹{trip.discount} Off
                  </div>
                  <div className="absolute bottom-2 left-2 bg-yellow-300 text-black text-xs px-2 py-1 rounded">
                    {trip.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{trip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="line-through text-gray-400">₹{trip.originalPrice}</span>
                    <span className="font-bold text-lg">₹{trip.price} per person</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 border border-black text-[#0B3A55] rounded px-3 py-1 hover:bg-[#0B3A55] hover:text-white transition-colors">
                      Trip Details
                    </button>
                    <button className="flex-1 border border-black bg-[#0B3A55] text-white rounded px-3 py-1 hover:bg-white hover:text-[#0B3A55] transition-colors">
                      Send Query
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Interested in joining a trip? Contact us to reserve your spot!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpcomingGroupTrips;

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-3">
        <div className="container mt-3 pt-3 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0B3A55] mb-4">Cancellation & Refund Policy</h1>
            <div className="w-24 h-1 bg-[#0B3A55] mx-auto"></div>
          </div>
          
          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">Booking Amount is Non-Refundable.</h2>
            
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">For Short Duration/Weekend Trips (Trips less than 3 Days)</h2>
            <p className="mb-6 text-base font-medium text-gray-700 leading-relaxed">
              The refund of the trip amount paid will be processed as per the deduction guidelines given below:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Cancellations up to 60 days before departure date - 0% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Between 59 days to 45 days before departure - 50% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Between 45 days to 25 days before departure - 70% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Between 24 days to 7 days before departure - 80% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Less than 7 days before departure - no refund</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">For Long Duration Trips (Trips more than 3 Days)</h2>
            <p className="mb-6 text-base font-medium text-gray-700 leading-relaxed">
              The refund of the total trip amount paid will be processed as per the deduction guidelines outlined below:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Cancellations up to 75 days before departure date - 0% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Between 75 days to 45 days before departure - 50% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Between 45 days to 15 days before departure - 75% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Less than 15 days of departure - no refund</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">For International Trips (Trips more than 3 Days)</h2>
            <p className="mb-6 text-base font-medium text-gray-700 leading-relaxed">
              The refund of the total trip amount paid will be processed as per the deduction guidelines outlined below:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Cancellations up to 75 days before departure date - 0% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Between 75 days to 45 days before departure - 50% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Between 45 days to 30 days before departure - 75% deduction</li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">• Less than 30 days of departure - no refund</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">Rules Applicable for Change/Cancellation of Booking by the Participant</h2>
            <ol className="space-y-4">
              <li className="text-base font-normal text-gray-700 leading-relaxed">
                <span className="font-semibold">1. Process -</span> Mail your cancellation/change request on info@travelwisdom.in. No cancellations will be taken over phone calls or WhatsApp messages. We request you to reply to the booking confirmation email that you have received at the time of trip booking. Also, please note that the booking amount for all packages/trips is non-refundable.
              </li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">
                <span className="font-semibold">2. Replacement of Participant(s) -</span> Our community and guidelines allows you to seamlessly replace any of an individual in your bookings. Please pay attention that this feature is applicable only when the status of your booking is "Paid" and there should be at least 7 days remaining prior to the departure date. Please note that the replacement would not be applicable on any Volvo/Train/Flight transport booked for that particular participant. The same would be automatically cancelled and the same will be followed by. This is simply done because the seats booked in such transport mediums are not transferable or refundable.
              </li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">
                <span className="font-semibold">3. Mode of Refund -</span> Once your cancellation request gets confirmed, you will get a credit note via mail in the next 2 working days.
              </li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">
                <span className="font-semibold">4. Payment Gateway Charge -</span> All the reimbursements/refunds will incur a Payment Gateway charge of 2.5% & GST of 5% respectively. The Payment Gateway charges will not be levied on the customers who have made their transactions via UPI.
              </li>
            </ol>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">Rules Applicable for Changes/Cancellation of Booking by Travel Wisdom</h2>
            <p className="mb-6 text-base font-normal text-gray-700 leading-relaxed">
              Travel Wisdom reserves the right to cancel your booking or change any of the facilities, services or prices described in our brochures or website. We will endeavor to advise you of any changes known at the time of booking. We plan the arrangements for your trips many months in advance and may occasionally have to make minor changes. Transport timings and carriers shown or communicated on our website are for guidance only and are subject to change. We will send you the final itinerary closer to the departure dates (2-3 days prior) along with the tickets (wherever applicable). However in the field of adventure activities, there are many variables beyond our control like weather conditions, landslides, road situations and any other force majeure conditions. Circumstances amounting to "force majeure" include any event which we or the supplier of the service(s) in question could not even with all due care, foresee or forestall such as (by way of example and not by way of limitation) war, threat of war, riots, civil disturbances, industrial disputes, actual or threatened terrorist activity and its consequences, natural or nuclear disasters, fire, epidemics, health risks and pandemics, acts of God, unavoidable and unforeseeable technical problems with transport for reasons beyond our control or that of our suppliers, closed or congested airports or ports, hurricanes and other actual or potential adverse weather conditions, and any other similar events. In such situations we might be forced to change the trip itinerary or even cancel the trip before its commencement. In case of a change/cancellation of the trip, following rules will be applicable:
            </p>
            <ul className="space-y-3">
              <li className="text-base font-normal text-gray-700 leading-relaxed">
                • If a trip you booked with us is called off at the last moment due to unavoidable government orders and natural calamity/unforeseen circumstances (like rain alerts, snowfall, earthquake, landslides, strike, protests etc.), Travel Wisdom (firstly if possible) will provide an alternate trip option departing either on the same date or different but no refunds are provided.
              </li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">
                • We will proceed ahead to issue a travel voucher in the form of Credit Shell for the full/booking amount that can be redeemed upto same amount for the same trip or another trip in the next 1 year from the trip departure date. Please note that no cash refund would be provided.
              </li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">
                • If a trip cannot be completed due to natural calamity/unforeseen circumstances, no refund would be initiated since all the service provider(s) on your trip are paid in advance before the commencement of your trip.
              </li>
              <li className="text-base font-normal text-gray-700 leading-relaxed">
                • Any extra expense coming due to any above stated natural calamity/unforeseen circumstances, will be borne by the customer. Travel Wisdom will not be liable.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">In case of Changes/Cancellation of the Trip after Departure</h2>
            <p className="mb-6 text-base font-normal text-gray-700 leading-relaxed">
              When the change or cancellation arises from situations amounting to "force majeure" or for another reason beyond our control, Travel Wisdom shall not be responsible to refund the amount already deposited earlier.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">Unused Services</h2>
            <p className="mb-6 text-base font-normal text-gray-700 leading-relaxed">
              There will be no discounts or money refunded for missed or unused services, this includes voluntary or involuntary termination/departure from tour, i.e. sickness, death of a family member etc, late arrival on the tour, or premature departure either voluntarily or involuntarily.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">When the Changes/Cancellation arising otherwise</h2>
            <p className="mb-6 text-base font-normal text-gray-700 leading-relaxed">
              We will, wherever possible, make suitable alternative arrangements. If we are unable to make such alternative arrangements, we will proceed ahead to issue a travel voucher in the form of Credit Shell. If you reject/deny the same for any reason then no refund or credit shell will be issued.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 pt-6 font-bold text-2xl text-[#0B3A55] border-b-2 border-[#0B3A55] pb-2">In case of drop out by the Participant in between the Trip</h2>
            <p className="mb-6 text-base font-normal text-gray-700 leading-relaxed">
              We shall not be responsible to make any refund in such a situation. The participant would also have to pay additionally for unplanned expenses on planning and executing the retreat of the participant on actual basis. In case suitable arrangements for retreat are not possible, Travel Wisdom reserves the right to deny such drop out in between the event. And the decision will be final for the participants. Travel Wisdom has a hold on it.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-base font-normal text-gray-700 leading-relaxed">
              Travel Wisdom reserves the right to refuse any requests (including and not limited to cancellation) to anyone who does not adhere to community ethics, falsifies communication, uses abusive behavior with our team and threatens to use or has used communication (including but not limited social media / public review platforms) to defame or undermine our community. At any given point of time you try to use influence, give threats or use foul language we will not be responding to any communication. We will respond to you better if you talk to us politely, we work like a community.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CancellationRefundPolicy;
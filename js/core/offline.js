define("core/offline", function () {
    'use strict';

    /**
     * List of cities in key and name form
     * @type {Object}
     */
    var cityList = 'Bangalore (BLR)|Chennai (MAA)|Goa (GOI)|Hyderabad (HYD)|Kolkata (CCU)|Mumbai (BOM)|New Delhi (DEL)|Pune (PNQ)|Agartala (IXA)|Agatti Island (AGX)|Agra (AGR)|Ahmedabad (AMD)|Aizwal (AJL)|Allahabad (IXD)|Amritsar (ATQ)|Aurangabad (IXU)|Bagdogra (IXB)|Bangalore (BLR)|Belgaum (IXG)|Bellary (BEP)|Bengaluru (BLR)|Bhavnagar (BHU)|Bhopal (BHO)|Bhubaneshwar (BBI)|Bhuj (BHJ)|Bikaner (BKB)|Calicut (CCJ)|Chandigarh (IXC)|Chennai (MAA)|Cochin (COK)|Coimbatore (CJB)|Dehradun (DED)|Delhi (DEL)|Dharamshala (DHM)|Dibrugarh (DIB)|Dimapur (DMU)|Diu (DIU)|Gaya (GAY)|Goa (GOI)|Gorakhpur (GOP)|Guwahati (GAU)|Gwalior (GWL)|Hubli (HBX)|Hyderabad (HYD)|Imphal (IMF)|Indore (IDR)|Jabalpur (JLR)|Jagdalpur (JGB)|Jaipur (JAI)|Jammu (IXJ)|Jamnagar (JGA)|Jamshedpur (IXW)|Jodhpur (JDH)|Jorhat (JRH)|Kandla (IXY)|Kanpur (KNU)|Khajuraho (HJR)|Kochi (COK)|Kolhapur (KLH)|Kolkata (CCU)|Kozhikode (CCJ)|Kulu (KUU)|Latur (LTU)|Leh (IXL)|Lilabari (IXI)|Lucknow (LKO)|Ludhiana (LUH)|Madurai (IXM)|Mangalore (IXE)|Mumbai (BOM)|Mysore (MYQ)|Nagpur (NAG)|Nanded (NDC)|Nasik (ISK)|New Delhi (DEL)|Pantnagar (PGH)|Pathankot (IXP)|Patna (PAT)|Pondicherry (PNY)|Porbandar (PBD)|Port Blair (IXZ)|Pune (PNQ)|Raipur (RPR)|Rajahmundry (RJA)|Rajkot (RAJ)|Ranchi (IXR)|Salem (SXV)|Shillong (SHL)|Shimla (SLV)|Sholapur (SSE)|Silchar (IXS)|Srinagar (SXR)|Surat (STV)|Tezpur (TEZ)|Thiruvananthapuram (TRV)|Tiruchirapally (TRZ)|Tirupati (TIR)|Trichy (TRZ)|Trivandrum (TRV)|Tuticorin (TCR)|Udaipur (UDR)|Vadodara (BDQ)|Varanasi (VNS)|VidyaNagar (VDY)|Vijayawada (VGA)|Vishakhapatnam (VTZ)';
    cityList = cityList.split('|').map(function (city, key) {
        return {
            id: key,
            name: city
        };
    });

    /**
     * Returns random integers between a given range
     * @param  {Number} min minimum random no to return
     * @param  {Number} max maximum random no to return
     * @return {Number}
     */
    var getRandomBetweenRange = function (min, max) {
        return ~~ (min + Math.random() * (max - min + 1));
    };

    var flightCodes = 'FUD|WTF|WAT|LOL'.split('|');
    /**
     * Returns randomly generated flight names
     * @return {String}
     */
    var getRandomFlight = function () {
        return flightCodes[~~(Math.random() * flightCodes.length)] + '-' + getRandomBetweenRange(10, 300);
    };

    /**
     * Returns random flights from a set of data
     * @param  {Object} data
     * @return {Array}  List of generated cities
     */
    var getFlights = function (data) {

        var flights = [], tmp, out;

        for (var i = 0; i < 30; i++) {

            flights.push(out = {
                id: _.uniqueId(),
                price: getRandomBetweenRange(10, 99) * 100 * data.numPassengers,
                currency: '₹',
                departureCity: data.depart.name,
                arrivalCity: data.arrive.name,
                goingWay: {
                    flight: getRandomFlight(),
                    departure: tmp = data.departDate.clone().add('m', getRandomBetweenRange(0, 60 * 24)),
                    arrival: tmp.clone().add('m', getRandomBetweenRange(0, 60 * 3))
                }
            });

            if (data.returnDate) {
                out.returnWay = {
                    flight: getRandomFlight(),
                    departure: tmp = data.returnDate.clone().add('m', getRandomBetweenRange(0, 60 * 24)),
                    arrival: tmp.clone().add('m', getRandomBetweenRange(0, 60 * 3))
                };
            }

        }

        return flights;
    };

    return {
        cityList: cityList,
        getFlights: getFlights
    };

});
define("models/CitySearch", function () {
    'use strict';

    var offlineCityList = 'Bangalore (BLR)|Chennai (MAA)|Goa (GOI)|Hyderabad (HYD)|Kolkata (CCU)|Mumbai (BOM)|New Delhi (DEL)|Pune (PNQ)|Agartala (IXA)|Agatti Island (AGX)|Agra (AGR)|Ahmedabad (AMD)|Aizwal (AJL)|Allahabad (IXD)|Amritsar (ATQ)|Aurangabad (IXU)|Bagdogra (IXB)|Bangalore (BLR)|Belgaum (IXG)|Bellary (BEP)|Bengaluru (BLR)|Bhavnagar (BHU)|Bhopal (BHO)|Bhubaneshwar (BBI)|Bhuj (BHJ)|Bikaner (BKB)|Calicut (CCJ)|Chandigarh (IXC)|Chennai (MAA)|Cochin (COK)|Coimbatore (CJB)|Dehradun (DED)|Delhi (DEL)|Dharamshala (DHM)|Dibrugarh (DIB)|Dimapur (DMU)|Diu (DIU)|Gaya (GAY)|Goa (GOI)|Gorakhpur (GOP)|Guwahati (GAU)|Gwalior (GWL)|Hubli (HBX)|Hyderabad (HYD)|Imphal (IMF)|Indore (IDR)|Jabalpur (JLR)|Jagdalpur (JGB)|Jaipur (JAI)|Jammu (IXJ)|Jamnagar (JGA)|Jamshedpur (IXW)|Jodhpur (JDH)|Jorhat (JRH)|Kandla (IXY)|Kanpur (KNU)|Khajuraho (HJR)|Kochi (COK)|Kolhapur (KLH)|Kolkata (CCU)|Kozhikode (CCJ)|Kulu (KUU)|Latur (LTU)|Leh (IXL)|Lilabari (IXI)|Lucknow (LKO)|Ludhiana (LUH)|Madurai (IXM)|Mangalore (IXE)|Mumbai (BOM)|Mysore (MYQ)|Nagpur (NAG)|Nanded (NDC)|Nasik (ISK)|New Delhi (DEL)|Pantnagar (PGH)|Pathankot (IXP)|Patna (PAT)|Pondicherry (PNY)|Porbandar (PBD)|Port Blair (IXZ)|Pune (PNQ)|Raipur (RPR)|Rajahmundry (RJA)|Rajkot (RAJ)|Ranchi (IXR)|Salem (SXV)|Shillong (SHL)|Shimla (SLV)|Sholapur (SSE)|Silchar (IXS)|Srinagar (SXR)|Surat (STV)|Tezpur (TEZ)|Thiruvananthapuram (TRV)|Tiruchirapally (TRZ)|Tirupati (TIR)|Trichy (TRZ)|Trivandrum (TRV)|Tuticorin (TCR)|Udaipur (UDR)|Vadodara (BDQ)|Varanasi (VNS)|VidyaNagar (VDY)|Vijayawada (VGA)|Vishakhapatnam (VTZ)';
    offlineCityList = offlineCityList.split('|').map(function (city, key) {
        return {
            id: key,
            name: city
        }
    });

    return Backbone.Model.extend({
        fetch: function (value, callback) {
            value = value.toLowerCase();

            if (value.length < 1) {
                return;
            }

            callback.call(this, _.filter(offlineCityList, function (city) {
                return city.name.toLowerCase().search(value) !== -1;
            }).slice(0, 5));
        }
    });

});
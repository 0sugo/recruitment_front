import React, { useState } from 'react';

const Options = () => {
  const [homeCounty, setHomeCounty] = useState('');
  const [subCounty, setSubCounty] = useState('');

  const counties = [
    'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu', 'Garissa', 'Homa Bay',
    'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi', 'Kirinyaga', 'Kisii',
    'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 'Machakos', 'Makueni', 'Mandera', 'Marsabit',
    'Meru', 'Migori', 'Mombasa', 'Murang\'a', 'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira',
    'Nyandarua', 'Nyeri', 'Samburu', 'Siaya', 'Taita-Taveta', 'Tana River', 'Tharaka-Nithi',
    'Trans Nzoia', 'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot'
  ];

  const subCountiesMap = {
    Nairobi: ['subcountya', 'subcountyb', 'subcountyc'],
    Baringo: ['subcounty X', 'subcountyY', 'subcountyZ'],
    Turkana: ['wewe','mimi','sisi']

  };

  const handleHomeCountyChange = (e) => {
    const selectedHomeCounty = e.target.value;
    setHomeCounty(selectedHomeCounty);
    setSubCounty('');
  };

  return (
    <div>
      <div className="w-full lg:w-4/12 px-6">
        <div className="w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="HomeCounty">
            Home county
          </label>
          <select
            id="HomeCounty" name="homeCounty"
            value={homeCounty}
            onChange={handleHomeCountyChange}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          >
            <option value="">Select Home county</option>
            {counties.map((county) => (
              <option key={county} value={county}>{county}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full lg:w-4/12 px-6">
        <div className="w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="SubCounty">
            Sub-County
          </label>
          <select
            id="SubCounty" name="subCounty"
            value={subCounty}
            onChange={(e) => setSubCounty(e.target.value)}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          >
            <option value="">Select Sub-county</option>
            {subCountiesMap[homeCounty] &&
              subCountiesMap[homeCounty].map((subCountyOption) => (
                <option key={subCountyOption} value={subCountyOption}>{subCountyOption}</option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Options;

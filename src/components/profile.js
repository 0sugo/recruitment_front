import React, { useEffect, useState } from 'react';
import Tabular from './Tabular';
import { useDispatch } from 'react-redux';
import { postPersonalDetails } from '../redux/Profile/profileSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const [homeCounty, setHomeCounty] = useState('');
  const [subCounty, setSubCounty] = useState('');
  const userId = localStorage.getItem('userId');

  const counties = [
    'Baringo', 'Bomet', 'Bungoma', 'Busia', 'ElgeyoMarakwet', 'Embu', 'Garissa', 'HomaBay',
    'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi', 'Kirinyaga', 'Kisii',
    'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 'Machakos', 'Makueni', 'Mandera', 'Marsabit',
    'Meru', 'Migori', 'Mombasa', 'Murang\'a', 'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira',
    'Nyandarua', 'Nyeri', 'Samburu', 'Siaya', 'TaitaTaveta', 'TanaRiver', 'TharakaNithi',
    'TransNzoia', 'Turkana', 'UasinGishu', 'Vihiga', 'Wajir', 'WestPokot'
  ];

  const subCountiesMap = {
    Baringo: ['Baringo Central', 'Tiaty', 'Mogotio', 'Eldama Ravine', 'Baringo South', ' Baringo North'],
    Bomet: ['Bomet Central', ' Bomet East', 'Chepalungu', 'Sotik'],
    Bungoma: ['Bumula', 'Kabuchai', 'Kanduyi', 'Kimilil', 'Mt Elgon', 'Sirisia', 'Tongaren', 'Webuye East', 'Webuye West'],
    Busia: ['Budalangi', 'Butula', 'Funyula', 'Nambele', 'Teso North', 'Teso South'],
    Embu: ['Manyatta', ' Mbeere North', 'Mbeere South', 'Runyenjes'],
    Garissa: ['Daadab', 'Fafi', 'Garissa', 'Township', 'Hulugho', 'Ijara', 'Lagdera', 'Balambala'],
    HomaBay: ['Homabay Town', 'Kabondo', 'Karachwonyo', 'Kasipul', 'Mbita', 'Ndhiwa', 'Rangwe', 'Suba'],
    Isiolo: ['Isiolo', 'Merti', 'Garbatulla'],
    Kajiado: ['Isinya', 'Kajiado Central', 'Kajiado North', 'Loitokitok', 'Mashuuru'],
    Kakamega: ['Butere', 'Kakamega Central', 'Kakamega East', 'Kakamega North', 'Kakamega South', 'Khwisero', 'Lugari', 'Lukuyani', 'Lurambi', 'Matete', 'Mumias', 'Mutungu', 'Navakholo'],
    Kericho: ['Ainamoi', 'Belgut', 'Bureti', 'Kipkelion East', 'Kipkelion West', 'Soin/Sigowet'],
    Kiambu: ['Gatundu North', 'Gatundu South', 'Githunguri', 'Juja', 'Kabete', 'Kiambaa', 'Kiambu', 'Kikuyu', 'Limuru', 'Ruiru', 'Thika Town', 'Lari'],
    Kilifi: ['Ganze', 'Kaloleni', 'Kilifi North', 'Kilifi South', 'Magarini', 'Malindi', 'Rabai'],
    Kirinyaga: ['Kirinyaga Central', 'Kirinyaga East', 'Kirinyaga West', 'Mwea East', 'Mwea West'],
    Kisii: ['Kitutu Chache North', 'Bonchari', 'South Mugirango', 'Bobasi', 'Bomachoge Borabu', 'Bomachoge Chache', 'Nyaribari Chache', 'Nyaribari Masaba', 'Kitutu Chache South'],
    Kisumu: ['Kisumu Central', 'Kisumu East', 'Muhoroni', 'Nyakach', 'Nyando', 'Seme'],
    Kitui: ['Kitui West', 'Kitui Central', 'Kitui Rural', 'Kitui South', 'Kitui East', 'Mwingi North', 'Mwingi West', 'Mwingi Central'],
    Kwale: ['Kinango', 'Lunga Lunga', 'Msambweni', 'Matuga'],
    Laikipia: ['Laikipia Central', 'Laikipia East', 'Laikipia North', 'Laikipia West', 'Nyahururu'],
    Lamu: ['Lamu East', 'Lamu West'],
    Machakos: ['Kathiani', 'Machakos Town', 'Masinga', 'Matungulu', 'Mavoko', 'Mwala', 'Yatta'],
    Makueni: ['Kaiti', 'Kibwezi West', 'Kibwezi East', 'Kilome', 'Makueni', 'Mbooni'],
    Mandera: ['Banissa', 'Lafey', 'Mandera East', 'Mandera North', 'Mandera South', 'Mandera West'],
    Marsabit: ['Laisamis', 'Moyale', 'North Hor', 'Saku'],
    Meru: ['Buuri', 'Igembe Central', 'Igembe North', 'Igembe South', 'Imenti Central', 'Imenti North', 'Imenti South', 'Tigania East', 'Tigania West'],
    Migori: ['Awendo', 'Kuria East', 'Kuria West', 'Mabera', 'Ntimaru', 'Rongo', 'Suna East', 'Suna West', 'Uriri'],
    Mombasa: ['Changamwe', 'Jomvu', 'Kisauni', 'Likoni', 'Mvita', 'Nyali'],
    Muranga: ['Gatanga', 'Kahuro', 'Kandara', 'Kangema', 'Kigumo', 'Kiharu', 'Mathioya', 'Murang’a South'],
    Nairobi: ['Dagoretti North', 'Dagoretti South', 'Embakasi Central', 'Embakasi East', 'Embakasi North', 'Embakasi South', 'Embakasi West', 'Kamukunji', 'Kasarani', 'Kibra', 'Lang’ata', 'Makadara', 'Mathare', 'Roysambu', 'Ruaraka', 'Starehe', 'Westlands'],
    Nakuru: ['Bahati', 'Gilgil', 'Kuresoi North', 'Kuresoi South', 'Molo', 'Naivasha', 'Nakuru Town East', 'Nakuru Town West', 'Njoro', 'Rongai', 'Subukia'],
    Nandi: ['Aldai', 'Chesumei', 'Emgwen', 'Mosop', 'Nandi Hills', 'Tindiret'],
    Narok: ['Narok East', 'Narok North', 'Narok South', 'Narok West', 'Transmara East', 'Transmara West'],
    Nyamira: ['Borabu', 'Manga', 'Masaba North', 'Nyamira North', 'Nyamira South'],
    Nyandarua: ['Kinangop', 'Kipipiri', 'Ndaragwa', 'Ol-Kalou', 'Ol Joro Orok'],
    Nyeri: ['Kieni East', 'Kieni West', 'Mathira East', 'Mathira West', 'Mukurweini', 'Nyeri Town', 'Othaya', 'Tetu'],
    Samburu: ['Samburu East', 'Samburu North', 'Samburu West'],
    Siaya: ['Alego Usonga', 'Bondo', 'Gem', 'Rarieda', 'Ugenya', 'Unguja'],
    Vihiga: ['Emuhaya', 'Hamisi', 'Luanda', 'Sabatia', 'Vihiga'],
    Wajir: ['Eldas', 'Tarbaj', 'Wajir East', 'Wajir North', 'Wajir South', 'Wajir West'],
    ElgeyoMarakwet: ['Keiyo North', 'Keiyo South', 'Marakwet East', 'Marakwet West'],
    TanaRiver: ['Bura', 'Galole', 'Garsen'],
    TaitaTaveta: ['Mwatate', 'Taveta', 'Voi', 'Wundanyi'],
    TharakaNithi: ['Tharaka North', 'Tharaka South', 'Chuka', 'Igambango’mbe', 'Maara', 'Chiakariga and Muthambi'],
    TransNzoia: ['Cherangany', 'Endebess', 'Kiminini', 'Kwanza', 'Saboti'],
    Turkana: ['Loima', 'Turkana Central', 'Turkana East', 'Turkana North', 'Turkana South'],
    UasinGishu: ['Ainabkoi', 'Kapseret', 'Kesses', 'Moiben', 'Soy', 'Turbo'],
    WestPokot: ['Baringo Central', 'Tiaty', 'Mogotio', 'Eldama Ravine', 'Baringo South', 'Baringo North'],

  };

const handleHomeCountyChange = (e) => {
  const selectedHomeCounty = e.target.value;
  setHomeCounty(selectedHomeCounty);
  setSubCounty('');
};

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const personalDetails = {
    id_no: formData.get('idNo'),
    emailAddress: formData.get('emailAddress'),
    name: formData.get('name'),
    gender: formData.get('gender'),
    ethnicity: formData.get('selectethnicity'),
    salutation: formData.get('salutation'),
    date_of_birth: formData.get('birthDate'),
    pwd_status: formData.get('disabilityStatus'),
    county: formData.get('homeCounty'),
    constituency: formData.get('homeConstituency'),
    sub_county: formData.get('subCounty'),
    ward: formData.get('homeWard'),
    institution_category: formData.get('currentPublic'),
    public_institution: formData.get('publicInstitution'),
    station: formData.get('station'),
    employment_number: formData.get('employmentNumber'),
    postal_address: formData.get('postalAddress'),
    postal_code: formData.get('postalCode'),
    postal_town: formData.get('town'),
    present_designation: formData.get('presentPost'),
    current_appointment_date: formData.get('currentAppointmentDate'),
    previous_effective_date: formData.get('previousAppointmentDate'),
    previous_designation: formData.get('previousDesignation'),
    job_group: formData.get('jobGroup'),
    terms_of_service: formData.get('termsOfService'),
  };



  if (userId) {
    dispatch(postPersonalDetails(personalDetails, userId));

}


};


return (
  <div className='mt-8'>
    <Tabular />

    <h2 className='uppercase'>Personal details of applicant</h2>

    <section className="py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                SECTION ONE: Personal Details
              </h6>
              <div class="flex flex-wrap">

                {/* id no */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      ID No:
                    </label>
                    <input type="text" name='idNo' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/* email */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Email address
                    </label>
                    <input type="email" name='emailAddress' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/* name */}

                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Name (Surname,First,Other)
                    </label>
                    <input type="text" name='name' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/* gender */}
                <div class="w-full lg:w-4/12 px-6">
                  <div className="w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="gender">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name='gender'
                      className="border-0 px-3 py-3  placeholder-blue-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                      <option value="" >Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                </div>

                {/* SALUTATION */}

                <div class="w-full lg:w-4/12 px-6">
                  <div className="w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="salutation">
                      Salutation
                    </label>
                    <select
                      id="salutation"
                      name='salutation'
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Select Salutation</option>
                      <option value="mr">Mr.</option>
                      <option value="ms">Ms.</option>
                      <option value="mrs">Mrs.</option>
                    </select>
                  </div>
                </div>

                {/* DOB */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="birthDate">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name='birthDate'
                      required
                      id="birthDate"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* ethnicity */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="ethnicity">
                      Ethnicity
                    </label>
                    <select name="selectethnicity" id="selectethnicity" class="form-control" className='border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                      <option value="3333">Select Ethnicity</option>
                      <option value="38">Ajuran</option>
                      <option value="1">Bajun</option>
                      <option value="21">Basuba</option>
                      <option value="15">Boni-Sanye</option>
                      <option value="31">Borana</option>
                      <option value="36">Burji</option>
                      <option value="37">Dasnach-Shangil</option>
                      <option value="43">Degodia</option>
                      <option value="26">Dorobo</option>
                      <option value="30">Elmolo</option>
                      <option value="2">Embu</option>
                      <option value="32">Gabra</option>
                      <option value="54">Galjeel</option>
                      <option value="52">Galla</option>
                      <option value="39">Gosha</option>
                      <option value="40">Gureeh</option>
                      <option value="41">Hawiyah</option>
                      <option value="51">Ilchamus</option>
                      <option value="55">Isaak</option>
                      <option value="23">Kalenjin</option>
                      <option value="3">Kamba</option>
                      <option value="49">Kenya Arab</option>
                      <option value="47">Kenyan Asian</option>
                      <option value="48">Kenyan European</option>
                      <option value="44">Kenyan Somali</option>
                      <option value="4">Kikuyu</option>
                      <option value="11">Kisii</option>
                      <option value="13">Kuria</option>
                      <option value="56">Leysan</option>
                      <option value="14">Luhya</option>
                      <option value="22">Luo</option>
                      <option value="25">Masai</option>
                      <option value="5">Mbere</option>
                      <option value="6">Meru</option>
                      <option value="16">Miji Kenda</option>
                      <option value="45">Murulle</option>
                      <option value="27">Njemps</option>
                      <option value="50">Nubi</option>
                      <option value="42">Ogaden</option>
                      <option value="33">Orma</option>
                      <option value="46">Other Kenyan</option>
                      <option value="17">Pokomo</option>
                      <option value="12">Pokot</option>
                      <option value="34">Rendille</option>
                      <option value="35">Sakuye</option>
                      <option value="28">Samburu</option>
                      <option value="18">Swahili-Shirazi</option>
                      <option value="19">Taita</option>
                      <option value="20">Taveta</option>
                      <option value="24">Teso</option>
                      <option value="7">Tharaka</option>
                      <option value="29">Turkana</option>
                      <option value="53">Waat</option>
                      <option value="57">Wardei</option>

                    </select>
                  </div>
                </div>

                {/* pwd status */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                      Disability Status
                    </label>
                    <select
                      id="disabilityStatus" name="disabilityStatus" class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Select Disability Status</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>



                {/* <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                        Home county
                      </label>
                      <select
                        id="HomeCounty" name="homeCounty" class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Select Home county</option>
                        <option value="yes">1</option>
                        <option value="no">2</option>
                      </select>
                    </div>
                  </div>



                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                        Sub-County
                      </label>
                      <select
                        id="disabilityStatus" name='subCounty'
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Select Sub-county</option>
                        <option value="yes">1</option>
                        <option value="no">2</option>
                      </select>
                    </div>
                  </div> */}

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


                {/* constituency */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                      Home constituency
                    </label>
                    <input type="text" name='homeConstituency' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />

                  </div>
                </div>

                {/*  */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                      Home ward
                    </label>
                    <input type="text" name='homeWard' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/* postal address,postal code,Town */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Postal Address
                    </label>
                    <input type="text" name='postalAddress' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/*  */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Postal Code
                    </label>
                    <input type="text" name='postalCode' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/*  */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Town
                    </label>
                    <input type="text" name='town' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />

              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                SECTION TWO: Current public institution Category
              </h6>
              <div class="flex flex-wrap">

                <div class="w-full lg:w-4/12 px-4">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Current Public  Category
                    </label>
                    <input type="text" name='currentPublic' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                <div class="w-full lg:w-4/12 px-4">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Public institution

                    </label>
                    <input type="text" name='publicInstitution' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                <div class="w-full lg:w-4/12 px-4">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Station
                    </label>
                    <input type="text" name='station' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                <div class="w-full lg:w-4/12 px-4">
                  <div class="w-full mb-3 md:mt-4">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Employment Number
                    </label>
                    <input type="text" name='employmentNumber' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/*  */}
                <div class="w-full lg:w-4/12 px-4">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Present Substance Post(Full designation)
                    </label>
                    <input type="text" name='presentPost' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/*  */}
                <div class="w-full lg:w-4/12 px-6 md:mt-4">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="appointmentDate">
                      Date of Currrent Appointment
                    </label>
                    <input
                      type="date"
                      name='currentAppointmentDate'
                      required
                      id="appointmentDate"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/*  */}
                <div class="w-full lg:w-4/12 px-6">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="prevAppointmentDate">
                      Effective date of previous appointment
                    </label>
                    <input
                      type="date"
                      name='previousAppointmentDate'
                      required
                      id="prevAppointmentDate"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/*  */}
                <div class="w-full lg:w-4/12 px-4">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Designation of previous appointment
                    </label>
                    <input type="text" name='previousDesignation' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/*job group*/}

                {/* <div class="w-full lg:w-4/12 px-6">
                    <div className="w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="gender">
                      Job Group
                      </label>
                      <select
                        id="jobGroup"
                        name='jobGroup'
                        className="border-0 px-3 py-3  placeholder-blue-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                        <option value="" >Select Job Group</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                  </div> */}

                <div class="w-full lg:w-4/12 px-4 md:mt-4">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Job Group
                    </label>
                    <input type="text" name='jobGroup' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

                {/*  */}
                <div class="w-full lg:w-4/12 px-4">
                  <div class="w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Term of Service
                    </label>
                    <input type="text" name='termsOfService' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>

              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />

              <button type='submit' className='bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 mt-2 text-white'>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default Profile;

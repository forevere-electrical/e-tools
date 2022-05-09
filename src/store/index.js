import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    _houseDemands: 0,
    rules: [
      (value) => (value && RegExp("^[0-9]+.*$").test(value)) || "Positive number only",
    ],
    get houseDemands() {
      return this._houseDemands;
    },
    set houseDemands(value) {
      this._houseDemands = value;
    },
    tables: [
      {
        name: "table2",
        description: "Allowable ampacities for not more than three insulated copper conductors, rated not more than 5000 V and unshielded, in raceway or cable (based on an ambient temperature of 30 °C*)<br>(See Rules 4-004, 8-104, 12-3034, 26-142, 42-008, and 42-016 and Tables 5A, 5C, 19, 39, and D3.)",
        cols: 5,
        degree: [
          {
            temp: "60c",
            amps: ["15", "20", "30", "40", "55", "70", "85", "95", "110", "125", "145", "165", "195", "215", "240", "260", "280", "320", "350", "385", "400", "410", "435", "455", "495", "525", "545", "555"]
          },
          {
            temp: "75c",
            amps: ["20", "25", "35", "50", "65", "85", "100", "115", "130", "150", "175", "200", "230", "255", "285", "310", "335", "380", "420", "460", "475", "490", "520", "545", "590", "625", "650", "665"]
          },

          {
            temp: "90c",
            amps: ["25", "30", "40", "55", "75", "95", "115", "130", "145", "170", "195", "225", "260", "290", "320", "350", "380", "430", "475", "520", "535", "555", "585", "615", "665", "705", "735", "750"]
          },
          {
            temp: "110c",
            amps: ["25", "30", "45", "65", "80", "105", "125", "145", "165", "190", "220", "255", "290", "320", "360", "390", "425", "480", "530", "580", "600", "620", "655", "690", "745", "790", "820", "840"]
          },
          {
            temp: "125c",
            amps: ["30", "35", "45", "65", "90", "115", "135", "155", "175", "200", "235", "270", "310", "345", "385", "420", "450", "510", "565", "620", "640", "660", "700", "735", "—", "—", "—", "—"]
          },
          {
            temp: "200c",
            amps: ["35", "40", "60", "80", "110", "140", "165", "190", "215", "245", "290", "330", "380", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]
          }
        ],
        //awg_size:["14§",  "12§",  "10§",  "8",  "6",  "4",  "3",  "2",  "1",  "0",  "00",  "000",  "0000",  "250",  "300",  "350",  "400",  "500",  "600",  "700",  "750",  "800",  "900",  "1000",  "1250",  "1500",  "1750",  "2000"],
        awg_size: ["14", "12", "10", "8", "6", "4", "3", "2", "1", "0", "00", "000", "0000", "250", "300", "350", "400", "500", "600", "700", "750", "800", "900", "1000", "1250", "1500", "1750", "2000"],

        col1_title: "Size, AWG or kcmil",
        col2_title: "Allowable ampacity†,††, 60 °C‡",
        col3_title: "Allowable ampacity†,††, 75 °C‡",
        col4_title: "Allowable ampacity†,††, 90 °C‡**",
        col5_title: "Allowable ampacity†,††, 110 °C‡ See Note",
        col6_title: "Allowable ampacity†,††, 125 °C‡ See Note",
        col7_title: "Allowable ampacity†,††, 200 °C‡ See Note",
        notes: "These ampacities apply to bare conductors or under special circumstances where the use of insulated conductors having this temperature rating is acceptable.",
        star_notes: [
          "* See Table 5A for the correction factors to be applied to the values in Columns 2 to 7 for ambient temperatures over 30 °C.",
          "** For mineral-insulated cables, these ratings are based on the use of 90 °C insulation on the emerging conductors and for sealing. Where a deviation has been allowed in accordance with Rule 2-030, mineral-insulated cable may be used at a higher temperature without a decrease in the allowable ampacity, provided that the insulation, sealing material, and any jacketing material are suitable for the higher temperature."
        ],
        other_notes: [
          "† The ampacity of aluminum-sheathed cable is based on the type of insulation used on the copper conductors.",
          "‡ These are maximum allowable conductor temperatures for one, two, or three insulated conductors run in a raceway, or two or three insulated conductors run in a cable, and may be used in determining the ampacity of other conductor types listed in Table 19, which are so run, as follows: From Table 19 determine the maximum allowable conductor insulation temperature for that particular type, then from this Table determine the ampacity under the column of corresponding temperature rating.",
          "§ See Rule 14-104 2).", "** For mineral-insulated cables, these ratings are based on the use of 90 °C insulation on the emerging conductors and for sealing. Where a deviation has been allowed in accordance with Rule 2-030, mineral-insulated cable may be used at a higher temperature without a decrease in the allowable ampacity, provided that the insulation, sealing material, and any jacketing material are suitable for the higher temperature.",
          "†† See Table 5C for the correction factors to be applied to the values in Columns 2 to 7 where there are more than three insulated conductors in a run of raceway or cable."
        ]
      },

      {
        name: "table4",
        description: "Allowable ampacities for not more than three insulated aluminum conductors, rated not more than 5000 V and unshielded, in raceway or cable (based on an ambient temperature of 30 °C*)<br>(See Rules 4-004, 8-104, 26-142, 42-008, and 42-016 and Tables 5A and 5C.)",
        cols: 7,
        col1_title: "Size, AWG or kcmil",
        col2_title: "Allowable ampacity†,§, 60 °C‡",
        col3_title: "Allowable ampacity†,§, 75 °C‡",
        col4_title: "Allowable ampacity†,§, 90 °C‡**",
        col5_title: "Allowable ampacity†,§, 110 °C‡ See Note",
        col6_title: "Allowable ampacity†,§, 125 °C‡ See Note",
        col7_title: "Allowable ampacity†,§, 200 °C‡ See Note",
        awg_size: ["12", "10", "8", "6", "4", "3", "2", "1", "0", "00", "000", "0000", "250", "300", "350", "400", "500", "600", "700", "750", "800", "900", "1000", "1250", "1500", "1750", "2000"],
        degree: [
          {
            temp: "60c",
            amps: ["15", "25", "35", "40", "55", "65", "75", "85", "100", "115", "130", "150", "170", "195", "210", "225", "260", "285", "315", "320", "330", "355", "375", "405", "435", "455", "470"]
          },
          {
            temp: "75c",
            amps: ["20", "30", "40", "50", "65", "75", "90", "100", "120", "135", "155", "180", "205", "230", "250", "270", "310", "340", "375", "385", "395", "425", "445", "485", "520", "545", "560"]
          },
          {
            temp: "90c",
            amps: ["25", "35", "45", "55", "75", "85", "100", "115", "135", "150", "175", "205", "230", "260", "280", "305", "350", "385", "425", "435", "445", "480", "500", "545", "585", "615", "630"]
          },
          {
            temp: "110c",
            amps: ["25", "40", "50", "65", "80", "95", "115", "125", "150", "170", "195", "225", "260", "290", "315", "340", "390", "430", "475", "485", "500", "535", "560", "615", "655", "690", "710"]
          },
          {
            temp: "125c",
            amps: ["25", "40", "55", "70", "90", "100", "120", "135", "160", "180", "210", "245", "275", "310", "335", "365", "420", "460", "505", "520", "535", "575", "600", "—", "—", "—", "—"]
          },
          {
            temp: "200c",
            amps: ["35", "50", "65", "80", "105", "125", "150", "165", "195", "220", "255", "295", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]
          }
        ],
        notes: "These ampacities apply to bare conductors or under special circumstances where the use of insulated conductors having this temperature rating is acceptable.",
        star_notes: [
          "* See Table 5A for the correction factors to be applied to the values in Columns 2 to 7 for ambient temperatures over 30 °C.",
          "** See Rule 14-104 2)."
        ],
        other_notes: [
          "† The ampacity of aluminum-sheathed cable is based on the type of insulation used on the copper conductors.",
          "‡ These are maximum allowable conductor temperatures for one, two, or three insulated conductors run in a raceway, or two or three insulated conductors run in a cable, and may be used in determining the ampacity of other conductor types listed in Table 19, which are so run, as follows: From Table 19 determine the maximum allowable conductor insulation temperature for that particular type, then from this Table determine the ampacity under the column of corresponding temperature rating.",
          "§ See Table 5C for the correction factors to be applied to the values in Columns 2 to 7 where there are more than three insulated conductors in a run of raceway or cable."
        ]
      },

      {
        name: "table39",
        description: "Overcurrent device rating, A",
        cols: 5,
        col1_title: "Ampacity of largest service conductor or equivalent for multiple conductors, A",
        col2_title: "Copper [See Note 2)], For calculated loads up to, A*",
        col3_title: "Copper [See Note 2)], Conductor size, AWG or kcmil",
        col4_title: "Aluminum [See Note 3)], For calculated loads up to, A*",
        col5_title: "Aluminum [See Note 3)], Conductor size, AWG or kcmil",
        ov_rating_amp: [60, 100, 125, 200, 225, 400],
        copper_loads_amp: [60, 89, 121, 184, 210, 352],
        copper_conductor_size: [6, 4, 2, "2/0", "3/0", 400],
        al_loads_amp: [53, 95, 125, 189, 215, 357],
        al_conductor_size: [6, 2, "0", "0000", "250", "600"],
        notes: [
          ["1) This Table applies only to conductors sized for loads calculated in accordance with Rules 8-200 1) a), 8-200 2), or 8-202 1)."],
          ["2) If the calculated load exceeds the limit shown in this Table, the next larger size insulated conductor or cable shall be used."]
        ],
        star_note: "* These ampacities are the ampacities given in Tables 2 and 4 for 75 °C, increased by 5%."
      },

      {
        name: "table40",
        description: "External tapered threads for rigid metal conduit<br> (See Rule 12-1006.)",
        cols: 4,
        col1_title: "Trade size of conduit",
        col2_title: "Number of threads per 25.4 mm",
        col3_title: "Length of thread, Minimum, mm",
        col4_title: "Length of thread, Maximum, mm",
        trade_size: ["16", "21", "27", "35", "41", "53", "63", "78", "91", "103", "129", "155"],
        threads_per_inch: [14, 14, 11.5, 11.5, 11.5, 11.5, 8, 8, 8, 8, 8, 8],
        thread_length: [
          [16.3, 16.5, 20.6, 21.3, 21.8, 22.6, 33.5, 34.5, 36.3, 37.6, 40.4, 43.2],
          [19.8, 20.1, 24.9, 25.7, 26.2, 26.9, 39.9, 41.4, 42.7, 43.9, 46.7, 49.5]
        ]
      },

      {
        name: "table41",
        description: "Minimum size of bonding jumper for service raceways <br>(See Rules 10-614 and70-126.)",
        cols: 3,
        col1_title: "Ampacity of largest service conductor or equivalent for multiple conductors, A",
        col2_title: "Size of bonding jumper: Copper wire, AWG",
        col3_title: "Size of bonding jumper: Aluminum wire, AWG",
        conductor_amp: [100, 200, 400, 600, 800, 1000, 1200],
        bonding_jumper_size_copper: [8, 6, 4, 2, "0", "00", "000"],
        bonding_jumper_size_aluminum: [6, 4, 2, "0", "00", "000", "0000"]
      },

      {
        name: "table_D3",
        description: "Distance to centre of distribution for a 1% drop in voltage on nominal 120 V, 2-conductor copper circuits",
        cols: 16,
        Current: ["1.00", "1.25", "1.6", "2.0", "2.5", "3.2", "4.0", "5.0", "6.3", "8.0", "10.0", "12.5", "16", "20", "25", "32", "40", "50", "63", "80", "100", "125", "160", "200", "250", "320"],
        Copper_Size_Dist: [
          {
            size: "18",
            distance: ["24.2", "19.4", "15.1", "12.1", "9.7", "7.6", "6.1", "4.8", "3.8", "3.0", "2.4", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
          },
          {
            size: "16",
            distance: ["38.5", "30.8", "24.1", "19.3", "15.4", "12.0", "9.6", "7.7", "6.1", "4.8", "3.9", "3.1", "2.4", "", "", "", "", "", "", "", "", "", "", "", "", ""]
          },

          {
            size: "14",
            distance: ["61.4", "49.1", "38.4", "30.7", "24.6", "19.2", "15.3", "12.3", "9.7", "7.7", "6.1", "4.9", "3.8", "3.1", "", "", "", "", "", "", "", "", "", "", "", ""]
          },
          {
            size: "12",
            distance: ["", "", "61.0", "48.8", "39.0", "30.5", "24.4", "19.5", "15.5", "12.2", "9.8", "7.8", "6.1", "4.9", "3.9", "", "", "", "", "", "", "", "", "", "", ""]
          },
          {
            size: "10",
            distance: ["", "", "", "", "62.0", "48.5", "38.8", "31.0", "24.6", "19.4", "15.5", "12.4", "9.7", "7.8", "6.2", "4.8", "3.9", "", "", "", "", "", "", "", "", ""]
          },
          {
            size: "8",
            distance: ["", "", "", "", "", "", "", "61.7", "49.3", "39.1", "30.8", "24.7", "19.7", "15.4", "12.3", "9.9", "7.7", "6.2", "4.9", "3.9", "3.1", "", "", "", "", "", ""]
          },
          {
            size: "6",
            distance: ["", "", "", "", "", "", "", "", "", "62.2", "49.0", "39.2", "31.4", "24.5", "19.6", "15.7", "12.2", "9.8", "7.8", "6.2", "4.9", "3.9", "", "", "", "", ""]
          },
          {
            size: "4",
            distance: ["", "", "", "", "", "", "", "", "", "", "", "62.4", "49.9", "39.0", "31.2", "24.9", "19.6", "15.6", "12.5", "9.9", "7.8", "6.2", "5.0", "", "", "", ""]
          },
          {
            size: "3",
            distance: ["", "", "", "", "", "", "", "", "", "", "", "", "62.9", "49.1", "39.3", "31.4", "24.6", "19.7", "15.7", "12.5", "9.8", "7.9", "6.3", "4.9", "5.0", "", ""]
          },
          {
            size: "2",
            distance: ["", "", "", "", "", "", "", "", "", "", "", "", "", "62.0", "49.6", "39.7", "31.0", "24.8", "19.8", "15.7", "12.4", "9.9", "7.9", "6.2", "5.0", "", ""],
          },
          {
            size: "1",
            distance: ["", "", "", "", "", "", "", "", "", "", "", "", "", "62.5", "50.0", "39.1", "31.3", "25.0", "19.8", "15.6", "12.5", "10.0", "7.8", "6.3", "", ""]
          },
          {
            size: "0",
            distance: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "63.1", "49.3", "39.4", "31.5", "25", "19.7", "15.8", "12.6", "9.9", "7.9", "6.3", ""]
          },
          {
            size: "00",
            distance: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "62.1", "49.7", "39.8", "31.6", "24.8", "19.9", "15.9", "12.4", "9.9", "8.0", "6.2"]
          },
          {
            size: "000",
            distance: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "62.7", "50.1", "39.8", "31.3", "25.1", "20.1", "15.7", "12.5", "10.0", "7.8"]
          },
          {
            size: "0000",
            distance: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "63.2", "50.2", "39.5", "31.6", "25.3", "19.8", "15.8", "12.6", "9.9"]
          },
        ],

        awg_size: ["18", "16", "14", "12", "10", "8", "6", "4", "3", "2", "1", "0", "00", "000", "0000"],

        Distance_correction_factor:
        {
          rated_conductor_insulation_temperature: ["60c", "75c", "85-90c", "110c", "125c", "200c"],
          percentage_allowable_ampacity: ["100", "90", "80", "70", "60", "50", "40"],
          factor: [
            [1.00, 0.96, 0.91, 0.85, 0.82, 0.68],
            [1.02, 1.00, 0.95, 0.90, 0.87, 0.76],
            [1.04, 1.00, 1.00, 0.95, 0.92, 0.83],
            [1.06, 1.03, 1.00, 1.00, 0.97, 0.90],
            [1.07, 1.06, 1.04, 1.02, 1.00, 0.96],
            [1.09, 1.07, 1.06, 1.05, 1.04, 1.00],
            [1.10, 1.09, 1.08, 1.07, 1.07, 1.04]
          ]
        }
      },

      {
        name: "table13",
        description:
          "Rating or setting of overcurrent devices protecting conductors*",
        rules: "(See Rules 14-104 and 28-204.)",
        cols: 2,
        ocAmp: [
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          60,
          70,
          80,
          90,
          100,
          110,
          125,
          150,
          175,
          200,
          225,
          250,
          300,
          300,
          350,
          350,
          400,
          450,
          500,
          600,
          600,
          600,
        ],
        ampConductor: [
          "0–15",
          "16–20",
          "21–25",
          "26–30",
          "31–35",
          "36–40",
          "41–45",
          "46–50",
          "51–60",
          "61–70",
          "71–80",
          "81–90",
          "91–100",
          "101–110",
          "111–125",
          "126–150",
          "151–175",
          "176–200",
          "201–225",
          "226–250",
          "251–275",
          "276–300",
          "301–325",
          "326–350",
          "351–400",
          "401–450",
          "451–500",
          "501–525",
          "526–550",
          "551–600",
        ],
        star_notes:
          "*For general use where not otherwise specifically provided for.",
      },

      {
        name: 'table16',
        description: 'Minimum size of field-installed system bonding jumpers and bonding conductors (See Rule 10-614.)',
        ampereRating: {
          description: [
            'Ampere rating or setting of overcurrent device protecting conductor(s), equipment, etc.',
            'Allowable ampacity of largest ungrounded conductor or group of conductors.',
            'Not exceeding'
          ],
          value: [
            20, 30, 60, 100, 200, 300, 400, 500, 600, 800, 1000, 1200, 1600, 2000, 2500, 3000, 4000, 5000, 6000
          ]
        },
        bondingJunperSize: {
          description: 'Minimum size of system bonding jumper and bonding conductor',
          catagoey: {
            target: {
              wire: [
                {
                  name: 'Copper, AWG or kcmil',
                  value: [14, 12, 10, 8, 6, 4, 3, 2, 1, 0, 0, 0, 0, 250, 350, 400, 500, 700, 800]
                },
                {
                  name: 'Aluminum, AWG or kcmil',
                  value: [12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 250, 350, 400, 500, 600, 800, 1000, 1250]
                }
              ],
              bus: [
                {
                  name: 'Copper, mm2',
                  value: [2, 3.5, 5.5, 8.5, 10.5, 21, 26.5, 33.5, 42.5, 53.5, 67.5, 84, 107, 127.5, 177.5, 203, 253.5, 355, 405.5]
                },
                {
                  name: 'Aluminum, mm2',
                  value: [3.5, 5.5, 8.5, 10.5, 21, 26.5, 33.5, 42.5, 53.5, 67.5, 84, 127, 177.5, 203, 253.5, 355, 405.5, 507, 633.5]
                }
              ]
            }
          }
        }
      }
    ]
  },

  getters: {
    // get the least amperage value when feeding voltage is Edison Configuration 240V
    getLeastAmp: function (state) {
      // console.log('demands: ', state.houseDemands, typeof state.houseDemands);
      return state.houseDemands / 240;
    },

    // from a certain table get the amp value and wire gauge (AWG) according to insulation temp rating
    // temperature is the insluation temp rating value in celsus degree
    getTable: (state) => (table, temperature) => {
      let ampTable = state.tables.find(item => item.name === table).degree.find(t => t.temp === temperature).amps;
      let awgTable = state.tables.find(item => item.name === table).awg_size;
      // console.log('amptbale: ', ampTable);
      // console.log('awgtbale: ', awgTable);

      return { ampTable, awgTable }
    },

    // Calculate distance to center of distribution for a 1% drop in voltage on Nominal
    // 120v, 2 conductor copper circuit 
    getLength: (state) => (size, current) => {
      let i = state.tables[5].Current.findIndex(c => c == current);
      let d = state.tables[5].Copper_Size_Dist.find(s => s.size == size).distance;
      return d[i]
    },

    // to get the max current value of a certain conductor size
    getMaxCurrentPerSize: ((state, getters) => (size, temp) => {
      let obj = getters.getTable('table2', temp);
      let i = state.tables[0].awg_size.findIndex(s => s == size);
      return obj.ampTable[i]
    }),

    getInsulationTemp: (state) => state.tables[0].degree.map(t => t.temp),

    // certain size conductor on amperage carring to percentage of allowable ampacity 
    getPercentAmpToSize: (state, getters) => (i, size, temp) => i / getters.getMaxCurrentPerSize(size, temp),



    // getPercentTableD3: state => state.tables[5].

    // From known table and insulation temp value, and least amperage value, get minimum wire gauge value
    getLeastAwg: (state, getters) => (table, temperature) => {
      //getLeastAwg: (state, getters, ) => {
      // console.log('state: ', state);
      // console.log('getters): ', getters);
      // console.log('table: ', table); // 'table2'
      // console.log('temp: ', temperature); //'75c'
      // console.log('getleastamp: ', getters.getLeastAmp); //100
      // console.log("table  from input: ", getters.getTable(table, temperature));
      // 1.05 times applied according to table39 or CEC rule 4-004 22.
      var index = getters.getTable(table, temperature).ampTable.findIndex(a => (a * 1.05) > getters.getLeastAmp);
      // console.log('index===',index);
      let result = getters.getTable(table, temperature).awgTable[index];
      // console.log('result awg: ', result);
      return result;
    },

    getFeederAwg: (state) => (amp) => {
      var table39 = state.tables.find(item => item.name === 'table39');
      // console.log('table39 from getters: ', table39);
      return table39.find(a => a.copper_loads_amp > amp);
    }
  },

  mutations: {
    // setDemands (state, payload) {
    //   state.houseDemands += payload.demands;
    // },
    setDemands(state, demand) {
      state.houseDemands += demand;
      // console.log("mutate houseDemand set to: ", state.houseDemands, ", new value was ", demand);
    },
  },
  actions: {
    setDemands({ commit }) {
      commit('setDemands');
      // console.log("called action setdemand")
    }
  }
});

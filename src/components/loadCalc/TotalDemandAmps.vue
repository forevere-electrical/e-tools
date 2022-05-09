<template>
  <v-card class="lighten-2 mt-3 mx-auto" color="green lighten-4" hover>
    <v-row class="mx10">
      <div class="col-md-8 col-8 text-right">
        <strong>Total Demand Watts &#187;</strong>
      </div>
      <div class="mt-3 text-right text-warning">{{ totalDemandWatts }} W</div>
    </v-row>

    <v-row class="mx10">
      <div class="col-md-8 col-8 text-right">
        <strong>Total Demand Amps &#187;</strong>
      </div>
      <div class="mt-3 text-right text-warning" id="ampResults">{{ totalDemandWatts==0 ? '' : totalDemandAmps + ' A'}} </div>
    </v-row>

    <div v-if="(houseDemands/240) <= 200">
      <v-row class="mx10">
        <div class="col-md-8 col-8 text-right">
          <strong>Minimum Service Amps:</strong>
        </div>
        <div class="col-md-4 col-4 text-left">
          <div id="sampReq" class="text-primary">{{ totalDemandWatts==0 ? '' : totalDemandAmps + ' A' }} </div>
        </div>
      </v-row>

      <v-row class="mx10">
        <div class="col-md-8 col-8 text-right">
          <strong class="text-light">
            Hot Conductor Size</strong>
            
          
        </div>
        <div class="col-md-4 col-4 text-left">
          <div id="hotReq" class="text-warning">
            Cu: {{ conductorSize('table2',temp) }}
            <br />
            Al: {{ conductorSize('table4',temp) }}
          </div>
        </div>
        <div id="radio" class="col-md-12 col-12 text-left flex-center">
              <v-radio-group v-model="temp" row dense>
                <v-radio label="60" value="60c" ></v-radio>
                <v-radio label="75" value="75c" ></v-radio>
                <v-radio label="90°C" value="90c"></v-radio>
              </v-radio-group>
              </div>
      </v-row>

      <v-row class="mx10">
        <div class="col-md-8 col-8 text-right">
          <strong>Meter Base Rating:</strong>
        </div>
        <div class="col-md-4 col-4 text-left text-primary">
          <div id="metReq" class="text-primary">{{ totalDemandWatts==0 ? '' : meterBase }}&nbsp;</div>
        </div>
      </v-row>

      <v-row class="mx10">
        <div class="col-md-8 col-8 text-right">
          <strong class="text-light">Main Fuse / Breaker:</strong>
        </div>
        <div class="col-md-4 col-4 text-left text-warning">
          <div id="ocdReq" class="text-warning">{{ totalDemandWatts==0 ? '' : ocProtection + ' A' }} &nbsp;</div>
        </div>
      </v-row>

      <v-row class="mx10">
        <div class="col-md-8 col-8 text-right">
              <v-tooltip top color="primary">
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-home
        </v-icon>
      </template>
      <span> {{ groundingSize.hint }} </span>
    </v-tooltip>
          <strong>Service Grounding Conductor:</strong>
        </div>
        <div class="col-md-4 col-4 text-left">
          <div id="sgcReq" class="text-primary "> {{ totalDemandWatts==0 ? '' : 'Cu: ' + groundingSize.size.copper  }}</div>
          <div class="text-primary">  {{ totalDemandWatts==0 ? '' : 'Al: ' + groundingSize.size.al }} </div>
        </div>
      </v-row>

      <v-row class="mx10">
        <div class="col-md-8 col-8 text-right">
          <strong class="text-light">Service Bonding Jumper:</strong>
        </div>
        <div class="col-md-4 col-4 text-left">
          <div id="sgcReq" class="text-primary "> {{ totalDemandWatts==0 ? '' : 'Cu: AWG #' + bondingSize.copper }}</div>
          <div class="text-primary">  {{ totalDemandWatts==0 ? '' : 'Al: AWG #' + bondingSize.al }} </div>
        </div>
      </v-row>
<!-- for future use
      <v-row class="mx10">
        <div class="col-md-8 col-8 text-right">
          <strong>Service Conduit Size (threaded, rigid metal):</strong>
        </div>
        <div class="col-md-4 col-4 text-left">
          <div id="conReq" class="text-primary">&nbsp;</div>
        </div>
      </v-row> -->

      <v-row class="mx10">
        <div class="col-md-8 col-8 text-right text-light">
          <strong>Service Panel Size (minimum):</strong>
        </div>
        <div class="col-md-4 col-4 text-left">
          <div id="panReq" class="text-warning"> {{ branchCircuits }} </div>
        </div>
      </v-row>
    </div>
    <div v-else>
      <v-row class="mx10">
        <div class="col-md-2 col-1"></div>
        <div class="col-md-8 col-10">
          <v-alert
            border="top"
            color="red lighten-2"
            dark
          >Load calculation beyond residential limit of 200A, please consult your electrician.</v-alert>
        </div>
        <div class="col-md-2 col-1"></div>
      </v-row>
    </div>
    <v-spacer></v-spacer>
        <v-row>
      <v-col cols="6" sm2 lg1 xl1 class="py-10"> <v-btn depressed color="primary" @click="clearData">Clear Data</v-btn></v-col>
      <v-col cols="6" sm2 lg1 xl1 class="py-10"> <v-btn depressed to="/home">Back</v-btn></v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      temp: '75c',
      // Grounding conductor size according to rule 10-114 of CEC2018 page 110
      groundingSize: { 
        size: {copper: "AWG #6 ", al: "AWG #4 "}, 
        hint: "Rule: 10-114, permitedd to be 1) insulated or bare & 2) sized smaller but not smaller than the current-carrying conductor(s) of the system being grounded."
      },
      
    }
  },

  computed: {
    ...mapGetters(["getLeastAmp", "getLeastAwg", "getFeederAwg"]),
    ...mapState(["houseDemands", "tables","rules"]),

    // total amp demand in amps
    totalDemandWatts() {
      // console.log("this.houseDemands: ", this.houseDemands);
      return this.houseDemands;
    },
    totalDemandAmps() {
      var amp = parseFloat((this.totalDemandWatts / 240).toFixed(2));
      if (amp > 200)
        alert(
          "Load is beyond residential design limits of 200A, please check your input"
        );
      return amp;
    },

    // Meterbase selection
    meterBase: function () {
      if (this.totalDemandAmps <= 100) {
        return "100 A";
      } else if (this.totalDemandAmps <= 200) {
        return "200 A";
      } else {
        return " Upgrade to commercial grade recommended.";
      }
    },
    // From table 39 get feeder size in AWG
    getFeederSize: function () {
      return this.tables[2].ov_rating_amp.find((a) => a >= this.totalDemandAmps);
    },
   

    //Over current protection selection for copper wire 75C from table 13
    ocProtection: function () {
      return this.tables[6].ocAmp.find((a) => a >= this.totalDemandAmps);
    },

    // Bonding jumper size as table 16 
    bondingSize: function() {
      var index = this.tables[7].ampereRating.value.findIndex(v => v >= this.totalDemandAmps);
      // console.log('table16 amp rating index: ', index);
      let size = {copper: this.tables[7].bondingJunperSize.catagoey.target.wire[0].value[index],
                   al: this.tables[7].bondingJunperSize.catagoey.target.wire[1].value[index]};
      // console.log("Bonding jumper size: ", size);
      return size;
    },

    // get number of branch circuit positions inside the panel. Rule: 8-108 page 101 CEC2018
    branchCircuits: function() {
      if (this.totalDemandAmps == 0) return ''
      if (this.totalDemandAmps <= 60) {
        return 16;
      } else if (this.totalDemandAmps <= 100) {
        return 24;
      } else if (this.totalDemandAmps <= 125 ) {
        return 30;
      } else if (this.totalDemandAmps <= 200) {
        return 40;
      }
      return ''
    }
  },
  methods: {
    clearData() {
     this.$emit('clearInput');
    //  console.log('clear input insturction is out');
    },

    // get the hot conductore size from table 2 or table 4 @ 60, 75 or 90 celsius degree. 
     conductorSize(table, temp) {
      var size;
      if (this.totalDemandAmps === 0) {
        size = undefined;
      } else {
        size = this.getLeastAwg(table, temp);
      }
      if (size === "14§" || size === "12§" || size === "10§")
        size = parseInt(size);
      if (parseInt(size) >= 250) {
        size = size + " Kcmil";
      } else {
        size = isNaN(size) ? "" : size;
        size = (size === "" ? "" : "AWG #") + size;
      }
      return size;
    },
  }
};
</script>

<style scopped>
/* .flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  }

#radio .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {
    padding: 0 0px;
}  

.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 12px 2px 12px 12px;
}

.container {
    padding: 2px 2px 2px 2px;
}

.v-messages {
    min-height: 5px;
}

.v-text-field input {
    flex: 1 1 auto;
    line-height: 20px;
    padding: 8px 5px 8px 5px;
} */
</style>
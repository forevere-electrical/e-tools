<template>
  <div>
    <v-container>
      <v-card>
        <v-row>
          <v-col cols="9" offset="2">
            <v-text-field
              outlined
              :value="current"
              @change="(v) => (current = v)"
              class="text-darken-3 mt-3 text-right"
              :rules="rules"
              ml="5"
              type="number"
              clearable
              hide-details="auto"
              hint="Please input numbers only"
              placeholder="0"
              ref=""
            >
              <!-- @blur="combinedArea"
          @keyup.enter="combinedArea" -->
              <template v-slot:label>
                <b>How much current does the conductor carry?</b>
                <!-- v-model.trim="combined" -->
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <!-- <p>
          How much current does the conductor carry?
          <input
            class="input-style"
            type="text"
            name="current"
            v-model.number.trim="current"
            title="Please input a number"
            size="5"
          />A
        </p> -->

        <v-row>
          <v-col cols="9" offset="2">
            <v-text-field
              outlined
              :value="size"
              @change="(v) => (size = v)"
              class="text-darken-3 mt-3 text-right"
              :rules="rules"
              ml="5"
              type="number"
              clearable
              hide-details="auto"
              hint="Please input numbers only"
              placeholder="0"
              ref=""
            >
              <!-- @blur="combinedArea"
          @keyup.enter="combinedArea" -->
              <template v-slot:label>
                <b>What is the size of the copper conductor in AWG:</b>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <!-- <p>
          What is the size of the copper conductor in AWG:
          <select v-model="size" class="select-border">
            <option
              v-for="(option, index) in sizeTable"
              :key="index"
              :size="option.selected"
            >
              {{ option }}
            </option>
          </select>
        </p> -->

        <v-row>
          <v-col cols="9" offset="2">
            <v-text-field
              outlined
              :value="voltage"
              @change="(v) => (voltage = v)"
              class="text-darken-3 mt-3 text-right"
              :rules="rules"
              ml="5"
              type="number"
              clearable
              hide-details="auto"
              hint="Please input numbers only"
              placeholder="0"
              ref=""
            >
              <!-- @blur="combinedArea"
          @keyup.enter="combinedArea" -->
              <template v-slot:label>
                <b>What is the voltage of the copper conductor?</b>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <!-- <p>
          What is the voltage of the copper conductor?
          <input
            type="text"
            name="voltage"
            class="input-style"
            v-model.trim.number="voltage"
            title="Please input a number"
            size="5"
          />
        </p> -->

        <v-row>
          <v-col cols="9" offset="2">
            <v-text-field
              outlined
              :value="maxVdrop"
              @change="(v) => (maxVdrop = v)"
              class="text-darken-3 mt-3 text-right"
              :rules="rules"
              ml="5"
              type="number"
              clearable
              hide-details="auto"
              hint="Please input numbers only"
              placeholder="0"
              ref=""
            >
              <!-- @blur="combinedArea"
          @keyup.enter="combinedArea" -->
              <template v-slot:label>
                <b> Maximum Voltage drop % allowed:</b>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <!-- <p>
          Maximum Voltage drop % allowed:
          <input
            type="text"
            name="voltage"
            class="input-style"
            v-model.trim.number="maxVdrop"
            title="Please input a number without '%':"
            size="5"
          />%
        </p> -->
        <br />
        <p>
          Select conductor temp rating(℃):
          <select v-model="temp" class="select-border">
            <option
              v-for="(option, index) in getInsulationTemp"
              :key="index"
              :selected="option.selected"
            >
              {{ option }}
            </option>
          </select>
        </p>
        <v-row
          ><v-col cols="9" offset="2">
            From table 2, allowable ampacity for No.{{ size }}AWG conductor at
            {{ temp }}℃ rating is {{ maxCurrent }}A.
          </v-col>
        </v-row>
        <p></p>
        <v-row
          ><v-col cols="9" offset="2">
            Given current {{ current }}A to allowable ampacity {{ maxCurrent }}A
            is {{ currentRatio }}%
          </v-col>
        </v-row>
        <v-row
          ><v-col cols="10" offset="1">
            Table D3 tells Distance correction factor to be used under
            {{ getFactorRatio }}% is {{ getDistanceFactor }}m.
          </v-col>
        </v-row>
      </v-card>

      <p></p>
      
      <v-card color="#385F73" dark>
        <p></p>
        <v-row
          ><v-col cols="10" offset="1">
            Maximum run length of No. {{ size }}AWG copper NMD90 carrying
            {{ current }}A at nominal {{ voltage }}V under 1% voltage drop from
            table D3 is {{ getLength(size, current) }}m.
          </v-col>
        </v-row>
        <v-row
          ><v-col cols="10" offset="1">
            Distance corrention factor to be used for {{ temp }}℃ row,
            {{ getFactorRatio }}% column, is {{ getDistanceFactor }},
          </v-col>
        </v-row>
        <h4>
          <v-row
            ><v-col cols="10" offset="1"> The Maxmum run length is: </v-col>
          </v-row>
          <v-row
            ><v-col cols="10" offset="1">
              {{ getLength(size, current) }} x {{ maxVdrop }} x
              {{ getDistanceFactor }} x {{ voltage }} / 120V =
              {{ getMaxRunLength }}m.
            </v-col>
          </v-row>
        </h4>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      // selected: "75c",
      distance: "0",
      current: "16",
      size: "12",
      temp: "75c",
      maxVdrop: 1,
      voltage: 120,
      //currentRatio: 1
      //   sizeTable: [],
      //   ampt: [],
    };
  },
  computed: {
    ...mapGetters([
      "getTable",
      "getLength",
      "getMaxCurrentPerSize",
      "getPercentAmpToSize",
      // "getDistanceFactor",
      "getInsulationTemp",
    ]),
    ...mapState(["tables", "rules"]),
    ampTable() {
      let arr = this.getTable("table2", this.temp).ampTable;
      //if (arr[0] !== "Please select") arr.unshift("Please select");
      return arr;
    },
    sizeTable() {
      return this.getTable("table2", "75c").awgTable;
    },
    maxCurrent() {
      return this.getMaxCurrentPerSize(this.size, this.temp);
    },
    currentRatio() {
      return (this.current / this.maxCurrent).toFixed(2) * 100;
    },
    getFactorRatio() {
      let factor =
        this.tables[5].Distance_correction_factor.percentage_allowable_ampacity;
      console.log("factor=", factor);
      let ef = factor.filter((f) => f >= this.currentRatio);
      console.log("factors greater than:", ef);
      let minf = Math.min(...ef);
      console.log("getFactorRatio:", minf);
      return minf;
    },

    //For table D3 (concluded) to get distance correction factor
    getDistanceFactor() {
      let i =
        this.tables[5].Distance_correction_factor.rated_conductor_insulation_temperature.findIndex(
          (t) => t.includes(this.temp)
        );
      let j =
        this.tables[5].Distance_correction_factor.percentage_allowable_ampacity.findIndex(
          (a) => a == this.getFactorRatio
        );
      console.log("i,j is ", { i, j });

      return this.tables[5].Distance_correction_factor.factor[j][i];
    },

    getMaxRunLength() {
      let l = this.getLength(this.size, this.current);
      return (
        l *
        this.maxVdrop *
        this.getDistanceFactor *
        (this.voltage / 120)
      ).toFixed(2);
    },
  },
  methods: {
    // getTemp: ()=> this.temp,
    getAmpTables() {
      this.ampt = this.getTable("table2", this.temp).ampTable;
    },
    getSizeTables() {
      this.sizeTable = this.getTable("table2", this.temp).awgTable;
    },
  },
  onMounted: function () {
    this.ampTable = this.getTable("table2", this.temp).ampTable;
  },
};
</script>

<style>
.input-style {
  border-color: black;
  border-style: dotted;
  background: aqua;
  text-align: right;
}

.select-border {
  border-color: black;
  border-style: solid;
  border-width: 2px;
}
</style>

<template>
  <div class="hello" id="app1">
    <div class="radio">
      <sup>o</sup>C
      <input type="radio" id="Cel" value="Celsus" v-model="CorF">
      <input type="radio" id="Frh" value="F" v-model="CorF" /> <sup>o</sup>F
    </div>
    <div id="A">
      <p>temp {{ tmp }} celsus should be {{ findOhm }} ohms.</p>
      Please input temprature: <input name="t" type="text" v-model="tmp" />
      <p>
        <select name="tem" qv-model="tmp">
          <option value="" selected="true">Please pick a TEMP</option>
          <option v-for="(op, index) in tbl" :key="index">{{ op.temp }}</option>
        </select>
      </p>
    </div>
    <div id="A">
      <p>{{ om }} ohms should be {{ findTemp }} Celsus.</p>

      Please input resistance:
      <input name="o" value="100" type="text" v-model="om" />

      <p>
        <select v-model="om" :value="findOhm">
          <option value="" selected="true">Please pick a resistance</option>
          <option v-for="(op, index) in tbl" :key="index">{{ op.ohm }}</option>
        </select>
      </p>
    </div>    
  </div>
</template>


<script>
export default {
  name: "RtdTemp",

  data: function () {
    return {
      tbl: [
        { temp: -59, ohm: 76.73 },
        { temp: -58, ohm: 77.12 },
        { temp: -57, ohm: 77.52 },
        { temp: -56, ohm: 77.92 },
        { temp: -55, ohm: 78.32 },
        { temp: -54, ohm: 78.72 },
        { temp: -53, ohm: 79.11 },
        { temp: -52, ohm: 79.51 },
        { temp: -51, ohm: 79.91 },
        { temp: -50, ohm: 80.31 },
        { temp: -49, ohm: 80.7 },
        { temp: -48, ohm: 81.1 },
        { temp: -47, ohm: 81.5 },
        { temp: -46, ohm: 81.89 },
        { temp: -45, ohm: 82.29 },
        { temp: -44, ohm: 82.69 },
        { temp: -43, ohm: 83.08 },
        { temp: -42, ohm: 83.48 },
        { temp: -41, ohm: 83.87 },
        { temp: -40, ohm: 84.27 },
        { temp: -39, ohm: 84.67 },
        { temp: -38, ohm: 85.06 },
        { temp: -37, ohm: 85.46 },
        { temp: -36, ohm: 85.85 },
        { temp: -35, ohm: 86.25 },
        { temp: -34, ohm: 86.64 },
        { temp: -33, ohm: 87.04 },
        { temp: -32, ohm: 87.43 },
        { temp: -31, ohm: 87.83 },
        { temp: -30, ohm: 88.22 },
        { temp: -29, ohm: 88.62 },
        { temp: -28, ohm: 89.01 },
        { temp: -27, ohm: 89.4 },
        { temp: -26, ohm: 89.8 },
        { temp: -25, ohm: 90.19 },
        { temp: -24, ohm: 90.59 },
        { temp: -23, ohm: 90.98 },
        { temp: -22, ohm: 91.37 },
        { temp: -21, ohm: 91.77 },
        { temp: -20, ohm: 92.16 },
        { temp: -19, ohm: 92.55 },
        { temp: -18, ohm: 92.95 },
        { temp: -17, ohm: 93.34 },
        { temp: -16, ohm: 93.73 },
        { temp: -15, ohm: 94.12 },
        { temp: -14, ohm: 94.52 },
        { temp: -13, ohm: 94.91 },
        { temp: -12, ohm: 95.3 },
        { temp: -11, ohm: 95.69 },
        { temp: -10, ohm: 96.09 },
        { temp: -9, ohm: 96.48 },
        { temp: -8, ohm: 96.87 },
        { temp: -7, ohm: 97.26 },
        { temp: -6, ohm: 97.65 },
        { temp: -5, ohm: 98.04 },
        { temp: -4, ohm: 98.44 },
        { temp: -3, ohm: 98.83 },
        { temp: -2, ohm: 99.22 },
        { temp: -1, ohm: 99.61 },
        { temp: 0, ohm: 100 },
        { temp: 1, ohm: 100.39 },
        { temp: 2, ohm: 100.78 },
        { temp: 3, ohm: 101.17 },
        { temp: 4, ohm: 101.56 },
        { temp: 5, ohm: 101.95 },
        { temp: 6, ohm: 102.34 },
        { temp: 7, ohm: 102.73 },
        { temp: 8, ohm: 103.12 },
        { temp: 9, ohm: 103.51 },
        { temp: 10, ohm: 103.9 },
        { temp: 11, ohm: 104.29 },
        { temp: 12, ohm: 104.68 },
        { temp: 13, ohm: 105.07 },
        { temp: 14, ohm: 105.46 },
        { temp: 15, ohm: 105.85 },
        { temp: 16, ohm: 106.24 },
        { temp: 17, ohm: 106.63 },
        { temp: 18, ohm: 107.02 },
        { temp: 19, ohm: 107.4 },
        { temp: 20, ohm: 107.79 },
        { temp: 21, ohm: 108.18 },
        { temp: 22, ohm: 108.57 },
        { temp: 23, ohm: 108.96 },
        { temp: 24, ohm: 109.35 },
        { temp: 25, ohm: 109.73 },
        { temp: 26, ohm: 110.12 },
        { temp: 27, ohm: 110.51 },
        { temp: 28, ohm: 110.9 },
        { temp: 29, ohm: 111.29 },
        { temp: 30, ohm: 111.67 },
        { temp: 31, ohm: 112.06 },
        { temp: 32, ohm: 112.45 },
        { temp: 33, ohm: 112.83 },
        { temp: 34, ohm: 113.22 },
        { temp: 35, ohm: 113.61 },
        { temp: 36, ohm: 114 },
        { temp: 37, ohm: 114.38 },
        { temp: 38, ohm: 114.77 },
        { temp: 39, ohm: 115.15 },
        { temp: 40, ohm: 115.54 },
        { temp: 41, ohm: 115.93 },
        { temp: 42, ohm: 116.31 },
        { temp: 43, ohm: 116.7 },
        { temp: 44, ohm: 117.08 },
        { temp: 45, ohm: 117.47 },
        { temp: 46, ohm: 117.86 },
        { temp: 47, ohm: 118.24 },
        { temp: 48, ohm: 118.63 },
        { temp: 49, ohm: 119.01 },
        { temp: 50, ohm: 119.4 },
        { temp: 51, ohm: 119.78 },
        { temp: 52, ohm: 120.17 },
        { temp: 53, ohm: 120.55 },
        { temp: 54, ohm: 120.94 },
        { temp: 55, ohm: 121.32 },
        { temp: 56, ohm: 121.71 },
        { temp: 57, ohm: 122.09 },
        { temp: 58, ohm: 122.47 },
        { temp: 59, ohm: 122.86 },
        { temp: 60, ohm: 123.24 },
        { temp: 61, ohm: 123.63 },
        { temp: 62, ohm: 124.01 },
        { temp: 63, ohm: 124.39 },
        { temp: 64, ohm: 124.78 },
        { temp: 65, ohm: 125.16 },
        { temp: 66, ohm: 125.54 },
        { temp: 67, ohm: 125.93 },
        { temp: 68, ohm: 126.31 },
        { temp: 69, ohm: 126.69 },
        { temp: 70, ohm: 127.08 },
        { temp: 71, ohm: 127.46 },
        { temp: 72, ohm: 127.84 },
        { temp: 73, ohm: 128.22 },
        { temp: 74, ohm: 128.61 },
        { temp: 75, ohm: 128.99 },
        { temp: 76, ohm: 129.37 },
        { temp: 77, ohm: 129.75 },
        { temp: 78, ohm: 130.13 },
        { temp: 79, ohm: 130.52 },
        { temp: 80, ohm: 130.9 },
        { temp: 81, ohm: 131.28 },
        { temp: 82, ohm: 131.66 },
        { temp: 83, ohm: 132.04 },
        { temp: 84, ohm: 132.42 },
        { temp: 85, ohm: 132.8 },
        { temp: 86, ohm: 133.18 },
        { temp: 87, ohm: 133.57 },
        { temp: 88, ohm: 133.95 },
        { temp: 89, ohm: 134.33 },
        { temp: 90, ohm: 134.71 },
        { temp: 91, ohm: 135.09 },
        { temp: 92, ohm: 135.47 },
        { temp: 93, ohm: 135.85 },
        { temp: 94, ohm: 136.23 },
        { temp: 95, ohm: 136.61 },
        { temp: 96, ohm: 136.99 },
        { temp: 97, ohm: 137.37 },
        { temp: 98, ohm: 137.75 },
        { temp: 99, ohm: 138.13 },
        { temp: 100, ohm: 138.51 },
        { temp: 101, ohm: 138.88 },
        { temp: 102, ohm: 139.26 },
        { temp: 103, ohm: 139.64 },
        { temp: 104, ohm: 140.02 },
        { temp: 105, ohm: 140.4 },
        { temp: 106, ohm: 140.78 },
        { temp: 107, ohm: 141.16 },
        { temp: 108, ohm: 141.54 },
        { temp: 109, ohm: 141.91 },
        { temp: 110, ohm: 142.29 },
        { temp: 111, ohm: 142.67 },
        { temp: 112, ohm: 143.05 },
        { temp: 113, ohm: 143.43 },
        { temp: 114, ohm: 143.8 },
        { temp: 115, ohm: 144.18 },
        { temp: 116, ohm: 144.56 },
        { temp: 117, ohm: 144.94 },
        { temp: 118, ohm: 145.31 },
        { temp: 119, ohm: 145.69 },
        { temp: 120, ohm: 146.07 },
        { temp: 121, ohm: 146.44 },
        { temp: 122, ohm: 146.82 },
        { temp: 123, ohm: 147.2 },
        { temp: 124, ohm: 147.57 },
        { temp: 125, ohm: 147.95 },
        { temp: 126, ohm: 148.33 },
        { temp: 127, ohm: 148.7 },
        { temp: 128, ohm: 149.08 },
        { temp: 129, ohm: 149.46 },
        { temp: 130, ohm: 149.83 },
        { temp: 131, ohm: 150.21 },
        { temp: 132, ohm: 150.58 },
        { temp: 133, ohm: 150.96 },
        { temp: 134, ohm: 151.33 },
        { temp: 135, ohm: 151.71 },
        { temp: 136, ohm: 152.08 },
        { temp: 137, ohm: 152.46 },
        { temp: 138, ohm: 152.83 },
        { temp: 139, ohm: 153.21 },
        { temp: 140, ohm: 153.58 },
        { temp: 141, ohm: 153.96 },
        { temp: 142, ohm: 154.33 },
        { temp: 143, ohm: 154.71 },
        { temp: 144, ohm: 155.08 },
        { temp: 145, ohm: 155.46 },
        { temp: 146, ohm: 155.83 },
        { temp: 147, ohm: 156.2 },
        { temp: 148, ohm: 156.58 },
        { temp: 149, ohm: 156.95 },
        { temp: 150, ohm: 157.33 },
        { temp: 151, ohm: 157.7 },
        { temp: 152, ohm: 158.07 },
        { temp: 153, ohm: 158.45 },
        { temp: 154, ohm: 158.82 },
        { temp: 155, ohm: 159.19 },
        { temp: 156, ohm: 159.56 },
        { temp: 157, ohm: 159.94 },
        { temp: 158, ohm: 160.31 },
        { temp: 159, ohm: 160.68 },
        { temp: 160, ohm: 161.05 },
        { temp: 161, ohm: 161.43 },
        { temp: 162, ohm: 161.8 },
        { temp: 163, ohm: 162.17 },
        { temp: 164, ohm: 162.54 },
        { temp: 165, ohm: 162.91 },
        { temp: 166, ohm: 163.29 },
        { temp: 167, ohm: 163.66 },
        { temp: 168, ohm: 164.03 },
        { temp: 169, ohm: 164.4 },
        { temp: 170, ohm: 164.77 },
        { temp: 171, ohm: 165.14 },
        { temp: 172, ohm: 165.51 },
        { temp: 173, ohm: 165.89 },
        { temp: 174, ohm: 166.26 },
        { temp: 175, ohm: 166.63 },
        { temp: 176, ohm: 167 },
        { temp: 177, ohm: 167.37 },
        { temp: 178, ohm: 167.74 },
        { temp: 179, ohm: 168.11 },
        { temp: 180, ohm: 168.48 },
        { temp: 181, ohm: 168.85 },
        { temp: 182, ohm: 169.22 },
        { temp: 183, ohm: 169.59 },
        { temp: 184, ohm: 169.96 },
        { temp: 185, ohm: 170.33 },
        { temp: 186, ohm: 170.7 },
        { temp: 187, ohm: 171.07 },
        { temp: 188, ohm: 171.43 },
        { temp: 189, ohm: 171.8 },
        { temp: 190, ohm: 172.17 },
        { temp: 191, ohm: 172.54 },
        { temp: 192, ohm: 172.91 },
        { temp: 193, ohm: 173.28 },
        { temp: 194, ohm: 173.65 },
        { temp: 195, ohm: 174.02 },
        { temp: 196, ohm: 174.38 },
        { temp: 197, ohm: 174.75 },
        { temp: 198, ohm: 175.12 },
        { temp: 199, ohm: 175.49 },
        { temp: 200, ohm: 175.86 },
        { temp: 201, ohm: 176.22 },
        { temp: 202, ohm: 176.59 },
        { temp: 203, ohm: 176.96 },
        { temp: 204, ohm: 177.33 },
        { temp: 205, ohm: 177.69 },
        { temp: 206, ohm: 178.06 },
        { temp: 207, ohm: 178.43 },
        { temp: 208, ohm: 178.79 },
        { temp: 209, ohm: 179.16 },
        { temp: 210, ohm: 179.53 },
        { temp: 211, ohm: 179.89 },
        { temp: 212, ohm: 180.26 },
        { temp: 213, ohm: 180.63 },
        { temp: 214, ohm: 180.99 },
        { temp: 215, ohm: 181.36 },
        { temp: 216, ohm: 181.72 },
        { temp: 217, ohm: 182.09 },
        { temp: 218, ohm: 182.46 },
        { temp: 219, ohm: 182.82 },
        { temp: 220, ohm: 183.19 },
        { temp: 221, ohm: 183.55 },
        { temp: 222, ohm: 183.92 },
        { temp: 223, ohm: 184.28 },
        { temp: 224, ohm: 184.65 },
        { temp: 225, ohm: 185.01 },
        { temp: 226, ohm: 185.38 },
        { temp: 227, ohm: 185.74 },
        { temp: 228, ohm: 186.11 },
        { temp: 229, ohm: 186.47 },
        { temp: 230, ohm: 186.84 },
        { temp: 231, ohm: 187.2 },
        { temp: 232, ohm: 187.56 },
        { temp: 233, ohm: 187.93 },
        { temp: 234, ohm: 188.29 },
        { temp: 235, ohm: 188.66 },
        { temp: 236, ohm: 189.02 },
        { temp: 237, ohm: 189.38 },
        { temp: 238, ohm: 189.75 },
        { temp: 239, ohm: 190.11 },
        { temp: 240, ohm: 190.47 },
        { temp: 241, ohm: 190.84 },
        { temp: 242, ohm: 191.2 },
        { temp: 243, ohm: 191.56 },
        { temp: 244, ohm: 191.92 },
        { temp: 245, ohm: 192.29 },
        { temp: 246, ohm: 192.65 },
        { temp: 247, ohm: 193.01 },
        { temp: 248, ohm: 193.37 },
        { temp: 249, ohm: 193.74 },
      ],
      ohms: 100,
      temp: 0,
      tmp: 0,
      om: 100,
      CorF:''
    };
  },
  computed: {
    findOhm: function () {
      const result =
        this.tbl[this.tbl.findIndex((x) => x.temp == parseInt(this.tmp))].ohm;

      return result;
    },

    findTemp: function () {
      return this.tbl[
        this.tbl.findIndex((x) => Math.abs(x.ohm - parseFloat(this.om)) < 0.2)
      ].temp;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: grid;
  grid-template-columns: 40%, 60%;
  grid-template-rows: auto, 45%;
}
p {
  padding: 10px;
  margin: 20px;
  background: #ccc;
}
.hellow {
  display: grid;
}
a {
  color: #42b983;
}
#A {
  grid-column: 1;
}
.flex {
  display: flex;
  flex-direction: column;
  background: beigh;
}
</style>

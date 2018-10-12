<template>
<div class="page">

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul id="ul-error">
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </p>

  <p v-if="success.length">
    <b>Congrats</b>
    <ul id="ul-success">
      <li v-for="suc in success" :key="suc.id">{{ suc }}</li>
    </ul>
  </p>
    <div>
    <b-input-group prepend="Compnos" >
        <b-form-input
        id="compnos"
        v-model="compnos"
        type="text"
        name="compnos"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Nature code" >
        <b-form-input
        id="naturecode"
        v-model="naturecode"
        type="text"
        name="naturecode"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Description" >
        <b-form-input
        id="incident_type_description"
        v-model="incident_type_description"
        type="text"
        name="incident_type_description"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Code crime" >
        <b-form-input
        id="main_crimecode"
        v-model="main_crimecode"
        type="text"
        name="main_crimecode"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Rept distric" >
        <b-form-input
        id="reptdistrict"
        v-model="reptdistrict"
        type="text"
        name="reptdistrict"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Reporting" >
        <b-form-input
        id="reportingarea"
        v-model="reportingarea"
        type="text"
        name="reportingarea"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Date" >
        <b-form-input
        id="fromdate"
        v-model="fromdate"
        type="text"
        name="fromdate"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Weapon type" >
        <b-form-input
        id="weapontype"
        v-model="weapontype"
        type="text"
        name="weapontype"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Shooting" >
        <b-form-input
        id="shooting"
        v-model="shooting"
        type="text"
        name="shooting"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Domestic" >
        <b-form-input
        id="domestic"
        v-model="domestic"
        type="text"
        name="domestic"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Shift" >
        <b-form-input
        id="shift"
        v-model="shift"
        type="text"
        name="shift"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Year" >
        <b-form-input
        id="year"
        v-model="year"
        type="text"
        name="year"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Month" >
        <b-form-input
        id="month"
        v-model="month"
        type="text"
        name="month"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Day week" >
        <b-form-input
        id="day_week"
        v-model="day_week"
        type="text"
        name="day_week"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Ucrpart" >
        <b-form-input
        id="ucrpart"
        v-model="ucrpart"
        type="text"
        name="ucrpart"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="X" >
        <b-form-input
        id="x"
        v-model="x"
        type="text"
        name="x"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Y" >
        <b-form-input
        id="y"
        v-model="y"
        type="text"
        name="y"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Streetname" >
        <b-form-input
        id="streetname"
        v-model="streetname"
        type="text"
        name="streetname"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="X streetname" >
        <b-form-input
        id="xstreetname"
        v-model="xstreetname"
        type="text"
        name="xstreetname"></b-form-input>
    </b-input-group>
    </div>
    <br>
    <div>
    <b-input-group prepend="Location" >
        <b-form-input
        id="location"
        v-model="location"
        type="text"
        name="location"></b-form-input>
    </b-input-group>
    </div>
    <br>

  <p>
    <b-button @click="postInscription" >Submit </b-button>
  </p>

</div>
</template>

<script>
import axios from 'axios';
import querystring from 'querystring'

export default {
  data() {
    return {
    errors: [],
    success: [],
    compnos: null,
    naturecode: null,
    incident_type_description: null,
    main_crimecode: null,
    reptdistrict: null,
    reportingarea: null,
    fromdate: null,
    weapontype: null,
    shooting: null,
    domestic: null,
    shift: null,
    year: null,
    month: null,
    day_week: null,
    ucrpart: null,
    x: null,
    y: null,
    streetname: null,
    xstreetname: null,
    location: null
    }
  },
  
  methods:{
    postInscription(e) {
      this.errors = [];
      this.success = [];
      if (this.compnos && this.naturecode && this.incident_type_description && this.main_crimecode && this.reptdistrict && this.reportingarea
       && this.fromdate && this.weapontype && this.shooting && this.domestic && this.shift && this.year
        && this.month && this.day_week && this.ucrpart && this.x && this.y && this.streetname
         && this.xstreetname && this.location) {
        axios.post("http://localhost:8080/crimes", querystring.stringify({
            compnos: this.compnos,
            naturecode: this.naturecode,
            incident_type_description: this.incident_type_description,
            main_crimecode: this.main_crimecode,
            reptdistrict: this.reptdistrict,
            reportingarea: this.reportingarea,
            fromdate: this.fromdate,
            weapontype: this.weapontype,
            shooting: this.shooting,
            domestic: this.domestic,
            shift: this.shift,
            year: this.year,
            month: this.month,
            day_week: this.day_week,
            ucrpart: this.ucrpart,
            x: this.x,
            y: this.y,
            streetname: this.streetname,
            xstreetname: this.xstreetname,
            location: this.location
        }))
        .then(response => {
            console.log(response);
          this.success.push("Add successfull");
        })
        .catch(err => {
          this.errors.push(err.response.data);
          e.preventDefault();
          return false;
        })
        return true;
      }

      if (!this.compnos) {
        this.errors.push('Compnos required.');
      }
      if (!this.naturecode) {
        this.errors.push('Nature code required.');
      }
      if (!this.incident_type_description) {
        this.errors.push('Description required.');
      }
      if (!this.main_crimecode) {
        this.errors.push('Crime code required.');
      }
      if (!this.reptdistrict) {
        this.errors.push('Rept district required.');
      }
      if (!this.reportingarea) {
        this.errors.push('Reporting required.');
      }
      if (!this.naturecode) {
        this.errors.push('Nature code required.');
      }
      if (!this.fromdate) {
        this.errors.push('Date required.');
      }
      if (!this.weapontype) {
        this.errors.push('Weapon type required.');
      }
      if (!this.shooting) {
        this.errors.push('Shooting required.');
      }
      if (!this.domestic) {
        this.errors.push('Domestic required.');
      }
      if (!this.shift) {
        this.errors.push('Shift required.');
      }
      if (!this.year) {
        this.errors.push('Year required.');
      }
      if (!this.month) {
        this.errors.push('Month required.');
      }
      if (!this.day_week) {
        this.errors.push('Day week required.');
      }
      if (!this.ucrpart) {
        this.errors.push('Ucrpart required.');
      }
      if (!this.x) {
        this.errors.push('X required.');
      }
      if (!this.y) {
        this.errors.push('Y required.');
      }
      if (!this.streetname) {
        this.errors.push('Streetname required.');
      }
      if (!this.xstreetname) {
        this.errors.push('X streetname required.');
      }
      if (!this.location) {
        this.errors.push('Location required.');
      }

      e.preventDefault();
    }
  }
}
</script>

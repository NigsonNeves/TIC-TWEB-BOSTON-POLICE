const CrimeService = require('../services/crime.services');
class CrimeController {
    async showAllCrimes(request, h) {
        const result = await CrimeService.showAllCrimes();
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showOneCrime(request, h) {
        const idCrime = request.params.idCrime;
        const result = await CrimeService.showOneCrime(idCrime);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByCompnos(request, h) {
        const compnos = request.params.compnos;
        const result = await CrimeService.showByCompnos(compnos);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByWeapon(request, h) {
        const weapon = request.params.weapon;
        const result = await CrimeService.showByWeapon(weapon);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByStreetname(request, h) {
        const streetname = request.params.streetname;
        const result = await CrimeService.showByStreetname(streetname);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByMonth(request, h) {
        const month = request.params.month;
        const result = await CrimeService.showByMonth(month);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByDay(request, h) {
        const day = request.params.day;
        const result = await CrimeService.showByDay(day);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByUcrpart(request, h) {
        const ucrpart = request.params.ucrpart;
        const result = await CrimeService.showByUcrpart(ucrpart);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByType(request, h) {
        const type = request.params.type;
        const result = await CrimeService.showByType(type);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByNature(request, h) {
        const nature = request.params.nature;
        const result = await CrimeService.showByNature(nature);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showByDistrict(request, h) {
        const district = request.params.district;
        const result = await CrimeService.showByDistrict(district);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async create(request, h) {
        const compnos = request.payload.compnos ;
        const naturecode = request.payload.naturecode;
        const incident_type_description = request.payload.incident_type_description;
        const main_crimecode = request.payload.main_crimecode;
        const reptdistrict = request.payload.reptdistrict;
        const reportingarea = request.payload.reportingarea;
        const fromdate = request.payload.fromdate;
        const weapontype = request.payload.weapontype;
        const shooting = request.payload.shooting;
        const domestic = request.payload.domestic   ;
        const shift = request.payload.shift;
        const year = request.payload.year;
        const month = request.payload.month;
        const day_week = request.payload.day_week;
        const ucrpart = request.payload.ucrpart; 
        const x = request.payload.x;
        const y = request.payload.y;
        const streetname = request.payload.streetname; 
        const xstreetname = request.payload.xstreetname;
        const location = request.payload.location;
        const result = await CrimeService.create(grade, email, password);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async update(request, h) {
        const idUser = request.params.idUser;
        const grade = request.payload.grade;
        const email = request.payload.email;
        const password = request.payload.password;
        const confirmed = request.payload.confirmed;
        const result = await UserService.update(grade, email, password, confirmed, idUser);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async validate(request, h) {
        const idUser = request.params.idUser;
        const idAdmin = request.payload.idAdmin;
        const result = await UserService.validateUser(idUser, idAdmin);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async delete(request, h) {
        const idCrime = request.params.idCrime;
        const result = await CrimeService.delete(idCrime);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

}

module.exports = new CrimeController();